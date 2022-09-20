import { useState } from "react";

import { GoPlusSmall } from "react-icons/go";
import { BsDash } from "react-icons/bs";

import { FaqElementProps } from "./FaqElement.types";

import "./FaqElement.sass";

export const FaqElement = ({ question, answer }: FaqElementProps) => {
    const [isAnswerHidden, setIsAnswerHidden] = useState<boolean>(true);

    const handleClick = () => setIsAnswerHidden((prevState) => !prevState);

    return (
        <div className="faqelement">
            <div
                className={
                    isAnswerHidden
                        ? "faqelement__question"
                        : "faqelement__question faqelement__question--active"
                }
                onClick={handleClick}
            >
                <p className="faqelement__text">{question}</p>
                <div
                    className={
                        isAnswerHidden
                            ? "faqelement__button"
                            : "faqelement__button faqelement__button--active"
                    }
                >
                    {isAnswerHidden ? (
                        <GoPlusSmall className="faqelement__icon-plus" />
                    ) : (
                        <BsDash className="faqelement__icon-minus" />
                    )}
                </div>
            </div>
            <div
                className={
                    isAnswerHidden
                        ? "faqelement__answer"
                        : "faqelement__answer faqelement__answer--visible"
                }
            >
                {answer}
            </div>
        </div>
    );
};
