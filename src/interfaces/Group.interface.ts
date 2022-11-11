export interface IGroup {
    isNumerator:boolean
    group: string;
    schedule: IDay[];
}

interface IDay {
    time: string;
    lessons: ILesson[]

}

export interface ILesson {
    day: string;
    lessonInfo: {
        name: string;
        teacher: string;
        link: string;
        type: string;
    } | null

}
