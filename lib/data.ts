export const profile = {
  name: "Sourav Khanna",
  role: "Senior Site Reliability Engineer",
  location: "Kolkata, India",
  email: "sauravkhanna1998@gmail.com",
  phone: "+91 86209 40687",
  github: "https://github.com/Sourav1998",
  linkedin: "https://www.linkedin.com/in/sourav-khanna98/",
  facebook: "https://www.facebook.com/saurav.khanna.940/",
  company: "Netcore Cloud",
  companyUrl: "https://netcorecloud.com/",
  summary:
    "Senior Site Reliability Engineer with 4 years of experience in debugging, automation, and infrastructure reliability. Proficient in cloud computing, monitoring, and incident response — I keep systems up so other people don't have to think about it.",
  resumeFile: "/Sourav_Khanna.pdf",
};

export const stats = [
  { value: "4+", label: "years in SRE" },
  { value: "160K+", label: "lines of code" },
  { value: "1512", label: "cups of coffee" },
  { value: "3", label: "projects shipped" },
];

export const skillGroups = [
  {
    label: "Infrastructure & Cloud",
    skills: ["AWS", "Web Werks", "Linux"],
  },
  {
    label: "Automation & Scripting",
    skills: ["PHP", "Shell Scripting"],
  },
  {
    label: "CI/CD & DevOps",
    skills: ["Jenkins", "ArgoCD", "Docker", "Kubernetes"],
  },
  {
    label: "Databases & Caching",
    skills: ["MySQL", "MongoDB", "Vertica", "Redis"],
  },
  {
    label: "Web & App Development",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Express JS", "Node JS"],
  },
];

export const experience = [
  {
    role: "Senior Site Reliability Engineer",
    company: "Netcore Cloud",
    period: "May 2025 — Present",
    current: true,
    points: [
      "Automated daily operational tasks by writing efficient scripts, significantly reducing manual effort and improving team productivity.",
      "Performed Root Cause Analysis (RCA) for critical issues reported by clients or identified through alert debugging, ensuring timely resolution and prevention of recurrence.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Netcore Cloud",
    period: "May 2022 — April 2025",
    current: false,
    points: [
      "Developed scripts to help internal support teams serve end users more effectively.",
      "Debugged critical production issues day-to-day to identify root causes.",
      "Helped end users integrate our SDK into their websites.",
      "Helped clients capture end-user events accurately for tracking and engagement campaigns.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Netcore Cloud",
    period: "June 2021 — April 2022",
    current: false,
    points: [
      "Developed automation scripts for day-to-day internal team usage.",
      "Debugged issues faced by clients while using our platform.",
    ],
  },
];

export const projects = [
  {
    name: "Ecommerce Website",
    description:
      "A T-shirt ecommerce platform where admins manage the product catalog and logged-in users can purchase items. Built the interactive React frontend and the Node/Express backend, including token-based authorization for admins and users.",
    stack: ["MongoDB", "Express JS", "React JS", "Node JS"],
    link: "https://github.com/Sourav1998",
  },
  {
    name: "Online Secure Healthcare System",
    description:
      "A role-based healthcare portal with separate panels for doctors, patients, and nurses. Doctors review patient health and disease details, patients book appointments and track records, and nurses view assigned treatments — with strict access boundaries between roles.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Sourav1998",
  },
];

export const education = {
  school: "Maulana Abul Kalam Azad University Of Technology, West Bengal",
  degree: "B.Tech in Information Technology",
  period: "July 2016 — July 2020",
};

export const quotes = [
  {
    text: "Because the people who are crazy enough to think they can change the world are the ones who do.",
    author: "Steve Jobs",
  },
  {
    text: "You not only have to be a good coder to build a system like Linux — you have to be a sneaky bastard too.",
    author: "Linus Torvalds",
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
];
