import type { Project, Experience, SkillCategory, Education, Certification } from '../types';

export const personalInfo = {
  name: "Ahmed Maher",
  role: "Software Engineer | Full-Stack Developer",
  tagline: "Building digital experiences that solve real-world problems.",
  bio: "I'm Ahmed Maher, a Software Engineer with hands-on experience building full-stack applications, developing AI-powered solutions, and customizing enterprise software.",
  about: "I'm a Computer Science and Artificial Intelligence graduate from Helwan University, specializing in Software Engineering. I have over two years of hands-on web development experience and professional experience customizing enterprise workflows and UI configurations using IBM Maximo.\n\nI enjoy solving complex problems, designing practical solutions, and building applications from the backend to the user interface. My experience spans full-stack development, AI-powered applications, database management, and enterprise systems.",
  location: "Cairo, Egypt",
  email: "ahmedmaherelsaeidy@outlook.com",
  phone: "+201272929083",
  linkedin: "https://linkedin.com/in/ahmedmaherelsaeidi",
  github: "https://github.com/AhmedMaherElSaeidi",
  liveUrl: "https://ahmedmaherelsaeidi.vercel.app",
  cvPath: "/Ahmed_Maher_CV.pdf",
  photoUrl: "/assets/ahmed_maher.jpg",
  highlights: [
    { value: "2+ Years", label: "Hands-on Web Development" },
    { value: "5 Months", label: "IBM Maximo Experience" },
    { value: "3.94 / 4.00", label: "Cumulative GPA" },
    { value: "Ranked 8th", label: "Class Standing" },
  ],
  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "C1 Advanced" },
    { name: "French", proficiency: "A2 Elementary" },
  ],
};

export const experiences: Experience[] = [
  {
    id: "military-service",
    role: "Compulsory Military Service",
    company: "Armed Forces",
    location: "Egypt",
    period: "April 2025 – June 2026",
    description: [
      "Currently serving in compulsory military service in Egypt as a professional commitment.",
    ],
    isCurrentOrUpcoming: true,
  },
  {
    id: "megasoft",
    role: "Software Engineer",
    company: "MegaSoft IT Consulting & Training",
    location: "Cairo, Egypt",
    period: "September 2024 – January 2025",
    description: [
      "Customized IBM Maximo workflows and UI configurations according to client requirements.",
      "Collaborated with stakeholders to translate business needs into interface improvements.",
      "Developed automation scripts and escalation rules in IBM Db2 to streamline database operations.",
      "Contributed to improving operational efficiency through database and workflow automation.",
    ],
    technologies: ["IBM Maximo", "IBM Db2", "Automation Scripting", "Enterprise Workflows", "SQL"],
  },
  {
    id: "nbe",
    role: "IT Intern",
    company: "National Bank of Egypt",
    location: "Cairo, Egypt",
    period: "August 2023 – September 2023",
    description: [
      "Wrote SQL queries and automated reports using Oracle Database.",
      "Supported internal banking operations through data analysis and reporting automation.",
    ],
    technologies: ["Oracle Database", "SQL Query Optimization", "Report Automation", "Data Analysis"],
  },
];

