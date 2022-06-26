import PropTypes from 'prop-types';
//assets
import cancel from '../assets/cancel.jpg'
import nextBtn from '../assets/next-btn.jpg'
import prevBtn from '../assets/prev-btn.jpg'
//customhooks
import useAppContext from '../customhooks/useAppContext'
//actions
import { CLOSE_TOPSLIDER } from '../actions/appStateActions'

function TopSliderNavigator({ intervalID, changeSlide }) {

    const { dispatch } = useAppContext()

    function handleCancel() {
        clearInterval(intervalID);
        dispatch({ type: CLOSE_TOPSLIDER });

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
    intervalID: PropTypes.number,
    changeSlide: PropTypes.func.isRequired
}

export default TopSliderNavigator