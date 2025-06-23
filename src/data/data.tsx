import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/nasser_anime_style_2.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

const resume = '/resume.pdf';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nasser Tahan',
  description: 'Nasser Tahan - Software Developer',
  twitterImageUrl: profilepic,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nasser Tahan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Developer</strong> passionate about building scalable web
        applications and clean user interfaces.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I’m not coding, I’m exploring new tech, enjoying co-op gaming, watching movies, or planning travel
        adventures.
      </p>
    </>
  ),
  actions: [
    {
      href: resume,
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a software developer who loves building smart, scalable digital solutions that make life easier. 
  With a passion for clean code and elegant UX, I craft websites, apps, and backend systems using React, PHP, Odoo, and AWS. 
  Whether it’s launching an eCommerce site, integrating complex APIs, or managing infrastructure, I bring ideas to life with precision and curiosity. Always exploring, always refining—tech is my toolkit, creativity is my edge.`,
  aboutItems: [
    {label: 'Location', text: 'Kuwait', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Lebanese', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech, Travel, Movies, Co-op Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Arab Open University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Yuehlia General Trading Company', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {name: 'English', level: 9,},
      {name: 'Arabic',level: 10,},
    ],
  },
  {
    name: 'Tools & DevOps',
    skills: [
      {name: 'Git & GitHub', level: 9},
      {name: 'Linux', level: 8},
      {name: 'CI/CD (GitHub Actions)', level: 7},
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {name: 'React', level: 9},
      {name: 'Next.js', level: 9},
      {name: 'Tailwind CSS', level: 8},
      {name: 'HTML & CSS', level: 9},
      {name: 'JavaScript / TypeScript', level: 9},
    ],
  },
  {
    name: 'Backend',
    skills: [
      {name: 'Node.js', level: 9},
      {name: 'Express', level: 8},
      {name: 'MongoDB', level: 8},
      {name: 'PostgreSQL', level: 7},
      {name: 'PHP & Laravel', level: 6},
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {name: 'React Native', level: 9,},
      {name: 'Flutter', level: 4,},
      {name: 'Swift', level: 3,},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015 - 2020',
    location: 'Arab Open University (AOU), Kuwait',
    title: "Bachelor's in Information Technology",
    content: <p>Completed a comprehensive IT program covering programming, databases, and software engineering.</p>,
  },
  {
    date: '2016',
    location: 'Infocenter Training Institute, Kuwait',
    title: 'Specialized Programming Courses',
    content: (
      <p>
        Completed intensive training courses in <strong>C++</strong>, <strong>Swift</strong>, <strong>Android</strong>,
        and <strong>SQL</strong>. Built practical apps and tools as part of coursework, strengthening understanding of
        modern development tools and mobile platforms.
      </p>
    ),
  },
];

// Experience
export const experience: TimelineItem[] = [
  {
    date: 'Nov 2021 – Present',
    location: 'Yuehlia General Trading Co.',
    title: 'Software Developer',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Develop and maintain web and mobile apps using <strong>React Native</strong>, <strong>PHP</strong>, and <strong>JavaScript</strong></li>
        <li>Manage Google services: <strong>Search Console</strong>, <strong>Merchant Center</strong>, <strong>Analytics</strong>, <strong>Firebase</strong>, <strong>Developer Console</strong></li>
        <li>Oversee infrastructure and hosting on <strong>AWS</strong></li>
        <li>Maintain and optimize website and app performance</li>
        <li>Supervise junior developers and ensure timely feature delivery</li>
        <li>Configure and manage <strong>Odoo</strong> ERP system</li>
      </ul>
    ),
  },
  {
    date: 'Sep 2015 – Sep 2021',
    location: 'Al Ammar International',
    title: 'System Implementor',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Provided technical support: troubleshooting, hardware diagnostics, software implementation</li>
        <li>Handled client/server model setups and on-site/remote assistance</li>
        <li>Delivered user training and resolved customer service issues</li>
        <li>Sourced hardware components and managed installations</li>
        <li>Worked with <strong>VOIP</strong>, <strong>PBX-IP systems</strong>, <strong>CRM</strong>, <strong>ERP</strong>, <strong>POS</strong>, <strong>CMS</strong>, and <strong>Access Control</strong> systems</li>
        <li>Researched technical challenges and delivered reliable solutions with excellent communication skills</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out via email or connect with me on LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'nasser@tahan.business',
      href: 'mailto:nasser@tahan.business',
    },
    {
      type: ContactType.Location,
      text: 'Kuwait',
      href: 'https://www.google.com/maps/place/Kuwait',
    },
    {
      type: ContactType.LinkedIn,
      text: 'nasser-tahan',
      href: 'https://www.linkedin.com/in/nasser-tahhan-157155109/',
    },
    {
      type: ContactType.Github,
      text: 'bigboss97lnt',
      href: 'https://github.com/bigboss97lnt',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bigboss97lnt'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/bigboss97lnt'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nasser-tahhan-157155109/'},
];
