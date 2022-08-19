//assets
import cancel from "../../assets/cancel.jpg";
import nextBtn from "../../assets/next-btn.jpg";
import prevBtn from "../../assets/prev-btn.jpg";
//customhooks
import { useAppContext } from "../../context/AppContext/useAppContext";

import "./TopSliderNavigator.sass";

interface TopSliderNavigatorProps {
    changeSlide(direction: string): void;
    intervalID: NodeJS.Timer | undefined;
}

const TopSliderNavigator = ({
    changeSlide,
    intervalID,
}: TopSliderNavigatorProps) => {
    const { closeTopSlider } = useAppContext();

    function handleCancel() {
        clearInterval(intervalID);
        closeTopSlider();
    }

    function handleClick(direction: string): void {
        clearInterval(intervalID);
        changeSlide(direction);
    }

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

export default TopSliderNavigator;
