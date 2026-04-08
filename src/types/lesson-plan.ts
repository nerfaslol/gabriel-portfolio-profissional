export interface LessonImage {
  /** Placeholder label shown until a real image is added */
  placeholder: string
  /** Optional real image URL or import */
  src?: string
  /** Alt text for accessibility */
  alt: string
}

export interface LessonStep {
  time: string
  title: string
  description: string
  /** Detailed teacher notes — what to say, how to behave, common pitfalls */
  teacherNotes?: string[]
  /** IA prompt tip for the students */
  aiTip?: string
  /** Illustrative images for this step */
  images?: LessonImage[]
  /** Estimated difficulty for the teacher to gauge pacing */
  difficulty?: 'fácil' | 'médio' | 'desafiador'
}

export interface SetupItem {
  name: string
  description: string
  analogy?: string
  wingetCommand?: string
  url?: string
  /** Teacher script: what to say/demonstrate while students install */
  teacherScript?: string
}

export interface LessonResource {
  title: string
  url?: string
  /** Brief description of why this resource is useful */
  why?: string
}

export interface LessonObjective {
  text: string
  /** Which agenda step maps to this objective (0-indexed) */
  relatedStepIndex?: number
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

  /** High-level learning objectives */
  objectives: LessonObjective[]

  /** General notes for the teacher before the class starts */
  teacherBriefing: string[]

  /** Icebreaker/warm-up script */
  icebreaker?: string

  prerequisites: string[]
  wingetIntro?: string
  setup: SetupItem[]
  agenda: LessonStep[]
  exercises: string[]

  /** Common troubleshooting issues students might face */
  troubleshooting?: { problem: string; solution: string }[]

  /** FAQ from students */
  faq?: { question: string; answer: string }[]

  /** Assessment criteria / rubric */
  assessment?: string[]

  resources: LessonResource[]
  repoUrl?: string
  liveUrl?: string

  /** Closing message from the teacher */
  closingMessage?: string
}
