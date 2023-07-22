import {ContentType, SubLesson} from "./model";

export const cLesson1: SubLesson = {
    title: "প্রোগ্রামের ধারণা (Concept of Program)",
    contents: [
        {type: ContentType.info, content: {
            text: "কোনো সমস্যা সমাধানের জন্য কম্পিউটারের ভাষায় ধারাবাহিকভাবে কতগুলো কমান্ড বা নির্দেশের সমষ্টি হলো প্রোগ্রাম।\n" +
                "প্রোগ্রামিং ভাষা (Programming Language) কম্পিউটার সিস্টেমে প্রোগ্রাম রচনার জন্য ব্যবহৃত শব্দ, বর্ণ, অঙ্ক, সংকেত এবং এগুলো বিন্যাসের নিয়মগুলোকে বলা হয় প্রোগ্রামের ভাষা বা প্রোগ্রামিং ল্যাঙ্গুয়েজ। \n"

        }},
        {
            type: ContentType.info,
            content: {text: "বিভিন্ন প্রজন্মের প্রোগ্রামের ভাষা:\n" +
                    "১৯৪৫ সাল থেকে শুরু করে এ পর্যন্ত কয়েকশ প্রোগ্রামিং ল্যাঙ্গুয়েজ বা ভাষা আবিষ্কৃত হয়েছে। এ সব ভাষাকে বৈশি অনুযায়ী পাঁচটি স্তর বা প্রজন্মে ভাগ করা যায়\n"}
        },
        {
            type: ContentType.info,
            content: {
                text: "১. প্রথম প্রজন্ম ভাষা (১৯৪৫) মেশিন ভাষা (Machine Language) \n" +
                    "২। দ্বিতীয় প্রজনন্ম ভাষা (১৯৫০) : অ্যাসেম্বলি ভাষা (Assembly Language)\n" +
                    "৩. তৃতীয় প্রজন্ম ভাষা (১৯৬০) : উচ্চতর ভাষা (High Level Language) \n" +
                    "৪. চতুর্থ প্রজন্ম ভাষা (১৯৭০) : অতি উচ্চতর ভাষা (Very High Level Language)\n" +
                    "৫. পঞ্চম প্রজন্ম ভাষা (১৯৮০) : স্বাভাবিক বা ন্যাচারাল ভাষা (Natural Language)\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "প্রোগ্রাম রচনার বৈশিষ্ট্যের ভিত্তিতে প্রোগ্রাম ভাষাসমূহকে প্রধানত দু'ভাগে ভাগ করা হয়। যথা- \n" +
                    "১.নিম্নস্তরের ভাষা (Low Level Language)\n" +
                    "২. উচ্চস্তরের ভাষা (High Level Language\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: ''
            }
        }
    ]
}

export const cLesson2: SubLesson = {
    title: "মেশিন ভাষা (Machine Language\n",
    contents: [
        {
            type: ContentType.info,
            content: {
                text: "কম্পিউটার মেশিনের নিজস্ব ভাষাকে মেশিন ভাষা বা নিম্নস্তরের ভাষা বলা হয়।"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "সাধারণত মেশিন ভাষা 0 ও 1 এ দুই বাইনারি অঙ্ক দিয়ে লিখতে হয়।"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "কম্পিউটার একমাত্র মেশিন ভাষাই বুঝতে পারে, অন্য ভাষায় প্রোগ্রাম করলে কম্পিউটার আগে উপযুক্ত অনুবাদকের সাহায্যে তাকে মেশিন ভাষায় পরিণত করে নেয়।"
            }
        },

        {
            type: ContentType.info,
            content: {
                text: "মেশিনের ভাষায় লিখিত প্রোগ্রামকে অবজেক্ট প্রোগ্রামও বলা হয়।"
            }
        },


        {
            type: ContentType.info,
            content: {
                text: "মেশিন ভাষায় প্রোগ্রাম রচনার সুবিধা:\n" +
                    "• প্রোগ্রাম দ্রুত কার্যকরী হয়। কারন মেশিন সরাসরি এই ভাষা বুজতে পারে।\n" +
                    "• কম পরিমাণ লজিক ব্যবহার করে প্রোগ্রাম নির্বাহ করা যায়।\n" +
                    "• কম পরিমাণ মেমোরি ব্যবহার করে প্রোগ্রাম নির্বাহ করা যায়।\n" +
                    "• এ ভাষায় রচিত প্রোগ্রাম কম্পিউটার সরাসরি বুঝতে পারে। তাই কোনো অনুবাদকের প্রয়োজন হয় না।\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "মেশিন ভাষায় প্রোগ্রাম রচনার অসুবিধা\n" +
                    "১। প্রোগ্রাম রচনা অত্যন্ত্য ক্লান্তিকর ও সময়সাপেক্ষ।\n" +
                    "২। এক মেশিনের জন্য লিখিত প্রোগ্রাম অন্য মেশিনে ব্যবহার করা যায় না।\n" +
                    "৩। প্রোগ্রাম লিখতে কম্পিঊটারের গঠন ভালো করে জানতে হয়।\n" +
                    "৪। ডিবাগ করা কষ্টকর।\n" +
                    "৫। দক্ষ প্রোগ্রামারের প্রয়োজন।\n"
            }
        },


    ]
}


