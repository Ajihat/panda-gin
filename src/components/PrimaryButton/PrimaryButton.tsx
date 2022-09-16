import { useRef } from "react";

import { PrimaryButtonProps } from "./PrimaryButton.types";

import "./PrimaryButton.sass";

export const PrimaryButton = ({
    text,
    type,
    isDisabled,
}: PrimaryButtonProps) => {
    const primaryButtonRef = useRef<HTMLButtonElement | null>(null);
    const primaryButtonLayerRef = useRef<HTMLDivElement | null>(null);

    const handleOnMouseEnter = () => {
        primaryButtonLayerRef.current?.classList.add(
            "primarybutton__layer--up"
        );
    };

    const handleOnMouseLeave = () => {
        primaryButtonLayerRef.current?.classList.add(
            "primarybutton__layer--down"
        );
        primaryButtonLayerRef.current?.classList.remove(
            "primarybutton__layer--up"
        );
    };

    return (
        <button
            className="primarybutton"
            type={type}
            ref={primaryButtonRef}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            disabled={isDisabled}
        >
            <span className="primarybutton__text">{text}</span>
            <div
                ref={primaryButtonLayerRef}
                className="primarybutton__layer primarybutton__layer--up"
            ></div>
        </button>
    );
};
