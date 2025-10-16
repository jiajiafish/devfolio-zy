import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ScrollSequence.module.scss";

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 序列帧动画配置 - 减少帧数以提高性能
  const frameCount = 60;
  const canvasWidth = 1158;
  const canvasHeight = 770;

  // 生成序列帧图片URL - 使用DummyImage作为替代方案
  const currentFrame = (index) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    const colorIndex = index % colors.length;
    const nextColorIndex = (index + 1) % colors.length;
    
    return `https://dummyimage.com/${canvasWidth}x${canvasHeight}/${colors[colorIndex].slice(1)}/${colors[nextColorIndex].slice(1)}&text=Frame+${index + 1}`;
  };

  useEffect(() => {
    // 预加载所有图片
    const loadImages = async () => {
      const imagePromises = [];
      
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        
        const promise = new Promise((resolve, reject) => {
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`图片 ${i} 加载失败，使用备用图片`);
            // 创建备用canvas
            const backupCanvas = document.createElement('canvas');
            backupCanvas.width = canvasWidth;
            backupCanvas.height = canvasHeight;
            const ctx = backupCanvas.getContext('2d');
            
            // 绘制简单的备用图形
            const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
            const colorIndex = i % colors.length;
            
            ctx.fillStyle = colors[colorIndex];
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`Frame ${i + 1}`, canvasWidth / 2, canvasHeight / 2);
            
            resolve(backupCanvas);
          };
        });
        
        imagePromises.push(promise);
      }

      try {
        const loadedImages = await Promise.all(imagePromises);
        setImages(loadedImages);
        setIsLoaded(true);
      } catch (error) {
        console.error("图片加载失败:", error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    // 设置canvas尺寸
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 创建GSAP动画对象
    const airpods = { frame: 0 };

    // 渲染函数
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      if (images[airpods.frame]) {
        context.drawImage(images[airpods.frame], 0, 0);
      }
    };

    // 第一张图片加载完成后立即渲染
    render();

    // 创建GSAP ScrollTrigger动画
    const scrollAnimation = gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        onUpdate: render
      },
      onUpdate: render
    });

    // 清理函数
    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded, images]);

  return (
    <section 
      ref={containerRef}
      className={styles.scrollSequence}
      style={{ height: '500vh' }}
    >
      <div className={styles.canvasContainer}>
        <canvas
          ref={canvasRef}
          id="hero-lightpass"
          className={styles.canvas}
        />
        
        {!isLoaded && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>加载动画中...</p>
          </div>
        )}
      </div>
      
      {/* 添加一些内容来确保有足够的滚动空间 */}
      <div className={styles.scrollContent}>
        <div className={styles.contentTop}>
          <h2>滚动查看序列帧动画</h2>
          <p>体验精彩的序列帧动画效果</p>
        </div>
        
        <div className={styles.contentBottom}>
          <h3>动画结束</h3>
          <p>继续探索更多内容</p>
        </div>
      </div>
    </section>
  );
};

export default ScrollSequence;