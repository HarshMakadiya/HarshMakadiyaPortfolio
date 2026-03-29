export const personal = {
  name: "Harsh Makadiya",
  role: "Software Development Engineer",
  company: "Progressive Softtech",
  companyUrl: "https://www.linkedin.com/company/progressive-softtech/",
  location: "Gujarat, India",
  email: process.env.NEXT_PUBLIC_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  github: process.env.NEXT_PUBLIC_GITHUB || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "",
  pronouns: "he/him",
  tagline: "Building robust, scalable web applications — one well-crafted feature at a time. Shipping products that handle real load, real revenue, and real users.",
};

export const about = [
  { text: "Full-stack engineer with 2+ years of professional experience shipping production-grade web applications.", highlight: "Full-stack engineer" },
  { text: "Proficient in Next.js, NestJS, React, TypeScript, and PostgreSQL — with hands-on experience integrating third-party logistics and payment APIs.", highlight: "Next.js, NestJS, React, TypeScript" },
  { text: "Built systems handling 5,000+ monthly shipments and a parking platform generating $300,000+ in revenue.", highlight: "5,000+ monthly shipments" },
  { text: "Won Top 3 Best Development Team award at a company-level competition hosted by BigCommerce.", highlight: "Top 3 Best Development Team" },
  { text: "Published IEEE research paper on heart disease prediction using machine learning in Python (2023).", highlight: "IEEE research paper" },
  { text: "B.Tech in ICT from Pandit Deendayal Energy University with a CGPA of 9.19/10.", highlight: "CGPA of 9.19/10" },
  { text: "Competitive programmer — Global Rank #81 on CodeChef, 5-star Problem Solving on HackerRank.", highlight: "Global Rank #81" },
];

export const stack = [
  {
    category: "Languages",
    items: ["JavaScript ES6+", "TypeScript", "C++", "C"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React.js", "NestJS", "Node.js", "Express.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "GitHub", "CI/CD", "Vercel", "Stripe"],
  },
];

export const experience = [
  {
    company: "Progressive Softtech",
    role: "Software Development Engineer I",
    type: "Full-time",
    period: "Sep 2023 — Present",
    location: "Rajkot, Gujarat, India",
    bullets: [
      {
        title: "Shipment Booking Application",
        text: "Developed UI and backend for a system processing 5,000+ monthly shipments. Integrated DSV, DHL, PostNord logistics APIs — reduced processing time by 40% and improved API latency by 30%.",
      },
      {
        title: "Parking Reservation System",
        text: "Built an end-to-end platform for a US client: user registration, real-time slot tracking, Stripe payments, PostgreSQL storage. Handles 1,000+ bookings/month with $300,000+ in revenue generated.",
      },
      {
        title: "Social Media Marketing App",
        text: "Designed creator ranking algorithms, built analytics dashboard in React for real-time performance tracking, contributed to monorepo migration for better scalability.",
      },
    ],
    tags: ["NestJS", "Next.js", "React", "PostgreSQL", "Stripe", "Docker"],
  },
  {
    company: "Lucent Innovation",
    role: "Software Development Trainee",
    type: "Full-time",
    period: "Jan 2023 — Jul 2023",
    location: "Ahmedabad, Gujarat, India",
    bullets: [
      {
        title: "Simply Shipping Protection",
        text: "Deployed a shipping protection app for Shopify and BigCommerce platforms, improving customer satisfaction and reducing shipping-related issues.",
      },
      {
        title: "Award",
        text: "Won Top 3 Best Development Team award at a company-level competition hosted by the BigCommerce platform.",
      },
    ],
    tags: ["React.js", "Node.js", "MySQL", "Shopify", "BigCommerce"],
  },
];

export const education = [
  {
    degree: "B.Tech in Information & Communication Technology",
    school: "Pandit Deendayal Energy University",
    location: "Gandhinagar, Gujarat",
    period: "2019 – 2023",
    cgpa: "9.19",
    courses: ["Web Development", "Data Structures & Algorithms", "DBMS"],
  },
];

export const projects = [
  {
    name: "YourBlog",
    description:
      "A full-featured blog platform where users can write, edit, and delete articles. Includes an admin dashboard with secure authentication for content management.",
    tags: ["Flask", "MySQL", "Python"],
    github: "https://github.com/HarshMakadiya/YourBlog",
    live: null,
  },
  {
    name: "CampSite",
    description:
      "Secure, authenticated campsite listing web app with full CRUD, RESTful routing, and MongoDB — built for speed and a clean user experience.",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/HarshMakadiya/CampSite",
    live: "https://campsites.onrender.com/",
  },
];

export const achievements = [
  {
    icon: "📄",
    title: "Heart Disease Prediction — IEEE Published Paper",
    sub: "Automatic prediction from numerical & categorical features using ML in Python",
    year: "2023",
  },
  {
    icon: "🏆",
    title: "Top 3 Best Development Team — BigCommerce",
    sub: "Company-level award hosted by the BigCommerce platform at Lucent Innovation",
    year: "2023",
  },
  {
    icon: "🎓",
    title: "CS50x — Harvard University Certificate",
    sub: "Completed Harvard's Introduction to Computer Science",
    year: "2022",
  },
  {
    icon: "📚",
    title: "Introduction to Algorithms — NPTEL Certificate",
    sub: "Completed course offered by IITs & IISc",
    year: "2022",
  },
  {
    icon: "⚡",
    title: "Global Rank #81 — CodeChef October Challenge",
    sub: "Division 3 competitive programming contest",
    year: "Oct 2021",
  },
  {
    icon: "⚡",
    title: "Global Rank #348 — CodeChef November Challenge",
    sub: "Division 3 competitive programming contest",
    year: "Nov 2021",
  },
  {
    icon: "⭐",
    title: "5-Star Problem Solving — HackerRank",
    sub: "Highest rating badge in competitive problem solving",
    year: "2021",
  },
];
