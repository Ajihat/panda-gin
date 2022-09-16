export interface TopSliderNavigatorProps {
    changeSlide(direction: string): void;
    intervalID: ReturnType<typeof setInterval> | undefined;
}
