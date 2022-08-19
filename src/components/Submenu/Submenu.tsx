import { useAppContext } from "../../context/AppContext/useAppContext";

import "./Submenu.sass";

const Submenu = () => {
    const { navBarsAreHidden } = useAppContext();

    return (
        <ul
            className={navBarsAreHidden ? "submenu" : "submenu submenu--down"}
        ></ul>
    );
};

export default Submenu;
