import { FaqElement } from "../FaqElement/FaqElement";
import { SingleQuestion } from "../../data/faqQuestions/faqQuestions.types";

import "./FaqCategory.sass";

interface FaqCategoryProps {
    title: string;
    data: SingleQuestion[];
    id: string;
}

export const FaqCategory = ({ title, data, id }: FaqCategoryProps) => {
    return (
        <section className="faqcategory" id={id}>
            <h3 className="faqcategory__header">{title}</h3>
            <div className="faqcategory__inner">
                {data.map((item) => (
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