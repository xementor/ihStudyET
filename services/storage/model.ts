export interface Course {
  title: string,
  chapters: Chapter[],

}

export interface  Chapter {
  title: string,
  lessons: Lesson[];
}

export interface Lesson {
  title: string,
  contents?: Content[],
  subLessons?: SubLesson[],
}

export interface SubLesson { // One page
  title: string,
  contents: Content[],
}
export type Content = {
  type: ContentType.info;
  content: Info;
} | {
  type: ContentType.question;
  content: Question;
};

export interface Info {
  text: string,
}
export type Question = {
  type: QuestionType,
  text: string,
  options: Option[]
}

export interface Option {
  text: string,
  explanation?: string,
  isCorrect?: boolean,
}
export enum ContentType {
  info,
  question,
}

export enum QuestionType {
  option,
  multiChoice,
  matching,
  fillGap
}