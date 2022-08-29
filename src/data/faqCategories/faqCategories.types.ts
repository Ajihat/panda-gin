export interface SingleQuestion {
    id: number;
    question: string;
    answer: string;
}

interface FaqCategory {
    category: string;
    id: string;
    categotyQuestions: SingleQuestion[];
}

export type FaqCategories = FaqCategory[];
