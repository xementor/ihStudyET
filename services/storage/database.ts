import {Chapter, Content, ContentType, Course, Info, Lesson, Question, QuestionType, SubLesson} from "./model";


const question1: Question = {
    text: "What is your Gender",
    type: QuestionType.option,
    options: [
        {text: 'male', explanation: 'as you are like boys',isCorrect:false},
        {text: 'male', explanation: 'as you are like boys',isCorrect:false},
        {text: 'male', explanation: 'as you are like boys',isCorrect:false},
        {text: "female", explanation: "you don't like female", isCorrect:true},
    ]
}

const info1: Info = {
    text: "Point 1: you should know the topic very high level"
}
const content1: Content = {
    type: ContentType.info,
    content: info1,
}

const content2: Content = {
    type: ContentType.question,
    content: question1,
}
const  content3: Content = {
    type: ContentType.info,
    content: {text: 'Point 2: you should know the topic very high level'}
}

const contents : Content[] = [content1, content3, content2, content1, content3, content2, content1, content3, content2, content1]
const subLesson: SubLesson = {
    title: "Carbonation",
    contents: contents,
}

const subLessons: SubLesson[] = [subLesson]


export const lesson: Lesson = {
    title: "Reaction of Organic Chemistry",
    subLessons: subLessons,
};
export const sublesson2 = subLesson;


const lessons: Lesson[] = [lesson]

const chapter: Chapter= {
    title: "Organic Chemistry",
    lessons: lessons,
}

const chapters: Chapter[] = [chapter];

const course: Course = {
    title: "HSC 2nd Paper",
    chapters: chapters,
}

