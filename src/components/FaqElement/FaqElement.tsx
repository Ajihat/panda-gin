import { useState } from "react";

import { GoPlusSmall } from "react-icons/go";
import { BsDash } from "react-icons/bs";

import "./FaqElement.sass";

interface FaqElementProps {
    question: string;
    answer: string;
}

const FaqElement = ({ question, answer }: FaqElementProps) => {
    const [isAnswerHidden, setIsAnswerHidden] = useState<boolean>(true);

    function handleClick() {
        if (isAnswerHidden === true) {
            setIsAnswerHidden(false);
        } else {
            setIsAnswerHidden(true);
        }
    }

    return (
        <div className="faqelement">
            <div className="faqelement__question" onClick={handleClick}>
                <p className="faqelement__text">{question}</p>
                <div className="faqelement__button">
                    {isAnswerHidden ? (
                        <GoPlusSmall className="faqelement__icon" />
                    ) : (
                        <BsDash className="faqelement__icon" />
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

export default FaqElement;
