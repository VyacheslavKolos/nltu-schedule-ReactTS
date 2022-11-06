import {IGroup} from "../../interfaces";


export const NumeratorLessonsSchedule : IGroup[] = [
    {
        group: 'Kn31-1',
        schedule: [{
            day: 'Понеділок',
            lessons: [
                {time:'8:30', info: null},
                {time:'10:20', info: {
                        name: "Системний аналіз",
                        teacher: 'Олянишен Т.В.',
                        link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                        type: 'Лекція'
                    }},
                {time:'12:10', info: {
                        name: "Веб-технології та веб-дизайн",
                        teacher: 'Олянишен Т.В.',
                        link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                        type: 'Лекція'
                    }},
                {time:'14:30', info: null},
                {time:'16:20', info: null},
            ],
        },
            {
                day: 'Вівторок',
                lessons: [
                    {time:'8:30', info: null},
                    {time:'10:20', info: {
                            name: "Системний аналіз",
                            teacher: 'Олянишен Т.В.',
                            link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                            type: 'Лекція'
                        }},
                    {time:'12:10', info: {
                            name: "Веб-технології та веб-дизайн",
                            teacher: 'Олянишен Т.В.',
                            link: 'https://meet.google.com/axj-aato-eyd?authuser=1',
                            type: 'Лекція'
                        }},
                    {time:'14:30', info: null},
                    {time:'16:20', info: null},
                ],

            },
            // {
            //     day: 'Cереда',
            //     lessons:{}
            // },
            // {
            //     day: 'Четвер',
            //     lessons:{}
            // },
            // {
            //     day: 'Пятниця',
            //     lessons:{}
            // }
            ]
    }
]

// export const DominatorLessonsSchedule = []
