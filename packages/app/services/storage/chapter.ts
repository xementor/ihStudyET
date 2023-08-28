import { cLesson1, cLesson2, cLesson3 } from './c'
import { Chapter } from './model'

export const chapter: Chapter = {
  title: 'Python Dictionary',
  subChapters: [
    { title: 'Intro to something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Basic of something', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Application python', lessons: [cLesson1, cLesson2, cLesson3] },
    { title: 'Map memory', lessons: [cLesson1, cLesson2, cLesson3] },
  ],
}
