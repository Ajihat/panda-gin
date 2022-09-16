import { useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { FaqCategory } from "../../components/FaqCategory/FaqCategory";
import { Submenu } from "../../components/Submenu/Submenu";

import { useActiveCategory } from "../useActiveCategory";

import { faqCategories } from "../../data/faqCategories/faqCategories";
import { faqSubmenu } from "../../data/faqSubmenu/faqSubmenu";

import "./Faq.sass";

export const Faq = () => {
    useEffect(() => {
        document.title = "FAQ | Panda Gin";
    }, []);

    const { activeCategory } = useActiveCategory(".faqcategory");

    return (
        <div className="faq">
            <Header
                smallTitle="A question?"
                bigTitle="Frequently Asked Questions"
            />
            <Submenu data={faqSubmenu} activeCategory={activeCategory} />
            <div className="faq__inner">
                {faqCategories.map((faqCategory) => {
                    const { category, id, categoryQuestions } = faqCategory;
                    return (
                        <FaqCategory
                            category={category}
                            id={id}
                            key={id}
                            categoryQuestions={categoryQuestions}
                        />
                    );
                })}
            </div>
        </div>
    );
};
