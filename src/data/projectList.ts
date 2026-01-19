import type { Project } from '../types'
import chessAppPic from '../assets/chess-app-pic.png'
import imageGalleryPic from '../assets/image-gallery-pic.png'
import worldNewsPic from '../assets/world-news-pic.png'

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
    imageUrl: worldNewsPic,
    name: 'World News',
    description:
      'This is a world news application using a free world news API to showcase a clean user interface and fetch patterns',
    tools: ['TypeScript ', 'JavaScript ', 'React ', 'TailwindCSS'],
    githubUrl: 'https://github.com/YonugJones/world-news',
    liveDemo: 'world-news-2obivokcp-pks-projects-7213db00.vercel.app/',
  },
]
