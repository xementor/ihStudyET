import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CardQuizType,
  Content,
  ContentType,
  Info,
  PromptType,
} from 'app/services/storage/model'
import { chapter } from 'app/services/storage/chapter'

const lessons = chapter.subChapters[0]!.lessons

const initialState = {
  lessons: lessons,
  edible: false,
}

const slice = createSlice({
  name: 'editLesson',
  initialState,
  reducers: {
    updateLessonTitle: (
      state,
      action: PayloadAction<{ lid: number; title: string }>
    ) => {
      const { lid, title } = action.payload
      state.lessons[lid]!.title = title
    },
    updateContentText: (
      state,
      action: PayloadAction<{ lid: number; cid: number; content: string }>
    ) => {
      const { lid, cid, content } = action.payload
      const upDatedContent: Content = {
        type: ContentType.info,
        content: { text: content },
      }
      state.lessons[lid]!.contents[cid] = upDatedContent
    },
    addNewTextContent: (state, action: PayloadAction<{ lid: number }>) => {
      const { lid } = action.payload
      const textContent: Info = { text: 'write something' }
      state.lessons[lid]!.contents.push({
        type: ContentType.info,
        content: textContent,
      })
    },
    addNewMCQ: (state, action: PayloadAction<{ lid: number }>) => {
      const { lid } = action.payload
      const mcq = {
        question: 'Write you questio here?',
        options: ['option 1', 'option 2', 'option 3', 'option 4'],
        correctOptions: [3],
        explaination: 'explanation here',
      }

      const textContent: CardQuizType = { mcq: mcq }
      state.lessons[lid]!.contents.push({
        type: ContentType.question,
        content: textContent,
      })
    },
    updateMCQQuestion: (
      state,
      action: PayloadAction<{ lid: number; cid: number; question: string }>
    ) => {
      const { lid, cid, question } = action.payload
      const quest = state.lessons[lid]!.contents[cid]

      if (quest!.type == ContentType.question) {
        quest!.content.mcq.question = question
      }
    },
    updateMCQOption: (
      state,
      action: PayloadAction<{
        lid: number
        cid: number
        option: string
        oid: number
      }>
    ) => {
      const { lid, cid, option, oid } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.question) {
        quest!.content.mcq.options[oid] = option
      }
    },
    updateMCQExplaination: (
      state,
      action: PayloadAction<{ lid: number; cid: number; explaination: string }>
    ) => {
      const { lid, cid, explaination } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.question) {
        quest!.content.mcq.explaination = explaination
      }
    },
    updateMCQanswer: (
      state,
      action: PayloadAction<{ lid: number; cid: number; ans: number[] }>
    ) => {
      const { lid, cid, ans } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.question) {
        quest!.content.mcq.correctOptions = ans
      }
    },
    addPrompt: (state, action: PayloadAction<{ lid: number }>) => {
      const { lid } = action.payload
      const contents = state.lessons[lid]!.contents
      const newPrompt: PromptType = {
        text: 'Why you shoudl choose that',
        options: [
          { option: 'Yes', explaination: 'why yes' },
          { option: 'No', explaination: 'why NO' },
        ],
        answerIdx: 1,
      }
      contents.push({ content: newPrompt, type: ContentType.prompt })
    },
    addPromptOption: (
      state,
      action: PayloadAction<{
        lid: number
        cid: number
      }>
    ) => {
      const { lid, cid } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.prompt) {
        quest!.content.options.push({
          option: 'Another Option',
          explaination: 'explainatin for that',
        })
      }
    },
    UpdatePromptOption: (
      state,
      action: PayloadAction<{
        lid: number
        cid: number
        pid: number
        text: string
      }>
    ) => {
      const { lid, cid, pid, text } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.prompt) {
        quest!.content.options[pid]!.option = text
      }
    },
    UpdatePromptExplaination: (
      state,
      action: PayloadAction<{
        lid: number
        cid: number
        pid: number
        exp: string
      }>
    ) => {
      const { lid, cid, pid, exp } = action.payload
      const quest = state.lessons[lid]!.contents[cid]
      if (quest!.type == ContentType.prompt) {
        quest!.content.options[pid]!.explaination = exp
      }
    },
  },
})

export const {
  updateContentText,
  updateLessonTitle,
  addNewTextContent,
  addNewMCQ,
  updateMCQQuestion,
  updateMCQOption,
  updateMCQExplaination,
  updateMCQanswer,
  addPrompt,
  addPromptOption,
  UpdatePromptOption,
  UpdatePromptExplaination,
} = slice.actions
export default slice.reducer
