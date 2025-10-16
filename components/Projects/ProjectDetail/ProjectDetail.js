import { useEffect } from "react";
import SimpleScrollSequence from "@/components/ScrollSequence/SimpleScrollSequence";
import GSAPScrollSequence from "../GSAPScrollSequence/GSAPScrollSequence";
import ImageSlider from "../ImageSlider/ImageSlider";

const ProjectDetail = ({ project }) => {
  useEffect(() => {
    // 页面加载动画
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 项目头部信息 */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* 序列帧滚动动画 - 插入在标题和图片slider之间 */}
      <section className="py-20 w-screen -mx-4">
        <SimpleScrollSequence />
      </section>

      {/* GSAP滚动动画序列 */}
      {project.scrollImages && project.scrollImages.length > 0 && (
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">滚动体验</h2>
            <p className="text-gray-400 text-lg">向下滚动查看动画序列</p>
          </div>
          <GSAPScrollSequence images={project.scrollImages} />
        </section>
      )}

      {/* 图片画廊滑块 */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-20 px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">项目画廊</h2>
            <p className="text-gray-400 text-lg">浏览项目的高清图片</p>
          </div>
          <ImageSlider 
            images={project.galleryImages} 
            projectTitle={project.title}
          />
        </section>
      )}

      {/* 底部CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = '/'} 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              回到首页
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;