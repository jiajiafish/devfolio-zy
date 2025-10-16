import { useState, useEffect } from "react";

const ImageSlider = ({ images, projectTitle }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 自动播放
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 5秒切换一次

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <>
      {/* 图片滑块主体 */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900">
          {/* 主图片 */}
          <div className="relative aspect-[16/10] w-full">
            <img
              src={images[currentImage]}
              alt={`${projectTitle} - 图片 ${currentImage + 1}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              onClick={() => setIsFullscreen(true)}
            />
            
            {/* 图片覆盖层 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{currentImage + 1} / {images.length}</p>
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="上一张图片"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="下一张图片"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* 全屏按钮 */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-all duration-200 backdrop-blur-sm text-sm"
          >
            全屏
          </button>
        </div>

        {/* 缩略图导航 */}
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentImage
                  ? "ring-2 ring-blue-500 scale-105"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={`缩略图 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* 全屏模式 */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            {/* 全屏图片 */}
            <img
              src={images[currentImage]}
              alt={`${projectTitle} - 全屏图片 ${currentImage + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* 全屏导航 */}
            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="上一张图片"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="下一张图片"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* 关闭按钮 */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="关闭全屏"
            >
              ✕
            </button>

            {/* 全屏指示器 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="text-sm">{currentImage + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;