import { FC, useRef } from 'react'


interface PrimaryButtonProps {
    text: string,
    type: "button" | "submit" | "reset"
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ text, type }) => {

    const primaryButtonRef = useRef<HTMLButtonElement | null>(null);
    const primaryButtonLayerRef = useRef<HTMLDivElement | null>(null);


    const handleOnMouseEnter = () => {
        primaryButtonLayerRef.current?.classList.add("primarybutton__layer--up");
    }

    const handleOnMouseLeave = () => {
        primaryButtonLayerRef.current?.classList.add("primarybutton__layer--down");
        primaryButtonLayerRef.current?.classList.remove("primarybutton__layer--up");
    }


    return (
        <button
            className="primarybutton"
            type={type}
            ref={primaryButtonRef}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <p className="primarybutton__text">
                {text}
            </p>
            <div ref={primaryButtonLayerRef} className="primarybutton__layer primarybutton__layer--up"></div>
        </button>
    )
}

export default PrimaryButton