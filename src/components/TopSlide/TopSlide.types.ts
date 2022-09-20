export interface TopSlideProps {
    header: string;
    text: string;
    index: number;
    currentSlide: number;
    numberOfSlides: number;
    slidingDirection: "forward" | "backward";
}

export type ModifierObj = Record<
    "prev" | "next",
    { backward: string; forward: string }
>;
