import PropTypes from 'prop-types';

function TopSlide({ header, text, index, currentSlide, numberOfSlides, slidingDirection }) {


    let modifier;
    modifier = slidingDirection === "forward" ? "topslide--next-forward" : "topslide--next-backward"
    if (index === currentSlide) {
        modifier = "topslide--active"
    }
    if ((index === currentSlide - 1) || (currentSlide === 0 && index === numberOfSlides - 1)) {
        modifier = slidingDirection === "forward" ? "topslide--previous-forward" : "topslide--previous-backward"
    }



    return (
        <div className={`topslide ${modifier}`}>
            <h4 className="topslide__header">
                {header}
            </h4>
            <p className="topslide__text">
                {text}
            </p>
        </div>
    )
}

TopSlide.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    currentSlide: PropTypes.number.isRequired,
    numberOfSlides: PropTypes.number.isRequired,
    slidingDirection: PropTypes.string.isRequired
}

export default TopSlide