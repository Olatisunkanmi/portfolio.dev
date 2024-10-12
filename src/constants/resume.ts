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
  'As a graduate in Mathematics and a Software Engineer, I am driven by a passion for leveraging technology to tackle real-world challenges. Equipped with a robust understanding of Computer Science and Engineering principles, along with proficiency in programming languages like JavaScript, Python, Kotlin, and Java, I am continuously exploring avenues to expand my knowledge and apply my expertise in novel and inventive ways.',
  'Beyond my academic endeavors, I have undertaken internships with prominent technology firms, enriching my skill set through involvement in intricate software initiatives. I thrive as a collaborative team member, relishing opportunities to engage with peers and contribute insights.',
  'I am thrilled to embark on a journey of continual learning and advancement as a software engineer. I am enthusiastic about utilizing my skills and expertise to address complex challenges and contribute positively to our world.',
];

const workExperiences: WorkExperience[] = [
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
    body: ['JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Java'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['Laravel', 'Nestjs', 'Espress.js', 'Vue.js'],
  },
  {
    title: 'Storages/Databases',
    body: ['SQL', 'MongoDB', 'MariaDB', 'PostgreSQL'],
  },
  {
    title: 'Tooling',
    body: [
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