export const projects: Project[] = [
  {
    id: "hubmap-segmentation",
    title: "HuBMAP — Microvasculature Segmentation",
    subtitle: "Graduation Project | AI / Machine Learning & Full-Stack Application",
    category: "AI / Machine Learning",
    type: "ai",
    technologies: [
      "Python",
      "Flask",
      "React.js",
      "TensorFlow",
      "UNet",
      "Custom UNet",
      "LinkNet",
      "FCN",
    ],
    description:
      "Built a full-stack deep-learning application for segmenting microvascular structures in kidney tissue images. Developed a Flask backend serving four segmentation models and a React frontend that allows users to upload images and compare model predictions.",
    extendedDescription:
      "Microvascular structures (capillaries, arterioles, venules) are critical for organ function. Automating their segmentation from high-resolution kidney tissue slices accelerates biological research. The platform offers real-time inference across 4 deep learning architectures with side-by-side ground truth vs. predicted mask comparison and quantitative evaluation metrics.",
    keyFeatures: [
      "Image preprocessing and normalization pipeline",
      "Deep-learning model development (UNet, Custom UNet, LinkNet, FCN)",
      "Systematic hyperparameter tuning and model convergence optimization",
      "Flask REST API backend serving high-precision inference",
      "Interactive image upload and comparison React interface",
      "Six comparison views in the results interface (Raw Image, True Mask, Pred Mask, Overlaid Masks)",
      "Quantitative evaluation with Intersection over Union (IoU) and Dice confidence scores",
    ],
    frontendUrl: "https://github.com/AhmedMaherElSaeidi/HuPMap-Segmentation-ReactJS",
    backendUrl: "https://github.com/AhmedMaherElSaeidi/HuPMap-Segmentation-Flask",
    image: "/assets/kidney_slice_1.jpg",
  },
  {
    id: "tastybite-ordering",
    title: "TastyBite — Online Food Ordering Platform",
    subtitle: "Full-Stack E-commerce & Management System",
    category: "Full-Stack Development",
    type: "fullstack",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    description:
      "Designed and developed a bilingual online food ordering platform featuring an English and Arabic interface with full RTL support. Built the frontend and backend, including authentication, cart management, checkout, product management, and order-status workflows.",
    extendedDescription:
      "A complete food ordering ecosystem engineered for seamless cross-cultural UX. Features real-time state management via persistent cart storage, responsive drawer layouts, secure role-based JWT authentication, interactive category filtering, and an end-to-end admin portal for catalog and order dispatch tracking.",
    keyFeatures: [
      "Bilingual interface (English 🇬🇧 & Arabic 🇸🇦) with dynamic RTL/LTR stylesheet switching",
      "Full right-to-left layout support engineered from ground up",
      "Interactive category filtering and live dish search",
      "Smooth slide-over shopping cart drawer with live subtotal calculation",
      "Comprehensive checkout workflow supporting card and cash-on-delivery",
      "Secure JWT authentication with role authorization (Customer & Admin)",
      "Cloudinary cloud storage integration for food asset management",
      "Dedicated Admin Dashboard for real-time CRUD on products, categories, and order statuses",
      "Multi-step order status tracking with stepper visualization",
    ],
    liveUrl: "https://tasty-bite-reactjs.vercel.app/",
    frontendUrl: "https://github.com/AhmedMaherElSaeidi/TastyBite-reactjs",
    backendUrl: "https://github.com/AhmedMaherElSaeidi/TastyBite-nodejs",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "Python" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "Bootstrap" },
      { name: "SASS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development & APIs",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "REST APIs" },
      { name: "GraphQL APIs" },
      { name: "JWT Authentication" },
      { name: "Firebase" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "IBM Db2" },
    ],
  },
  {
    id: "data-ml",
    title: "Data Science & Machine Learning",
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "TensorFlow" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Linux" },
      { name: "IBM Maximo" },
    ],
  },
];

export const educationInfo: Education = {
  degree: "Bachelor of Science in Computer Science and Artificial Intelligence",
  institution: "Helwan University",
  location: "Cairo, Egypt",
  period: "September 2020 – May 2024",
  specialization: "Software Engineering",
  cgpa: "3.94 / 4.00",
  rank: "Ranked 8th in Class",
  highlights: [
    "Graduated with Distinction with Highest Honors",
    "Specialized in Software Engineering, Systems Architecture, and Machine Learning",
    "Graduation project focused on deep learning microvascular segmentation (UNet, LinkNet, FCN)",
  ],
};

export const certifications: Certification[] = [
  {
    id: "sql-365",
    title: "SQL",
    issuer: "365 Data Science",
    date: "November 2025",
  },
  {
    id: "itil-v4",
    title: "ITIL V4 Foundation",
    issuer: "MegaSoft",
    date: "November 2024",
  },
  {
    id: "fullstack-python-iti",
    title: "Full-Stack Web Development using Python",
    issuer: "Information Technology Institute (ITI)",
    date: "September 2024",
  },
  {
    id: "aspnet-iti",
    title: "ASP.NET Development",
    issuer: "Information Technology Institute (ITI)",
    date: "February 2023",
  },
  {
    id: "frontend-react-iti",
    title: "Frontend Development using React.js",
    issuer: "Information Technology Institute (ITI)",
    date: "August 2022",
  },
  {
    id: "php-iti",
    title: "Web Development using PHP",
    issuer: "Information Technology Institute (ITI)",
    date: "July 2022",
  },
];
