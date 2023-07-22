import {ContentType, QuestionType, SubLesson} from "./model";

export const subLesson1: SubLesson = {
    title: 'Introduction to React',
    contents: [
        {
            type: ContentType.question,
            content: {
                type: QuestionType.option,
                text: 'What is the difference between props and state in React?',
                options: [
                    {
                        text: 'Props are read-only, while state can be updated by the component itself',
                        explanation: 'Correct! Props are passed down from parent components and cannot be modified by the component itself, while state is internal to the component and can be updated using setState.',
                        isCorrect: true
                    },
                    {
                        text: 'Props are internal to the component, while state is passed down from parent components',
                        explanation: 'Incorrect. Props are passed down from parent components, while state is internal to the component.',
                        isCorrect: false
                    },
                    {
                        text: 'Props are used for rendering the UI, while state is used for managing component logic',
                        explanation: 'Incorrect. Props can be used for rendering the UI and managing component logic, while state is used for managing component state.',
                        isCorrect: false
                    }
                ],
            },
        },
        {
            type: ContentType.info,
            content: {
                text: 'React is a JavaScript library for building user interfaces.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.option,
                text: 'What is the virtual DOM in React?',
                options: [
                    {
                        text: 'A way to represent the actual DOM in memory',
                        explanation: 'Correct! The virtual DOM is a lightweight representation of the actual DOM in memory, which allows React to update the UI efficiently.',
                        isCorrect: true
                    },
                    {
                        text: 'A way to manipulate the DOM directly using JavaScript',
                        explanation: 'Incorrect. The virtual DOM is not a way to manipulate the DOM directly using JavaScript.',
                        isCorrect: false
                    },
                    {
                        text: 'A way to debug React applications',
                        explanation: 'Incorrect. The virtual DOM is not a way to debug React applications.',
                        isCorrect: false
                    }
                ]
            }
        },
        {
            type: ContentType.info,
            content: {
                text: 'React components are the building blocks of React applications.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.multiChoice,
                text: 'What are the two types of components in React?',
                options: [
                    {
                        text: 'Class components and functional components',
                        isCorrect: true
                    },
                    {
                        text: 'Stateful components and stateless components',
                        isCorrect: false
                    },
                    {
                        text: 'Higher-order components and render props',
                        isCorrect: false
                    },
                    {
                        text: 'DOM components and custom components',
                        isCorrect: false
                    }
                ]
            }
        },
        {
            type: ContentType.info,
            content: {
                text: 'React uses a unidirectional data flow to manage state and props.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.fillGap,
                text: 'What is the term used to describe the process of passing data from a parent component to a child component in React?',
                options: [
                    {
                        text: 'Props',
                        isCorrect: true
                    },
                    {
                        text: 'State',
                        isCorrect: false
                    },
                    {
                        text: 'Components',
                        isCorrect: false
                    },
                    {
                        text: 'DOM',
                        isCorrect: false
                    }
                ]
            }
        },
        {
            type: ContentType.info,
            content: {
                text: 'React provides a number of built-in hooks for managing state and other functionality in functional components.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.option,
                text: 'What is the useState hook in React?',
                options: [
                    {
                        text: 'A hook for managing state in functional components',
                        explanation: 'Correct! The useState hook allows you to add state to functional components without needing to use class components.',
                        isCorrect: true
                    },
                    {
                        text: 'A hook for managing props in functional components',
                        explanation: 'Incorrect. The useState hook is not for managing props in functional components.',
                        isCorrect: false
                    },
                    {
                        text: 'A hook for managing context in functional components',
                        explanation: 'Incorrect. The useState hook is not for managing context in functional components.',
                        isCorrect: false
                    }
                ]
            }
        },
        {
            type: ContentType.info,
            content: {
                text: 'React uses a virtual DOM diffing algorithm to update the UI efficiently.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.option,
                text: 'Match the following React lifecycle methods with their descriptions:',
                options: [
                    {
                        text: 'componentDidMount',
                        explanation: 'Runs after the component has mounted and the first render has completed'
                    },
                    {
                        text: 'componentDidUpdate',
                        explanation: 'Runs after the component has updated and the new render has completed'
                    },
                    {
                        text: 'componentWillUnmount',
                        explanation: 'Runs before the component is unmounted and removed from the DOM'
                        ,isCorrect: true,
                    }
                ]
            }
        },
        {
            type: ContentType.info,
            content: {
                text: 'React allows you to create reusable UI components using props and composition.'
            }
        },

        {
            type: ContentType.info,
            content: {
                text: 'React allows you to create reusable UI components using props and composition.'
            }
        },
        {
            type: ContentType.question,
            content: {
                type: QuestionType.option,
                text: 'What is the difference between props and state in React?',
                options: [
                    {
                        text: 'Props are read-only, while state can be updated by the component itself',
                        explanation: 'Correct! Props are passed down from parent components and cannot be modified by the component itself, while state is internal to the component and can be updated using setState.',
                        isCorrect: true
                    },
                    {
                        text: 'Props are internal to the component, while state is passed down from parent components',
                        explanation: 'Incorrect. Props are passed down from parent components, while state is internal to the component.',
                        isCorrect: false
                    },
                    {
                        text: 'Props are used for rendering the UI, while state is used for managing component logic',
                        explanation: 'Incorrect. Props can be used for rendering the UI and managing component logic, while state is used for managing component state.',
                        isCorrect: false
                    }
                ],
            },
        },
        {
            type: ContentType.info,
            content: {
                text: 'React allows you to create reusable UI components using props and composition.'
            }
        },
    ],
}
