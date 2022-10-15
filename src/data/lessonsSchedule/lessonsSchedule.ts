import {IGroup} from "../../interfaces";


export const NumeratorLessonsSchedule : IGroup[] = [
    {
        group: 'Kn31-1',
        schedule: [{
            day: 'Понеділок',
            lessons: [{
                '8:30': null,
                '10:20': {
                    name: "Системний аналіз",
                    teacher: 'Олянишен Т.В.',
                    link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                    type: 'Лекція'
                },
                '12:10': {
                    name: "Веб-технології та веб-дизайн",
                    teacher: 'Олянишен Т.В.',
                    link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                    type: 'Лекція'
                },
                '14:30': null,
                '16:20': null,
            },
            ]
        },
            {
                day: 'Вівторок',
                lessons: [{
                    '8:30': {
                        name: "Програмування мобільних систем ",
                        teacher: 'Сало М.Ф.',
                        link: 'https://meet.google.com/mab-hbgx-eyq?pli=1&authuser=1',
                        type: 'Лекція'
                    },
                    '10:20': {
                        name: "ШНМ (архітектура, застосування, навчання)",
                        teacher: 'Шиманський В.М.',
                        link: 'https://meet.google.com/aqh-uymy-kia?pli=1&authuser=1',
                        type: 'Лекція'
                    },
                    '12:10': {
                        name: "Моделювання систем ",
                        teacher: 'Крошний І.М.',
                        link: 'https://meet.google.com/qhq-akrw-pdr?pli=1&authuser=1',
                        type: 'Лекція'
                    },
                    '16:20': null,
                },
                ]
            },
            {
                day: 'Cереда',
                lessons:[{}]
            },
            {
                day: 'Четвер',
                lessons:[{}]
            },
            {
                day: 'Пятниця',
                lessons:[{}]
            }
            ]
    }
]

// export const DominatorLessonsSchedule = []
