import { FaqElement } from "components/FaqElement/FaqElement";

import { FaqCategoryProps } from "./FaqCategory.types";

import "./FaqCategory.sass";

export const FaqCategory = ({
    category,
    categoryQuestions,
    id,
}: FaqCategoryProps) => {
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
