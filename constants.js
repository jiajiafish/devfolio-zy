export const METADATA = {
  author: "张越",
  title: "Portfolio | 张越",
  description:
    "张越是极氪的资深汽车内饰设计师，专注于创造具有未来感和人性化的内饰空间，致力于将豪华、科技与舒适性完美融合。",
  siteUrl: "https://www.zhangyue.me/",
  twitterHandle: "@zhangyue_design",
  keywords: [
    "张越",
    "汽车内饰设计师",
    "极氪内饰设计师",
    "汽车内饰设计",
    "豪华内饰",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "一位专注于内饰设计的汽车设计师",
  "我创造豪华与科技融合的内饰空间",
  "我致力于提升驾驶者的舒适体验",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: zhangyue.design@email.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/zhangyue-autodesigner/",
  },
  {
    name: "behance",
    url: "https://www.behance.net/zhangyue-autodesign",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/zhangyue_cardesign/",
  },
  {
    name: "twitter",
    url: "https://x.com/zhangyue_design",
  },
];

export const SKILLS = {
  designSoftware: [
    "alias",
    "blender",
    "keyshot",
    "vred",
    "photoshop",
    "illustrator",
    "cinema4d",
    "substance",
  ],
  designSkills: [
    "interior_design",
    "hmi_design",
    "color_material",
    "user_experience",
    "3d_modeling",
    "rendering",
    "sketching",
    "prototyping",
  ],
  automotive: ["zeekr_design", "electric_vehicles", "luxury_interiors", "smart_cockpit"],
  other: ["design_thinking", "ergonomics", "sustainability", "user_research"],
};

export const PROJECTS = [
  {
    name: "极氪001智能座舱",
    image: "https://dummyimage.com/800x600/1E3A8A/ffffff&text=Zeekr+001+Cockpit",
    blurImage: "https://dummyimage.com/400x300/3B82F6/ffffff&text=Zeekr+Blur",
    description: "为极氪001设计的全新智能座舱内饰，融合豪华感与科技感 🚗",
    gradient: ["#1E3A8A", "#3B82F6"],
    url: "/projects?id=zeekr-001-cockpit",
    tech: ["alias", "keyshot", "hmi_design", "luxury_interiors"],
  },
  {
    name: "未来概念内饰",
    image: "https://dummyimage.com/800x600/7C3AED/ffffff&text=Future+Concept",
    blurImage: "https://dummyimage.com/400x300/A855F7/ffffff&text=Future+Blur",
    description: "2030年自动驾驶汽车内饰概念设计，注重乘客舒适体验 ✨",
    gradient: ["#7C3AED", "#A855F7"],
    url: "/projects?id=future-concept-interior",
    tech: ["blender", "cinema4d", "concept_design", "user_experience"],
  },
  {
    name: "豪华MPV内饰",
    image: "https://dummyimage.com/800x600/DC2626/ffffff&text=Luxury+MPV",
    blurImage: "https://dummyimage.com/400x300/EF4444/ffffff&text=Luxury+Blur",
    description: "高端MPV车型内饰设计，打造移动办公与休闲空间 🛋️",
    gradient: ["#DC2626", "#EF4444"],
    url: "/projects?id=luxury-mpv-interior",
    tech: ["vred", "substance", "premium_materials", "ergonomics"],
  },
  {
    name: "可持续环保内饰",
    image: "https://dummyimage.com/800x600/059669/ffffff&text=Eco+Interior",
    blurImage: "https://dummyimage.com/400x300/10B981/ffffff&text=Eco+Blur",
    description: "采用环保材料的内饰设计，体现可持续发展理念 🌱",
    gradient: ["#059669", "#10B981"],
    url: "/projects?id=sustainable-eco-interior",
    tech: ["sustainable_materials", "recycled_fabrics", "eco_design", "innovation"],
  },
];

