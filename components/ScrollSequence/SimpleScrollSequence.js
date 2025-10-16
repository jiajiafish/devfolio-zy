import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ScrollSequence.module.scss";

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

const SimpleScrollSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const frameCount = 30; // 减少帧数到30帧，缩短滚动长度
  const canvasWidth = 1158;
  const canvasHeight = 770;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    
    // 设置canvas尺寸
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 创建动画对象
    const animation = { frame: 0 };

    // 渲染函数 - 直接绘制图形
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // 创建渐变背景
      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      const hue = (animation.frame / frameCount) * 360;
      gradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
      gradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 70%, 40%)`);
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // 绘制动态圆形
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 100 + Math.sin(animation.frame * 0.1) * 50;
      
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fillStyle = `hsl(${(hue + 180) % 360}, 70%, 80%)`;
      context.fill();
      
      // 绘制文字
      context.fillStyle = '#FFFFFF';
      context.font = 'bold 48px Arial';
      context.textAlign = 'center';
      context.fillText(`Frame ${animation.frame + 1}`, centerX, centerY);
      
      // 绘制进度条
      const progress = animation.frame / frameCount;
      const barWidth = canvas.width * 0.8;
      const barHeight = 10;
      const barX = (canvas.width - barWidth) / 2;
      const barY = canvas.height - 100;
      
      // 背景条
      context.fillStyle = 'rgba(255, 255, 255, 0.3)';
      context.fillRect(barX, barY, barWidth, barHeight);
      
      // 进度条
      context.fillStyle = '#FFFFFF';
      context.fillRect(barX, barY, barWidth * progress, barHeight);
    };

    // 初始渲染
    render();

    // 创建GSAP ScrollTrigger动画
    const scrollAnimation = gsap.to(animation, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", /* 减少滚动距离，让动画更快完成 */
        scrub: 0.3, /* 减少scrub时间，让动画响应更快 */
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
  }, []);

  return (
    <section 
      ref={containerRef}
      className={styles.scrollSequence}
      style={{ height: '200vh' }} /* 减少容器高度从300vh到200vh */
    >
      <div className={styles.canvasContainer}>
        <canvas
          ref={canvasRef}
          id="hero-lightpass"
          className={styles.canvas}
        />
        
        <div className={styles.scrollContent}>
          <div className={styles.contentTop}>

          </div>
          
          <div className={styles.contentBottom}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleScrollSequence;