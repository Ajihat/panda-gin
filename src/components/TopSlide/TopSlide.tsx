import "./TopSlide.sass";

interface TopSlideProps {
    header: string;
    text: string;
    index: number;
    currentSlide: number;
    numberOfSlides: number;
    slidingDirection: string;
}

const TopSlide = ({
    header,
    text,
    index,
    currentSlide,
    numberOfSlides,
    slidingDirection,
}: TopSlideProps) => {
    let modifier: string;
    modifier =
        slidingDirection === "forward"
            ? "topslide--next-forward"
            : "topslide--next-backward";
    if (index === currentSlide) {
        modifier = "topslide--active";
    }
    if (
        index === currentSlide - 1 ||
        (currentSlide === 0 && index === numberOfSlides - 1)
    ) {
        modifier =
            slidingDirection === "forward"
                ? "topslide--previous-forward"
                : "topslide--previous-backward";
    }

    return (
        <div className={`topslide ${modifier}`}>
            <h4 className="topslide__header">{header}</h4>
            <p className="topslide__text">{text}</p>
        </div>
    );
};

export default TopSlide;
