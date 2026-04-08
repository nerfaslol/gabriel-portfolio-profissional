export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
  aiAssisted?: boolean
}
