import PropTypes from 'prop-types';
//images
import cancel from '../assets/cancel.jpg'
import nextBtn from '../assets/next-btn.jpg'
import prevBtn from '../assets/prev-btn.jpg'

function TopSliderNavigator({ setIsCanceled, intervalID, changeSlide }) {

    function handleCancel() {
        clearInterval(intervalID);
        setIsCanceled(true);
    }

    function handleClick(direction) {
        clearInterval(intervalID);
        changeSlide(direction)
    }


    return (
        <div className="topslidernavigator">
            <div className="topslidernavigator__buttons">
                <img
                    onClick={() => handleClick("prevSlide")}
                    src={prevBtn} alt="previous-button"
                    className="topslidernavigator__prev"
                />
                <img
                    onClick={() => handleClick("nextSlide")}
                    src={nextBtn} alt="next-button"
                    className="topslidernavigator__next"
                />
            </div>
            <div
                onClick={handleCancel}
                className="topslidernavigator__cancel"
            >
                <img
                    src={cancel}
                    alt="cancel-button"
                    className="topslidernavigator__cancel-icon"
                />
            </div>
        </div>
    )
}

TopSliderNavigator.propTypes = {
    setIsCanceled: PropTypes.func.isRequired,
    intervalID: PropTypes.number.isRequired,
    changeSlide: PropTypes.func.isRequired
}

export default TopSliderNavigator