export const cLesson3: SubLesson = {
    title: "অ্যাসেম্বলি ভাষা (Assembly Language)",
    contents: [
        {
            type: ContentType.info,
            content: {
                text: "অ্যাসেম্বলি ভাষা হচ্ছে মেশিন ভাষার পরবর্তী প্রোগ্রামের ভাষা।"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "এ ভাষা বিভিন্ন সংকেত সহযোগে গঠিত। তাই একে সাংকেতিক ভাষাও বলা হয়।"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "মেশিন ভাষার চেয়ে এ ভাষায় প্রোগ্রাম লেখা ও পড়া প্রোগ্রামারদের জন্য সহজ অ্যাসে ভাষায় সাংকেতিক কোডে নির্দেশ দেয়া হয়"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "এ ভাষায় লিখিত প্রোগ্রাম সরাসরি কম্পিউটার বুঝতে পারে না। অ্যাসেম্বলি ভাষায় লিখিত প্রোগ্রামকে মেশিনের ভাষায় রূপান্তরিত করার জন্য অ্যাসেম্বলার নামক এক ধরনের ট্রান্সলেটর বা অনু প্রোগ্রাম ব্যবহার করা হয়"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "অ্যাসেম্বলি ভাষায় ব্যবহৃত বিভিন্ন সংকেতকে নিমোনিক বলে। যেমন- ADD SUB MUL DIV ইত্যাদি"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "অ্যাসেম্বলি ভাষার নির্দেশে চারটি অংশ থাকে\n" +
                    "১. লেভেল (Level) ফিল্ড \n" +
                    "2. (Opcode)\n" +
                    "৩. অপারেন্ড ( Operand)\n" +
                    "8. (Comment\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "অ্যাসেম্বলি ভাষায় প্রোগ্রাম রচনার সুবিধাঃ\n" +
                    "• এ ভাষায় রচিত প্রোগ্রাম দক্ষ ও সংক্ষিপ্ত হ\n" +
                    "• মেমোরি অ্যাড্রেসের বিবরণের প্রয়োজন হয় না।\n" +
                    "• প্রোগ্রাম রচনায় স্কুলের পরিমাণ কম হয়।\n" +
                    "• মেশিনের অভ্যন্তরীণ গঠন সম্পর্কে জানা হয়।\n" +
                    "• ডিবাগিং করা সহজ।\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "অ্যাসেম্বলি ভাষায় প্রোগ্রাম রচনার অসুবিধা\n" +
                    "• প্রোগ্রাম রচনা অত্যন্ত ক্লান্তিকর ও সময়সাপেক্ষ \n" +
                    "• এক ধরনের মেশিনের জন্য লিখিত প্রোগ্রা\n" +
                    "• অন্য ধরনের মেশিনে ব্যবহার করা যায় না। \n" +
                    "• প্রোগ্রাম রচনার জন্য কম্পিউটারের সংগঠন সম্বন্ধে ধারণা থাকা অপরিহার্য।\n" +
                    "• প্রোগ্রাম নির্বাহের জন্য অনুবাদক প্রোগ্রাম অ্যাসেম্বলারের প্রয়োজন হয়।\n" +
                    "• এই ভাষা সরাসরি মেশিন বুঝতে পারে না।\n"
            }
        },
        {
            type: ContentType.info,
            content: {
                text: "মেশিন ভাষা ও অ্যাসেম্বলি ভাষার মধ্যে পার্থক্য মেশিন ভাষা\n" +
                    "১. বাইনারি 0 এবং 1 দিয়ে লেখা ভাষাকে মেশিন ভাষা বলা \n" +
                    "১. বিশেষ সাংকেতিক কোড ব্যবহার করে লেখা আ অ্যাসেম্বলি ভাষা বলে।\n" +
                    "২. মানুষের পক্ষে মেশিন ভাষা বোঝা অনেক কঠিন অ\n" +
                    "২. মেশিন ল্যাঙ্গুয়েজের তুলনায় অ্যাসেলি আষার জ গোলাম মানুষের পক্ষে বোঝা সহজ।\n" +
                    "৩. অনুবাদক প্রোগ্রামের প্রয়োজন হয় না।\n" +
                    "৩. অ্যাসেম্বলার নামক অনুবাদক প্রোগ্রামের প্রয়োজ\n" +
                    "৪. ডেটা বাইনারি ফরমেটে থাকায় নির্বাহ দ্রুত। ৫. প্রোগ্রাম ডিবাগ করা কঠিন।\n" +
                    "৪. মেশিন ল্যাঙ্গুয়েজের তুলনায় নির্বাহ মন্থর। ৫. প্রোগ্রাম ডিবাগ করা সহজ।\n"
            }
        },
    ]
}