export interface SingleQuestion {
    id: number;
    question: string;
    answer: string;
}

export interface FaqQuestions {
    orders: SingleQuestion[];
    payments: SingleQuestion[];
    delivery: SingleQuestion[];
    complaint: SingleQuestion[];
    return: SingleQuestion[];
    warranty: SingleQuestion[];
    fake: SingleQuestion[];
    about: SingleQuestion[];
}
