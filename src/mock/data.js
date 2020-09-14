/*
 * @Author: Jinqi Li
 * @Date: 2020-09-13 23:53:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2020-09-14 02:19:24
 * @FilePath: /gatsby-portfolio/src/mock/data.js
 */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1hKGj5Nw1-Hl1IlsRtmLtv8FDvETE0vzucyclLdvkMb0/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'coca-cola.jpg',
    title: 'Coca-Cola Clone',
    info:
      'This is a clone of Coca-Cola US website, built with React.js, for further research purpose.',
    info2: '',
    url: 'https://warm-refuge-29675.herokuapp.com/products/coca-cola/',
    repo: 'https://github.com/kikijinqili/cocacola-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'museum-ar.jpg',
    title: 'LOWE Museum AR App',
    info: 'This is an iOS AR app, built with C# in Unity3D, for promotion purpose.',
    info2: '',
    url: 'https://youtu.be/2pTAfya2XsE',
    repo: 'https://github.com/kikijinqili/CIM624-AugmentedReality', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'movie-club.jpg',
    title: 'Movie Club iOS App',
    info: 'This is an iOS app, built with Swift in Xcode.',
    info2: '',
    url: 'https://youtu.be/YSGVl_IfOg4',
    repo: 'https://github.com/kikijinqili/CIM613-MobileAppDev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eng-khh.jpg',
    title: 'English Vocabulary in Korean Hip Hop',
    info: 'This is data visualization project, built with D3.js.',
    info2: '',
    url: 'https://kikijinqili.github.io/JMM629-AdvancedDataViz/Project/Website/index.html',
    repo: 'https://github.com/kikijinqili/JMM629-AdvancedDataViz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mcu-hero.jpg',
    title: 'Who is the Most Popular Superhero in MCU?',
    info: 'This is data visualization project, built with D3.js.',
    info2: '',
    url: 'https://kikijinqili.github.io/JMM692-DataVizStudio/Ver1/index.html',
    repo: 'https://github.com/kikijinqili/JMM692-DataVizStudio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'xr-circuits.jpg',
    title: 'XR Circuits',
    info:
      'This is an XR project on Magic Leap device, built with C# in Unity3D, for education purpose.',
    info2: '',
    url: 'https://youtu.be/EuMM7NejYy4',
    repo: 'https://github.com/kikijinqili/XRCircuits-new', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nike-clone.jpg',
    title: 'Nike Clone',
    info: 'This is a clone of Nike US website, built with React.js, for further research purpose.',
    info2: '',
    url: 'https://guarded-headland-61604.herokuapp.com/',
    repo: 'https://github.com/kikijinqili/nike-clone', // if no repo, the button will not show up
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
      url: 'https://github.com/kikijinqili',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
