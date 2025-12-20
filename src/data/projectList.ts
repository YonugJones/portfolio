import { type Project } from '../types/projectType'
import chessAppPic from '../assets/chess-app-pic.png'
import imageGalleryPic from '../assets/image-gallery-pic.png'

export const projectList: Project[] = [
  {
    id: 1,
    imageUrl: chessAppPic,
    name: 'Chess',
    description:
      'This is a playable game of chess, influenced by the UI of Chess.com and Lichess.org, two of the most popular apps online for playing chess. Features include a clean user interface, move previews, move history and move jumping, undo, and a winning delcaration',
    tools: ['TypeScript ', 'JavaScript ', 'React ', 'Tailwind CSS'],
    githubUrl: 'https://github.com/YonugJones/chess-app',
    liveDemo: 'https://chess-app-five-phi.vercel.app/',
  },
  {
    id: 2,
    imageUrl: imageGalleryPic,
    name: 'Image Gallery',
    description:
      'This is an image gallery where users can search royalty free images courtesy of Pixabay images',
    tools: ['TypeScript ', 'JavaScript ', 'React ', 'Tailwind CSS'],
    githubUrl: 'https://github.com/YonugJones/image-gallery',
    liveDemo: 'https://image-gallery-ten-ochre.vercel.app/',
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/400x200',
    name: 'Hemophilia Bleed Social',
    description:
      'This is intended to help connect users with hemophilia, suffering from a bleed with one another. The feeling of isolation can weigh heavily on people dealing with such a unique type of injury. Sometimes the best adivce can come from people who have dealt with similar experiences. This app aims to connect people and be used as a community research tool to aid with recovery during the acute and chronic stages of joint and muscle bleeds',
    tools: [
      'TypeScript ',
      'JavaScript ',
      'React ',
      'NodeJS ',
      'Express ',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/YonugJones/hemo-bleed-app',
  },
]
