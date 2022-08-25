import { useState, useEffect, useRef } from "react";

import { topSlides } from "../../data/topSlider/topSlider";

import { TopSlide } from "../TopSlide/TopSlide";
import { TopSliderNavigator } from "../TopSliderNavigator/TopSliderNavigator";

import { useAppContext } from "../../context/AppContext/useAppContext";

import "./TopSlider.sass";

export const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [slidingDirection, setSlidingDirection] = useState<
        "forward" | "backward"
    >("forward");
    const intervalRef = useRef<ReturnType<typeof setInterval>>();

    const { isTopSliderClosed } = useAppContext();

    const changeSlide = (direction: string) => {
        if (direction === "nextSlide") {
            setSlidingDirection("forward");
            setCurrentSlide((prevSlide) => {
                if (prevSlide === topSlides.length - 1) {
                    return 0;
                } else {
                    return prevSlide + 1;
                }
            });
        }
        if (direction === "prevSlide") {
            setSlidingDirection("backward");
            setCurrentSlide((prevSlide) => {
                if (prevSlide === 0) {
                    return topSlides.length - 1;
                } else {
                    return prevSlide - 1;
                }
            });
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => changeSlide("nextSlide"), 4000);
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div
            className={
                isTopSliderClosed ? "topslider topslider--closed" : "topslider"
            }
        >
            <div className="topslider__inner">
                {topSlides.map((topSlide, index: number) => {
                    const { id } = topSlide;
                    return (
                        <TopSlide
                            key={id}
                            {...topSlide}
                            index={index}
                            currentSlide={currentSlide}
                            slidingDirection={slidingDirection}
                            numberOfSlides={topSlides.length}
                        />
                    );
                })}
                <TopSliderNavigator
                    changeSlide={changeSlide}
                    intervalID={intervalRef.current}
                />
            </div>
        </div>
    );
};