export const WORK_CONTENTS = {
  ZEEKR: [
    {
      title: "极氪汽车",
      description:
        "极氪是吉利控股集团旗下的高端智能纯电品牌，致力于打造具有未来感的出行体验。作为内饰设计师，我专注于创造融合豪华、科技与舒适性的内饰空间。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          设计未来出行的内饰体验
        </div>
      ),
    },
    {
      title: "智能座舱革新",
      description:
        "2023年，我主导了极氪001车型的智能座舱内饰设计项目。通过深入研究用户行为和需求，重新设计了中控布局、座椅舒适性和氛围灯光系统。采用环保材料和智能交互界面，显著提升了用户体验，该项目成为极氪内饰设计的重要里程碑。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          资深内饰设计师
        </div>
      ),
    },
    {
      title: "豪华MPV概念",
      description:
        "针对高端商务出行市场，我设计了一款豪华MPV的内饰概念。重点打造了可变空间布局、沉浸式娱乐系统和零重力座椅，为乘客提供办公室、会议室和休闲空间的多重体验。该设计获得了公司年度创新奖。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          内饰概念设计师
        </div>
      ),
    },
  ],
  GEELY: [
    {
      title: "吉利汽车",
      description:
        "作为中国领先的汽车制造商，吉利汽车致力于提供高品质、高性价比的汽车产品。在此工作期间，我参与了多个量产车型的内饰设计和优化项目。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          为大众创造美好的出行体验
        </div>
      ),
    },
    {
      title: "内饰品质提升",
      description:
        "2021-2022年，我参与了吉利星越L的内饰品质提升项目。通过优化材料选择、改进工艺细节和重新设计人机交互界面，成功将内饰品质感提升了30%，用户满意度显著提高。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          内饰设计师
        </div>
      ),
    },
    {
      title: "年轻化设计策略",
      description:
        "针对年轻消费群体，我提出了'运动豪华'的内饰设计理念。通过运用对比色缝线、碳纤维纹理和氛围灯光，成功吸引了25-35岁年龄段的消费者，相关车型销量增长了25%。",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          内饰色彩与材料设计师
        </div>
      ),
    },
  ],
 
};

export const GTAG = "G-5HCTL2TJ5W";

