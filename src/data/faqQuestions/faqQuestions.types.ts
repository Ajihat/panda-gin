export interface SingleQuestion {
    id: number;
    question: string;
    answer: string;
}

type QuestionCategory =
    | "orders"
    | "payments"
    | "delivery"
    | "complaint"
    | "return"
    | "warranty"
    | "fake"
    | "about";

export type FaqQuestions = Record<QuestionCategory, SingleQuestion[]>;
