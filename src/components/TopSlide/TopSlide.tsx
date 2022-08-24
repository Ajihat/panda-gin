import "./TopSlide.sass";

interface TopSlideProps {
    header: string;
    text: string;
    index: number;
    currentSlide: number;
    numberOfSlides: number;
    slidingDirection: "forward" | "backward";
}

type ModifierObj = Record<
    "prev" | "next",
    { backward: string; forward: string }
>;

const modifierObj: ModifierObj = {
    prev: {
        backward: "topslide--previous-backward",
        forward: "topslide--previous-forward",
    },
    next: {
        backward: "topslide--next-backward",
        forward: "topslide--next-forward",
    },
};

export const TopSlide = ({
    header,
    text,
    index,
    currentSlide,
    numberOfSlides,
    slidingDirection,
}: TopSlideProps) => {
    const isCurrentSlide = index === currentSlide;
    const isPreviousSlide =
        index === currentSlide - 1 ||
        (currentSlide === 0 && index === numberOfSlides - 1);

    const modifierKey = isPreviousSlide ? "prev" : "next";
    const modifier = isCurrentSlide
        ? "topslide--active"
        : modifierObj[modifierKey][slidingDirection];

    return (
        <div className={`topslide ${modifier}`}>
            <h4 className="topslide__header">{header}</h4>
            <p className="topslide__text">{text}</p>
        </div>
    );
};
