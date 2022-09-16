import cancel from "../../assets/cancel.jpg";
import nextBtn from "../../assets/next-btn.jpg";
import prevBtn from "../../assets/prev-btn.jpg";

import { useAppContext } from "../../context/AppContext/useAppContext";

import { TopSliderNavigatorProps } from "./TopSliderNavigator.types";

import "./TopSliderNavigator.sass";

export const TopSliderNavigator = ({
    changeSlide,
    intervalID,
}: TopSliderNavigatorProps) => {
    const { closeTopSlider } = useAppContext();

    const handleCancel = () => {
        clearInterval(intervalID);
        closeTopSlider();
    };

    const handleClick = (direction: string) => {
        clearInterval(intervalID);
        changeSlide(direction);
    };

    return (
        <div className="topslidernavigator">
            <div className="topslidernavigator__buttons">
                <img
                    onClick={() => handleClick("prevSlide")}
                    src={prevBtn}
                    alt="previous-button"
                    className="topslidernavigator__prev"
                />
                <img
                    onClick={() => handleClick("nextSlide")}
                    src={nextBtn}
                    alt="next-button"
                    className="topslidernavigator__next"
                />
            </div>
            <div onClick={handleCancel} className="topslidernavigator__cancel">
                <img
                    src={cancel}
                    alt="cancel-button"
                    className="topslidernavigator__cancel-icon"
                />
            </div>
        </div>
    );
};
