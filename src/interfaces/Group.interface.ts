export interface IGroup {
    group: string;
    schedule: IDay[];
}

interface IDay {
    day: string;
    lessons: [Record<string, null | ILesson>];
}

interface ILesson {
    name: string;
    teacher: string;
    link: string;
    type: string;
}
