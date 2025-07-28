import { type Skill } from '../types/skillType'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import reactIcon from '../assets/react.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import nodejs from '../assets/nodejs.png'
import restapi from '../assets/rest-api.png'
import tailwind from '../assets/tailwindcss.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import jest from '../assets/jest.png'
import postgresql from '../assets/postgresql.png'
import uiux from '../assets/ui-ux.png'
import ps from '../assets/ps.png'

export const skillList: Skill[] = [
  { id: 1, name: 'JavaScript', icon: js },
  { id: 2, name: 'TypeScript', icon: ts },
  { id: 3, name: 'React', icon: reactIcon },
  { id: 4, name: 'HTML', icon: html },
  { id: 5, name: 'CSS', icon: css },
  { id: 6, name: 'NodeJS', icon: nodejs },
  { id: 7, name: 'Rest API', icon: restapi },
  { id: 8, name: 'TailwindCSS', icon: tailwind },
  { id: 9, name: 'Figma', icon: figma },
  { id: 10, name: 'Git', icon: git },
  { id: 11, name: 'Jest', icon: jest },
  { id: 12, name: 'PostgreSQL', icon: postgresql },
  { id: 13, name: 'UI / UX', icon: uiux },
  { id: 14, name: 'Photoshop', icon: ps },
]
