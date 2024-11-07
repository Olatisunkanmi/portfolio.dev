export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate?: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Igbasan Olasunkanmi';

const bio = [
  'As a software engineer, I am driven by a relentless pursuit to harness the power of technology and create solutions that address real-world challenges. Equipped with a robust understanding of computer science principles and proficiency in programming languages like JavaScript, Typescript, PHP, and Java, I continuously seek to expand my expertise and apply my skills in innovative ways.',
  'As a backend engineer, I thrive on the challenge of designing scalable, reliable, and secure systems that power a wide range of applications. From developing SaaS platforms that enable seamless music playlist transfers to building fintech solutions for multi-currency crowdfunding campaigns, I have a proven track record of delivering impactful backend solutions.',
  'What truly drives me, however, is the opportunity to continually learn and apply my skills in novel ways. I am passionate about staying at the forefront of industry trends and leveraging the latest advancements to create innovative solutions that make a tangible difference.',
  'As I embark on the next chapter of my career, I am excited to collaborate with like-minded individuals, tackle complex challenges, and contribute to the advancement of the technology landscape. I am committed to leveraging my diverse expertise and unwavering dedication to positively impact our world.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'Playlist Swap [Contract]',
    role: 'Product Engineer',
    startDate: 'February 2024',
    endDate: 'Present',
    achievements: [
      'Developing a simple SaaS platform that enables users to transfer music playlists across various streaming services.',
      'Implemented an event-driven architecture using Bull MQ and Redis to manage background tasks and playlist synchronization.',
      'Integrated a token-based wallet system for transactions, to increrase user engagement by allowing users to use leftover tokens for future conversions, hence driving user retention.',
      'Engineered a premium auto-sync feature to maintain consistency between source and destination playlists.',
      'Designed and implemented a Pay-As-You-Go (PAYG) model, charging per playlist transfer instead of monthly subscriptions.',
      'Enabled token purchases via bank transfers, strategically catering to the Nigerian market where bank transfers are preferred over card payments.',
    ],
    technologies: ['Nodejs', 'NestJs', 'TypeScript', 'MongoDB', 'Redis', 'Bull MQ'],
  },
  {
    company: 'RodNav Logistics [Contract]',
    role: 'Backend Developer',
    startDate: 'June 2023',
    endDate: 'March 2024',
    achievements: [
      'Implemented a "multiple stop" feature, allowing users to customize trip routes, adding multiple stops  and increase user satisfaction',
      'Designed and implemented a real-time "Chat" feature, facilitating communication between users and drivers, enhancing overall user experience.',
      'Implemented "RodNav Business," a new business model allowing companies to register, rent vehicle fleets, and earn revenue through driver rentals.',
      'Implemented a "Wallet System" for managing drivers and business payments, streamlining financial transactions.',
    ],
    technologies: ['Nodejs', 'NestJs', 'TypeScript', 'SQL'],
  },
  {
    company: 'ZojaTech [Full Time]',
    role: 'Backend Developer',
    startDate: 'Arpil 2023',
    endDate: 'Present',
    achievements: [
      'Implemented single-device authentication with user alerts, reducing unauthorized access attempts by 75%.',
      'Managed a team of backend developers to develop a music ecommerce API using the Laravel framework.',
      'Designed and deployed innovative music API features (Stream, Upload & Download Beats), boosting daily active users by 10%.',
    ],
    technologies: ['Laravel', 'PHP', 'SQL', 'Docker', 'AWS'],
  },
  {
    company: 'Kola Market  [Contact]',
    role: 'Full Stack Developer',
    startDate: 'November 2023',
    endDate: 'March 2024',
    achievements: [
      'Implemented a purchase order feature to streamline communication and track inventory for businesses and customers, leading to a 3% increase in user retention.',
      'Built FAQs and Blog page endpoints using the same polymorphic table structure, demonstrating efficient database design.',
    ],
    technologies: ['Laravel', 'PHP', 'SQL', 'VueJS', 'Bootstrap', 'SQL'],
  },
 
  {
    company: 'ChainFundit [Full Time]',
    role: 'Backend Developer',
    startDate: 'April 2022',
    endDate: 'June 2023',
    achievements: [
      'Developed a high-performance API for handling donations and administrative transactions.',
      'Integrated with payment processors enabling seamless multi currency donations, which led to a 10% increase in user satisfaction.',
    ],
    technologies: ['Node.js', 'Express.js', 'Knex.js', 'PostgreSQL'],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript', 'TypeScript', 'PHP'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['Laravel', 'Nestjs', 'Espress.js', 'Vue.js'],
  },
  {
    title: 'Storages/Databases',
    body: ['MySQL', 'MongoDB', 'MariaDB', 'PostgreSQL'],
  },
  {
    title: 'Tooling',
    body: [
      'Redis',
      'Bull MQ',
      'Kafka',
      'Knex.js',
      'Docker',
      'Linux (Ubuntu, Fedora)',
      'Windows',
      'Git',
      'GitHub',
      'AWS',
      'Heroku',
      'Render',
      'Planetscale',
      'Digital Ocean',
      'Zoho Suite'
    ],
  },
  {
    title: 'Soft Skills',
    body: ['Leadership', 'Teamwork', 'Problem-solving', 'Critical-Thinking'],
  },
];

const educations: Education[] = [
  {
    title: 'B.A. German Language at Obafemi Awolowo University, Ile-Ife',
    endDate: 'Dec 2022',
    relevant: ['Effective Communication', 'Research Work', 'Leadership', 'Management'],
  },
  {
    title: 'Diploma in Software Engineering at AltSchool Africa, Rwanda',
    startDate: 'APR 2022',
    endDate: 'JUN 2023',
    relevant: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'API design Principles',
      'System design',
      'API development and Security',
    ],
  },
];

const certifications: Certification[] = [
  {
    title: 'ReactJS Zero To Mastery by Andrei. - Udemy',
    date: 'MAY 2020',
  },
  {
    title: 'Python for Data Science - Coursera',
    date: 'JAN 2020',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'German',
    level: 'B1',
  },
  // {
  //   name: 'French',
  //   level: 'BEGINNER',
  // },
];

const hobbies = ['Learning', 'Playing the piano', 'Coding', 'Football/Soccer'];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
