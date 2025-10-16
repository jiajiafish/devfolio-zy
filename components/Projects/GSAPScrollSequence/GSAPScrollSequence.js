import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GSAPScrollSequence = ({ scrollImages }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef({ frame: 0 });

  useEffect(() => {
    if (!scrollImages || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    // 设置画布尺寸
    canvas.width = 1158;
    canvas.height = 770;

    const { frameCount, imagePath, imagePrefix, imageExtension } = scrollImages;

    // 创建图片加载函数
    const currentFrame = (index) => {
      const frameNumber = (index + 1).toString().padStart(4, "0");
      return `${imagePath}${imagePrefix}${frameNumber}${imageExtension}`;
    };

    // 预加载所有图片
    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        imagesRef.current.push(img);
      }
    };

    // 渲染函数
    const render = () => {
      if (!contextRef.current || !imagesRef.current[frameRef.current.frame]) return;
      
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      contextRef.current.drawImage(
        imagesRef.current[frameRef.current.frame],
        0,
        0
      );
    };

    // 预加载图片
    preloadImages();

    // 设置GSAP动画
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=5000", // 5000px滚动距离
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(frameRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    // 第一张图片加载完成后立即渲染
    if (imagesRef.current[0]) {
      if (imagesRef.current[0].complete) {
        render();
      } else {
        imagesRef.current[0].onload = render;
      }
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollImages]);

  return (
    <div className="relative w-full h-screen">
      <canvas
        ref={canvasRef}
        id="hero-lightpass"
        className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <div className="h-[5000px]" /> {/* 创建滚动空间 */}
    </div>
  );
};

export default GSAPScrollSequence;