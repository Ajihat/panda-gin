import { useEffect } from "react";

import { FaqElement } from "../FaqElement/FaqElement";
import { SingleQuestion } from "../../data/faqCategories/faqCategories.types";

import "./FaqCategory.sass";

interface FaqCategoryProps {
    category: string;
    categoryQuestions: SingleQuestion[];
    id: string;
}

export const FaqCategory = ({
    category,
    categoryQuestions,
    id,
}: FaqCategoryProps) => {
    useEffect(() => {}, []);

    return (
        <section className="faqcategory" id={id}>
            <h3 className="faqcategory__header">{category}</h3>
            <div className="faqcategory__inner">
                {categoryQuestions.map((item) => (
                    <FaqElement
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </section>
    );
};
