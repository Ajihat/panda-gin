import { useAppContext } from "../../context/AppContext/useAppContext";

import { MainProps } from "./Main.types";

import "./Main.sass";

export const Main = ({ children }: MainProps) => {
    const { isTopSliderClosed } = useAppContext();
    return (
        <main className={isTopSliderClosed ? "main main--notopslider" : "main"}>
            {children}
        </main>
    );
};
