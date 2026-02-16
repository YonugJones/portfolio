import type { Project } from '../types'
import socialAppPic from '../assets/social-app-frame-pic.png'
import imageGalleryPic from '../assets/image-gallery-pic.png'
import worldNewsPic from '../assets/world-news-pic.png'
import chessAppPic from '../assets/chess-app-pic.png'

export const projectList: Project[] = [
  {
    id: 1,
    imageUrl: socialAppPic,
    name: 'Social App',
    description:
      'This is the foundation of a social app website that can be used for future social application projects.',
    tools: [
      'NextJs ',
      'Typescript ',
      'Javascript ',
      'React ',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma ',
      'Shadcn ',
      'Lucide-React',
    ],
    githubUrl: 'https://github.com/YonugJones/social-app-frame',
    liveDemo: 'https://social-app-frame.vercel.app/',
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
    liveDemo: 'https://world-news-2obivokcp-pks-projects-7213db00.vercel.app/',
  },
  {
    id: 4,
    imageUrl: chessAppPic,
    name: 'Chess',
    description:
      'This is a playable game of chess, influenced by the UI of Chess.com and Lichess.org, two of the most popular apps online for playing chess. Features include a clean user interface, move previews, move history and move jumping, undo, and a winning delcaration',
    tools: ['TypeScript ', 'JavaScript ', 'React ', 'Tailwind CSS'],
    githubUrl: 'https://github.com/YonugJones/chess-app',
    liveDemo: 'https://chess-app-five-phi.vercel.app/',
  },
]
