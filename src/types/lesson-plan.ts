export interface LessonStep {
  time: string
  title: string
  description: string
  aiTip?: string
}

export interface SetupItem {
  name: string
  description: string
  analogy?: string
  wingetCommand?: string
  url?: string
}

export interface LessonResource {
  title: string
  url?: string
}

export interface LessonPlan {
  id: string
  title: string
  subtitle: string
  targetAudience: string
  duration: string
  description: string
  tags: string[]
  imageUrl?: string
  prerequisites: string[]
  wingetIntro?: string
  setup: SetupItem[]
  agenda: LessonStep[]
  exercises: string[]
  resources: LessonResource[]
  repoUrl?: string
  liveUrl?: string
}
