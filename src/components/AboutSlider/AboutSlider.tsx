import { useState, useEffect, useCallback } from "react";

import { Header } from "components/Header/Header";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import slide1 from "assets/about-slider-1.jpg";
import slide2 from "assets/about-slider-2.jpg";
import slide3 from "assets/about-slider-3.jpg";

import "./AboutSlider.sass";

export const AboutSlider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slides = [slide1, slide2, slide3];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide === slides.length - 1) {
                return 0;
            } else {
                return prevSlide + 1;
            }
        });
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
            if (prevSlide === 0) {
                return slides.length - 1;
            } else {
                return prevSlide - 1;
            }
        });
    };
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 7000);
        return () => clearInterval(intervalId);
    }, [nextSlide, currentSlide]);
    return (
        <div
            className="aboutslider"
            style={{
                backgroundImage: `url(${slides[currentSlide]})`,
            }}
        >
            <Header
                bigTitle="All about Panda Gin"
                smallTitle="Panda Gin"
                text="Discover our history, our philosophy, our manufacturing process and our commitments"
            />
            <a className="aboutslider__cta" href="#about">
                Scroll down
                <br />|
            </a>
            <button
                onClick={nextSlide}
                className="aboutslider__arrow aboutslider__arrow--right"
            >
                <MdOutlineKeyboardArrowRight className="aboutslider__icon" />
            </button>
            <button
                onClick={prevSlide}
                className="aboutslider__arrow aboutslider__arrow--left"
            >
                <MdOutlineKeyboardArrowLeft className="aboutslider__icon" />
            </button>
        </div>
    );
};
