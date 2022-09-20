import { SingleQuestion } from "../../data/faqCategories/faqCategories.types";

export interface FaqCategoryProps {
    category: string;
    categoryQuestions: SingleQuestion[];
    id: string;
}
