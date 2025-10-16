import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PROJECT_DETAILS } from "../constants";
import ProjectDetail from "../components/Projects/ProjectDetail/ProjectDetail";
import Loader from "../components/Loader/Loader";
import Cursor from "@/components/Cursor/Cursor";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";

const ProjectsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // 检测设备类型
    const result =
      typeof window !== "undefined" &&
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    setIsDesktop(result);
  }, []);

  useEffect(() => {
    if (id) {
      const projectData = PROJECT_DETAILS[id];
      if (projectData) {
        setProject(projectData);
        setLoading(false);
      } else {
        // 如果项目不存在，重定向到404
        router.push("/404");
      }
    }
  }, [id, router]);

  if (loading) {
    return <Loader />;
  }

  if (!project) {
    return null;
  }

  return (
    <>
      <Cursor isDesktop={isDesktop} />
      <main className="flex flex-col relative">
        {/* 返回按钮 */}
        <button
          onClick={() => router.push('/')}
          className="fixed top-8 left-8 z-50 w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-all duration-200 group"
        >
          <svg
            className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <ProjectDetail project={project} />
      </main>
    </>
  );
};

export default ProjectsPage;