export const PROJECT_DETAILS = {
  "zeekr-001-cockpit": {
    id: "zeekr-001-cockpit",
    title: "极氪001智能座舱",
    subtitle: "豪华科技的未来内饰体验",
    description: "为极氪001设计的全新智能座舱内饰，融合豪华感与科技感，打造未来出行空间。项目重点关注人机交互界面、座椅舒适性和氛围灯光系统的整体设计。",
    challenge: "如何在保持豪华感的同时融入前沿科技元素，创造直观易用的智能交互体验。",
    solution: "采用分层设计理念，将科技元素巧妙融入传统豪华内饰中，通过智能表面和隐藏式交互实现无缝体验。",
    impact: "该设计获得用户高度认可，极氪001车型内饰满意度提升35%，成为品牌内饰设计的重要里程碑。",
    gradient: ["#1E3A8A", "#3B82F6"],
    tech: ["alias", "keyshot", "hmi_design", "luxury_interiors"],
    scrollImages: {
      frameCount: 147,
      imagePath: "https://dummyimage.com/1600x900/1E3A8A/ffffff&text=Zeekr+Sequence/",
      imagePrefix: "zeekr-001-",
      imageExtension: ".jpg",
    },
    galleryImages: [
      "https://dummyimage.com/800x600/3B82F6/ffffff&text=Dashboard",
      "https://dummyimage.com/800x600/2563EB/ffffff&text=Seats",
      "https://dummyimage.com/800x600/1D4ED8/ffffff&text=Steering+Wheel",
      "https://dummyimage.com/800x600/1E40AF/ffffff&text=Console",
      "https://dummyimage.com/800x600/3730A3/ffffff&text=Ambient+Light",
      "https://dummyimage.com/800x600/312E81/ffffff&text=Luxury+Details",
    ],
    details: {
      duration: "6个月",
      role: "首席内饰设计师",
      team: "8人设计团队",
      status: "已量产上市"
    }
  },
  "future-concept-interior": {
    id: "future-concept-interior", 
    title: "未来概念内饰",
    subtitle: "2030年自动驾驶汽车内饰设计",
    description: "探索2030年自动驾驶汽车的内饰可能性，重新思考乘客在完全自动驾驶环境中的空间体验。项目注重可变空间、沉浸式娱乐和多功能座椅设计。",
    challenge: "传统汽车内饰设计思路无法满足未来自动驾驶场景的需求，需要重新定义车内空间的功能和体验。",
    solution: "采用模块化设计理念，创造可变空间布局，集成沉浸式娱乐系统和零重力座椅，提供办公、休闲、会议等多重体验。",
    impact: "该概念设计获得公司年度创新奖，为未来产品线提供了重要的设计方向。",
    gradient: ["#7C3AED", "#A855F7"],
    tech: ["blender", "vred", "concept_design", "user_experience"],
    scrollImages: {
      frameCount: 120,
      imagePath: "https://dummyimage.com/1600x900/7C3AED/ffffff&text=Future+Sequence/",
      imagePrefix: "future-concept-",
      imageExtension: ".jpg",
    },
    galleryImages: [
      "https://dummyimage.com/800x600/8B5CF6/ffffff&text=Concept+Design",
      "https://dummyimage.com/800x600/A855F7/ffffff&text=Autonomous+Seats",
      "https://dummyimage.com/800x600/C084FC/ffffff&text=Future+Dashboard",
      "https://dummyimage.com/800x600/D8B4FE/ffffff&text=Steering+System",
      "https://dummyimage.com/800x600/E9D5FF/ffffff&text=Ambient+Experience",
      "https://dummyimage.com/800x600/F3E8FF/ffffff&text=Innovation+Space",
    ],
    details: {
      duration: "4个月",
      role: "概念设计师",
      team: "5人创新团队", 
      status: "概念阶段"
    }
  },
  "luxury-mpv-interior": {
    id: "luxury-mpv-interior",
    title: "豪华MPV内饰",
    subtitle: "高端商务出行空间设计",
    description: "针对高端商务出行市场设计的豪华MPV内饰，重点打造移动办公与休闲空间。项目融合了豪华材料、人体工程学设计和智能交互系统。",
    challenge: "在有限的车内空间中实现办公、会议、休闲等多重功能，同时保持豪华感和舒适性。",
    solution: "通过创新的座椅布局和可变形家具设计，创造出灵活多变的空间配置，配合高端材料和精致工艺。",
    impact: "该设计成功吸引了高端商务客户，相关车型销量增长25%，确立了品牌在豪华MPV市场的地位。",
    gradient: ["#DC2626", "#EF4444"],
    tech: ["vred", "substance", "premium_materials", "ergonomics"],
    scrollImages: {
      frameCount: 135,
      imagePath: "https://dummyimage.com/1600x900/DC2626/ffffff&text=Luxury+MPV+Sequence/",
      imagePrefix: "luxury-mpv-",
      imageExtension: ".jpg",
    },
    galleryImages: [
      "https://dummyimage.com/800x600/EF4444/ffffff&text=Luxury+MPV",
      "https://dummyimage.com/800x600/F87171/ffffff&text=Premium+Seats",
      "https://dummyimage.com/800x600/FCA5A5/ffffff&text=Luxury+Dashboard",
      "https://dummyimage.com/800x600/FECACA/ffffff&text=Business+Space",
      "https://dummyimage.com/800x600/FEE2E2/ffffff&text=Comfort+Design",
      "https://dummyimage.com/800x600/FEF2F2/ffffff&text=Executive+Style",
    ],
    details: {
      duration: "8个月",
      role: "项目负责人",
      team: "12人跨部门团队",
      status: "已上市"
    }
  },
  "sustainable-eco-interior": {
    id: "sustainable-eco-interior",
    title: "可持续环保内饰",
    subtitle: "环保材料与创新工艺的结合",
    description: "采用环保材料和可持续工艺的内饰设计项目，体现了对环境保护的责任感。项目探索了可回收材料、生物基材料和低碳制造工艺在汽车内饰中的应用。",
    challenge: "如何在保证品质和豪华感的前提下，最大化使用环保材料和可持续工艺。",
    solution: "通过材料创新和工艺优化，开发出既环保又高品质的内饰解决方案，包括可回收织物、生物基塑料和天然纤维复合材料。",
    impact: "该项目获得了行业可持续发展奖项，为公司建立了绿色环保的品牌形象，吸引了环保意识强的消费者群体。",
    gradient: ["#059669", "#10B981"],
    tech: ["sustainable_materials", "recycled_fabrics", "eco_design", "innovation"],
    scrollImages: {
      frameCount: 110,
      imagePath: "https://dummyimage.com/1600x900/059669/ffffff&text=Eco+Sequence/",
      imagePrefix: "eco-interior-",
      imageExtension: ".jpg",
    },
    galleryImages: [
      "https://dummyimage.com/800x600/10B981/ffffff&text=Sustainable+Design",
      "https://dummyimage.com/800x600/34D399/ffffff&text=Recycled+Materials",
      "https://dummyimage.com/800x600/6EE7B7/ffffff&text=Organic+Materials",
      "https://dummyimage.com/800x600/9DECA9/ffffff&text=Green+Nature",
      "https://dummyimage.com/800x600/A7F3D0/ffffff&text=Eco+Innovation",
      "https://dummyimage.com/800x600/D1FAE5/ffffff&text=Environmental+Design",
    ],
    details: {
      duration: "5个月",
      role: "材料创新设计师",
      team: "6人专项团队",
      status: "研发完成"
    }
  }
};
