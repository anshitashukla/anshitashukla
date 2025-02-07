import { Experience } from "../interfaces/experience.interface";

export const experiences: Experience[] = [
  {
    title: "Software Engineer 3",
    company: "Scalex Technology Solutions LLP",
    duration: "Jul. 2022 – Dec. 2023",
    responsibilities: [
      "Led a team of 6 to build microservices using Node.js, Express.js, and TypeScript, automating 30% of carrier onboarding with REST APIs and MongoDB, scaling insurance quotes from 300k to 1M in 3 months.",
      "Designed a micro-frontend architecture for a responsive React.js app, leveraging Ant Design and Redux achieving 40% faster load times.",
      "Integrated Stripe and PayPal payment gateway, boosting revenue by 60% with 35% increase in successful transactions, providing users with flexible payment options.",
      "Implemented authentication using Amazon Cognito with OAuth2.0 support, integrated Amazon SNS for MFA and Amazon SES for email notifications, enhancing security and user experience.",
      "Improved user engagement by 35% through dynamic routing and web push notifications using Firebase.",
      "Enhanced user experience by building a Socket.IO for continuous real-time carrier quote generation, reducing latency by 15%.",
      "Enhanced search capabilities by integrating ElasticSearch, enabling fast and efficient search functionality for large datasets.",
      "Optimized application performance using Webpack, reducing bundle size by 20% and improving load times.",
      "Streamlined CI/CD with GitHub Actions, automating build, test, and deployment for faster, consistent releases.",
    ],
  },
  {
    title: "Software Engineer 2",
    company: "Scalex Technology Solutions LLP",
    duration: "Jul. 2021 – Jun. 2022",
    responsibilities: [
      "Integrated OAuth for login and sign-up with Google and Facebook in a React Native app, resulting in a 40% increase in user registrations.",
      "Integrated video calling via Twilio SDK, enriching communication features and enhancing user experience.",
      "Enhanced app stability by integrating Firebase Crashlytics, keeping the app crash-free 99%.",
      "Incorporated CleverTap for push notifications and analytics, resulting in a 25% increase in user engagement through insightful analytics.",
      "Fortified security with a React Native Security Toolkit, reducing vulnerabilities by 60% and enhancing protection against attacks.",
    ],
  },
  {
    title: "Software Engineer 1",
    company: "Scalex Technology Solutions LLP",
    duration: "Nov. 2020 – Jun. 2021",
    responsibilities: [
      "Migrated legacy frontend to a modern React.js, Redux, and SCSS stack, enhancing performance and maintainability.",
      "Integrated React Data Table Component for data management, editing and visualization.",
      "Developed a web app MVP with Liberty Mutual and Chubb API integrations, enabling streamlined insurance data processing and securing client funding.",
      "Achieved 100% code coverage using Jest by writing extensive test cases for functions, branches, statements, and lines, ensuring application reliability.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Mphasis Ltd.",
    duration: "Sep. 2019 – Feb. 2020",
    responsibilities: [
      "Built a Java Spring Boot BFF microservice, reducing redundant queries by 75% and improving data delivery speed.",
      "Developed RESTful APIs with versioning and security, enabling seamless communication between microservices.",
      "Optimized SQL queries with indexing and refactored joins, reducing Oracle query execution time by 30%.",
      "Wrote tests with JUnit and Mockito, achieving 90% coverage and reducing bugs by 25%.",
      "Integrated JSP and Servlets for dynamic web pages, improving usability for enterprise applications.",
    ],
  },
];
