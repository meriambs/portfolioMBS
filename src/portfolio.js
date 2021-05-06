import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Ben Salah Meriam ",
    "title": "Hi all, I'm Meriam",
    "description": "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MongoDB / and some other cool libraries and frameworks   .",
    "des":"I have just finished an intensive training in FullStack JS development a GO MY CODE, which allowed me not only to acquire the skills and basic knowledge necessary in web development, but also to create my own W platform.",
    "resumeLink": "https://drive.google.com/file/d/1yTrJqNiQcSYHKFAn0hBlESQJ409XJOKz/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'meriambs',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.codewars.com/users/MeriambenS",
    
    
    "github": "https://github.com/meriambs",
    "linkedin": "https://www.linkedin.com/in/meriam-ben-salah-a921a7119/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'JUST A  FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      // emoji(
      //   '⚡ Develop highly interactive Front end / User Interfaces for your web '
      // ),
      // emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      // emoji(
      //   '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      // ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
     
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
     
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
     
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      
      
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      
    ],
}


export const SkillBars = [
    {
      Stack: 'Problem-solving', //Insert stack or technology you have experience in
      progressPercentage: '95', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Teamwork',
      progressPercentage: '80',
    },
    {
      Stack: 'Openness to criticism',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'GO MY CODE ',
      subHeader: 'THE FULL-STACK JAVASCRIPT BOOTCAMP',
      duration: 'October 2020 - Mars 2021',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'National Institute of Applied Science and Technology',
      subHeader: 'industrial biology engineer',
      duration: 'September 2013 - October 2018',
      desc:
        'End of studies project',
        
        
      descBullets: ['Institut Pasteur Tunis',
        'Evidence of filaria at the Culex pipiens.'],
    },
    {
      schoolName: 'Lycee 10 Mars 1934 , Le Kef',
      subHeader: 'scientific secondary school diploma',
      duration: 'September 2009 - juin 2013',
      
    },
   
]

 export const experience = [
  {
    role: 'WApplication',
    company: 'Projet FInal ',
    companylogo: googlelogo,
    date: 'Projet final Go My Code',
    desc:
      'WApplication est une plateforme de Recrutement ',
    descBullets: [
      'Frontend : React , Redux , materiel ui , html , css , webRTC',
      'backend : node , express ',
      'base de données : mongoDB'
    ],
    link: {
      name: "Git hub Link ",
      url: "https://github.com/meriambs/WApplication"
    }
  },
  {
    role: 'Connector',
    company: ' en cours ',
    companylogo: googlelogo,
    date: 'Projet MERN en cours ',
    desc:
      'connector est un reseau sociale  ou chaque utilisateur peut creer son compte visiter des compte , publier des posts commenter et liker les posts des autres utilisateurs  ',
    descBullets: [
      'Frontend : React , Redux , materiel ui , html , css ',
      'backend : node , express ',
      'base de données : mongoDB'
    ],
    link: {
      name: "Git hub Link ",
      url: "kasjfklsdjf"
    }
  },
  {
    role: 'ToDo List',
    company: 'mini projet 2',
    companylogo: github,
    date: 'May 2017 – May 2018',
    desc:
      'TodoList est une Plateforme de Todo List ,Ou On peut ajouter, modifier, supprimer nos todo éléments, on peut filtrer aussi selon les taches terminées ou non.',
      descBullets: [
        'Frontend :React,Redux, html , css,Bootstrap axios',
        'backend : node ',
        
      ],
      link: {
        name: "Git hub Link ",
        url: "kasjfklsdjf"
      }
    },
  {
    role: 'Movie App',
    company: 'mini Projet 1',
    companylogo: airbnb,
    date: 'Jan 2015 – Sep 2015',
    desc:
      'PMovie-App est une Plateforme ou on peut trouver des films avec descriptifs Les films peuvent être filtrés de différentes manières, exemple : rating ou nom du film(utilisant la barre de recherche) . nous pouvons également ajouter un film (nom , descriptif , video, image ...)',
      descBullets: [
        'Frontend :React, html , css,Bootstrap.',
    
      ],
      link: {
        name: "Git hub Link ",
        url: "https://github.com/meriambs/Movie-App"
      }
    },
    
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  }
]