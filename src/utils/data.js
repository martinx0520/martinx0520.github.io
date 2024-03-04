export const SKILLS = [
  {
    title: "Languages",
    icon: "/assets/language.png",
    skills: [
      { skill: "C++", percentage: "75%" },
      { skill: "TypeScript", percentage: "90%" },
      { skill: "Python", percentage: "80%" },
      { skill: "C#", percentage: "65%" },
    ],
  },
  {
    title: "Frontend",
    icon: "/assets/frontend.png",
    skills: [
      { skill: "React.js", percentage: "100%" },
      { skill: "Next.js", percentage: "75%" },
      { skill: "Angular.js", percentage: "60%" },
      { skill: "HTML&CSS", percentage: "95%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/backend.png",
    skills: [
      { skill: "Node.js", percentage: "85%" },
      { skill: "Express.js", percentage: "80%" },
      { skill: "AWS", percentage: "75%" },
      { skill: "ASP.NET", percentage: "55%" },
    ],
  },
  {
    title: "Databases",
    icon: "/assets/database.png",
    skills: [
      { skill: "DynamoDB", percentage: "90%" },
      { skill: "MongoDB", percentage: "70%" },
      { skill: "PostgreSQL", percentage: "65%" },
      { skill: "MySQL", percentage: "65%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Engineering Intern",
    date: "January 2023 - August 2023",
    responsibilities: [
      "Developed internal meeting management application used by 100+ companies utilizing React, Typescript and AWS(Cognito, SES, S3, DynamoDB, Lambda)",
      "Increased daily traffic from 45% to 70% by redesigning existing sites, adding new pages to improve the user experience, and incorporating SEO techniques",
      "Identified and fixed root causes of user reported bugs, reducing overall application downtime by 50%",
      "Developed numerous data migration scripts and validation procedures using Typescript, ensuring data integrity, consistency and reducing query execution time by 32%.",
      "Designed multiple end-to-end tests using Playwright, improving the platform’s stability and reducing the number of post-release issues by 55%",
    ],
  },
  {
    title: "Database Researcher and Developer",
    date: "May 2022 - August 2022",
    responsibilities: [
      "Researched and developed an algorithm for data refreshing and query optimization to be used on SAP HANA database using C++ and Python",
      "Refactored an in-application SQL statement by adding error handling support on edge cases using C++, resulting in a 90% reduction in statement specific errors",
      "Designed automated batch tests for the SAP IQ database using Python, improved 65% of test coverage and successfully gaining a 40% reduction in general errors",
    ],
  },
  {
    title: "Game Programmer Intern",
    date: "May 2021 - August 2021",
    responsibilities: [
      "Implemented object detection using raycasting, which allows players to click and retrieve its in-game information using Unity and C#",
      "Developed the touchscreen input system which enables players to zoom, pan, and navigate on mobile devices, gaining 96% overall companywide satisfaction",
      "Designed in-game animations by implementing computer graphic algorithms from scratch, resulting in 80% decrease in gameplay delay",
    ],
  },
];
