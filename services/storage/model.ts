export interface Course {
	title: string
	description: string
	chapters: Chapter[]
}

export interface Chapter {
	title: string
	subChapters: SubChapter[]
}

export interface SubChapter {
	title: string
	lessons: Lesson[]
}

export interface Lesson {
	// One page
	title: string
	contents: Content[]
}

export type Content =
	| {
			type: ContentType.info
			content: Info
	  }
	| {
			type: ContentType.question
			content: CardQuizType
	  }

// Content Type
export interface Info {
	text: string
}

export type CardQuizType = {
	mcq: {
		question: string
		options: string[]
		correctOptions: number[]
		explaination: string
	}
}

export interface Option {
	text: string
	explanation?: string
	isCorrect?: boolean
}
export enum ContentType {
	info,
	question,
}
