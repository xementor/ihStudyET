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
	| {
			type: ContentType.prompt
			content: PromptType
	  }
	| {
			type: ContentType.image
			content: ImageType
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

export type PromptType = {
	text: string
	options: { option: string; explaination?: string }[]
	answerIdx: number
}
export type ImageType = {
	url: string
	alt?: string
}

export enum ContentType {
	info,
	question,
	prompt,
	image,
}
