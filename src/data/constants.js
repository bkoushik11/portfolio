export const Bio = {
  name: "Koushik Bevanapally",
  roles: [
    "Software Engineer",
  "Web Developer",
  "Blockchain Learner",
    "Tech Explorer",
  ],
  description:
    "I'm a full-stack developer and CS graduate with a strong interest in Web3 and emerging technologies. I love building user-focused web applications and writing clean, maintainable code. Always curious and eager to learn, I thrive in fast-paced environments that push me to grow.",
  github: "https://github.com/bkoushik11",
  resume:
    "https://drive.google.com/file/d/16nff0hkNvD5x-wjbv3WADsogiS9SzRyl/view?usp=sharing", // Assumed from your repo; update if needed
  linkedin: "https://www.linkedin.com/in/koushikbevanapally/", // Placeholder; update with your LinkedIn
  twitter: "https://x.com/BKoushikk", // Placeholder; update or remove
  insta: "https://www.instagram.com/thisiskoushikk", // Placeholder; update or remove
  facebook: "https://www.facebook.com/profile.php?id=61555443762078", // Placeholder; update or remove
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "React Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "REST API",
        image:
          "https://cdn-icons-png.flaticon.com/512/3039/3039394.png", // Custom REST API icon
      },
      {
        name: "JWT Auth",
        image:
          "https://cdn.worldvectorlogo.com/logos/jwt-3.svg", // JSON Web Token logo
      },
      
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "AWS",
        image: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "/guru.jpg", // Update with your university logo
    school: "Guru Nanak Institutions Technical Campus", // Update with your actual university
    date: "Nov 2022 - June 2025", // Placeholder; update with actual dates
    grade: "7.2 CGPA", // Placeholder; update with your actual CGPA
    desc: "Recently graduated with a Bachelor's degree in Computer Science and Engineering. During my academic journey, I built and deployed a full-fledged e-commerce website, which helped me strengthen my skills in full-stack development and backend technologies. While I haven't worked on real-world projects yet, I've gained a solid foundation in modern web development through academic projects and continuous learning.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "/MIST-logo.jpg", // Update with your school logo
    school: "Mahaveer Institute Of Science & Technology", // Update with your actual school
    date: "June 2019 - May 2022", // Placeholder; update with actual dates
    grade: "8.5 CGPA", // Placeholder; update with your actual percentage
    desc: "Completed a Diploma in Computer Engineering, where I learned the basics of programming, computer hardware, and networking. This helped me build a strong foundation for my further studies in software development.",
    degree: "Diploma, Computer Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Calculater",
    date: "July 17, 2024",
    description: "A simple web calculator that computes age in years, months, and days.",
    image: "https://via.placeholder.com/300",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/bkoushik11/calculater",
    webapp: "",
    category: "web app"
  },
  {
    id: 1,
    title: "Real-world Clock",
    date: "June 2, 2024",
    description: "A real-time clock web app built with JavaScript.",
    image: "https://via.placeholder.com/300",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/bkoushik11/Real-world-clock",
    webapp: "",
    category: "web app"
  },
  {
    id: 2,
    title: "E-commerce Web App",
    date: "July 2022",
    description: "A React-based e-commerce application built with Create React App. It features a responsive UI styled with Tailwind CSS, Firebase-based user authentication, and basic product/order management (including forms and validation).",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/bkoushik11/E-commerce",
    webapp: "",
    category: "web app"
  },
  {
    id: 3,
    title: "AIResumeCraft",
    date: "November 13, 2024",
    description: "An AI-driven resume builder web app developed in TypeScript.",
    image: "https://via.placeholder.com/300",
    tags: ["TypeScript", "HTML", "CSS"],
    github: "https://github.com/bkoushik11/airesumecraft",
    webapp: "",
    category: "web app"
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    date: "June 20, 2025",
    description: "A personal finance management app built with Next.js and Node.js.",
    image: "https://via.placeholder.com/300",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/bkoushik11/Personal-financce-tracker",
    webapp: "",
    category: "web app"
  }
];
