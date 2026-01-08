import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  liveLink: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 2,
    title: 'LearnQube',
    description:
      'An e-learning platform where users can buy and watch videos to learn tech skills. It offers a wide variety of courses designed to enhance learning through engaging video content.',
    image: '/learnqube-bg.png',
    githubLink: 'https://github.com/ChineduOscar/learnqube',
    liveLink: 'https://learnqube.netlify.app/',
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
      'Google Auth 2.0',
    ],
  },
  {
    id: 3,
    title: 'LancheAI',
    description:
      'A Web3-powered AI system built on the Avalanche blockchain offering decentralized intelligent solutions for business automation. It enhances decision-making, security, and operational efficiency with smart contract integration.',
    image: '/lancheai-bg.png',
    githubLink: 'https://github.com/lancheaiteam/lancheai-v0',
    liveLink: 'https://lancheai.netlify.app',
    technologies: [
      'React',
      'Solidity',
      'Next.js',
      'Node.js',
      'Avalanche (AVAX)',
      'OpenAI API',
    ],
  },
  {
    id: 4,
    title: 'Raymart',
    description:
      'An intuitive e-commerce platform for seamless shopping experiences with product search, secure checkout, and personalized recommendations.',
    image: '/raymart-bg.png',
    githubLink: 'https://github.com/ChineduOscar/Raymart',
    liveLink: 'https://raymart.onrender.com',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JavaScript',
      'CSS',
    ],
  },
  {
    id: 1,
    title: 'SmartifyPDF',
    description:
      'SmartifyPDF uses AI to instantly convert your PDFs into interactive quizzes, making learning faster and more engaging.',
    image: '/smartifypdf-bg.png',
    liveLink: 'https://smartifypdf.com',
    technologies: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
    ],
  },
];

export const skills = [
  { name: 'React', icon: <FaReact className='text-[#61DAFB] text-4xl' /> },
  { name: 'Next.js', icon: <SiNextdotjs className='text-white text-4xl' /> },
  { name: 'JavaScript', icon: <FaJs className='text-[#F7DF1E] text-4xl' /> },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='text-[#3178C6] text-4xl' />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className='text-[#38B2AC] text-4xl' />,
  },
  {
    name: 'Framer Motion',
    icon: <SiFramer className='text-[#0055FF] text-4xl' />,
  },
  { name: 'Git', icon: <FaGitAlt className='text-[#F05032] text-4xl' /> },
  { name: 'Figma', icon: <FaFigma className='text-[#F24E1E] text-4xl' /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-[#339933] text-4xl' /> },
];

export const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode className='text-blue-400 text-2xl' />,
    description:
      'Building responsive, interactive user interfaces with modern frameworks and libraries.',
  },
  {
    title: 'Responsive Design',
    icon: <FaMobileAlt className='text-purple-400 text-2xl' />,
    description:
      'Creating websites that work flawlessly across all devices and screen sizes.',
  },
  {
    title: 'Web Applications',
    icon: <FaLaptopCode className='text-green-400 text-2xl' />,
    description:
      'Developing feature-rich web applications with seamless user experiences.',
  },
];
