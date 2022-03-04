export interface Riddle {
    uuid: string;
    createdBy: {
        id: number;
        username: string;
    };
    title: string;
}
