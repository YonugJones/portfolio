export interface Project {
  id: number
  imageUrl: string
  name: string
  tools: string[]
  description: string
  liveDemo?: string
  githubUrl?: string
}

export interface Skill {
  id: number
  name: string
  icon: string
}

export interface Contact {
  name: string
  email: string
  message: string
}
