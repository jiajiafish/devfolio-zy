import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// 注册ScrollTrigger插件
gsap.registerPlugin(ScrollTrigger);

const AppleScrollSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 序列帧配置 - 使用更少的帧数以提高性能
  const frameCount = 60;
  const canvasWidth = 1158;
  const canvasHeight = 770;
  
  // 使用DummyImage生成彩色序列帧图片
  const generateFrameUrl = (index) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
      '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA',
      '#AED6F1', '#D7BDE2', '#F9E79F', '#A9DFBF', '#F5B7B1', '#AED6F1'
    ];
    
    const colorIndex = index % colors.length;
    const nextColorIndex = (index + 1) % colors.length;
    const bgColor = colors[colorIndex].slice(1);
    const textColor = colors[nextColorIndex].slice(1);
    
    return `https://dummyimage.com/${canvasWidth}x${canvasHeight}/${bgColor}/${textColor}&text=Frame+${index + 1}`;
  };

  useEffect(() => {
    // 初始化canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 加载并渲染第一帧
    const loadFirstFrame = async () => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = generateFrameUrl(0);
      
      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);
        setIsLoaded(true);
      };
    };

    loadFirstFrame();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // 创建GSAP动画
    const animation = gsap.to({ frame: 0 }, {
      frame: frameCount - 1,
      duration: 3,
      ease: "none",
      snap: { frame: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000", // 3000px滚动距离
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
      onUpdate: function() {
        const frameIndex = Math.round(this.targets()[0].frame);
        setCurrentFrame(frameIndex);
        
        // 加载并渲染当前帧
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = generateFrameUrl(frameIndex);
        
        img.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0);
        };
      }
    });

    // 清理函数
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>加载序列帧中...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
      style={{ height: '400vh' }} // 提供足够的滚动空间
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <canvas
          ref={canvasRef}
          id="hero-lightpass"
          className="max-w-full max-h-full object-contain"
          style={{ 
            width: 'auto', 
            height: 'auto',
            maxWidth: '100vw',
            maxHeight: '100vh'
          }}
        />
        
        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
          <div className="text-sm mb-2">向下滚动查看动画</div>
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10 bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            创新设计体验
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            通过滚动驱动的序列帧动画，我们展示了产品设计的每一个细节。
            这种沉浸式的体验让用户能够深入了解产品的工艺和设计理念。
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppleScrollSequence;