import { useAppContext } from "../../context/AppContext/useAppContext";

import "./Main.sass";

interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    const { isTopSliderClosed } = useAppContext();
    return (
        <main className={isTopSliderClosed ? "main main--notopslider" : "main"}>
            {children}
        </main>
    );
};
