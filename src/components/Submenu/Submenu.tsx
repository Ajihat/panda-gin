import { useAppContext } from "../../context/AppContext/useAppContext";

import "./Submenu.sass";

export const Submenu = () => {
    const { navBarsAreHidden } = useAppContext();

    return (
        <ul
            className={navBarsAreHidden ? "submenu" : "submenu submenu--down"}
        ></ul>
    );
};
