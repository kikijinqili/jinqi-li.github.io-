/*
 * @Author: Jinqi Li
 * @Date: 2020-09-13 23:53:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-02-06 15:19:19
 * @FilePath: /gatsby-portfolio/src/mock/data.js
 */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jinqi Li', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full-Stack / Front-End Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'JINQI LI',
  subtitle: "I'm a Full-Stack / Front-End Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  image: 'profile-2021.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1KkDu8spX2iTLEgB7mRNx29uh8orG7xMM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'billow.jpg',
    title: 'Blogging Website Demo',
    info:
      'This is the demo of a project from my previous work, with user authentication, blog posting and commenting features, built with MERN stack and Next.js.',
    info2: '',
    url: 'https://billow-gilt.vercel.app',
    repo: 'https://github.com/jinqili0310/billow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chunyang.jpg',
    title: 'Chunyang Project',
    info:
      'This is a fan-made project, with real-time data transmission feature, built with MERN stack.',
    info2: '',
    url: 'https://sw-chunyang.vercel.app',
    repo: 'https://github.com/jinqili0310/sw-chunyang', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'climate.jpg',
    title: 'Eco Warriors',
    info:
      'This is an iOS mobile app project, with habit tracking and reminder features, built with Swift in Xcode, for research purpose.',
    info2: '',
    url: 'https://youtu.be/2oYOtoVpTHw',
    repo: 'https://github.com/jinqili0310/ClimateProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coca-cola.jpg',
    title: 'Coca-Cola Clone',
    info:
      'This is a clone of Coca-Cola US website with Chatbot implementation, built with React.js, for research purpose.',
    info2: '',
    url: 'https://jinqili0310.github.io/cocacola',
    repo: 'https://github.com/jinqili0310/cocacola', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eng-khh.jpg',
    title: 'English Vocabulary in Korean Hip Hop',
    info: 'This is a data visualization project, built with D3.js.',
    info2: '',
    url: 'https://jinqili0310.github.io/JMM629-AdvancedDataViz/Project/Website/index.html',
    repo: 'https://github.com/jinqili0310/JMM629-AdvancedDataViz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mcu-hero.jpg',
    title: 'Who is the Most Popular Superhero in MCU?',
    info: 'This is a data visualization project, built with D3.js.',
    info2: '',
    url: 'https://jinqili0310.github.io/JMM692-DataVizStudio/Ver1/index.html',
    repo: 'https://github.com/jinqili0310/JMM692-DataVizStudio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jiyoung.jpg',
    title: 'Life of Ji-young',
    info: 'This is an interactive storytelling project, built with PIXI.js.',
    info2: '',
    url: 'https://jinqili0310.github.io/Capstone2020/life-of-jiyoung/',
    repo: 'https://github.com/jinqili0310/Capstone2020', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie-club.jpg',
    title: 'Movie Club',
    info:
      'This is an iOS mobile app project, with MVC (Model-View-Controller) architecture, built with Swift in Xcode.',
    info2: '',
    url: 'https://youtu.be/YSGVl_IfOg4',
    repo: 'https://github.com/jinqili0310/CIM613-MobileAppDev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'museum-ar.jpg',
    title: 'LOWE Museum AR App',
    info: 'This is an iOS AR app project, built with C# in Unity3D, for promotion purpose.',
    info2: '',
    url: 'https://youtu.be/2pTAfya2XsE',
    repo: 'https://github.com/jinqili0310/CIM624-AugmentedReality', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'xr-circuits.jpg',
    title: 'XR Circuits',
    info:
      'This is an XR project on Magic Leap device, built with C# in Unity3D, for education purpose.',
    info2: '',
    url: 'https://youtu.be/EuMM7NejYy4',
    repo: 'https://github.com/jinqili0310/XRCircuits-new', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nike-clone.jpg',
    title: 'Nike Clone',
    info: 'This is a clone of Nike US website, built with React.js, for further research purpose.',
    info2: '',
    url: 'https://guarded-headland-61604.herokuapp.com/',
    repo: 'https://github.com/jinqili0310/nike', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jinqi.li.310@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jinqi-li-79835b1a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jinqili0310',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
