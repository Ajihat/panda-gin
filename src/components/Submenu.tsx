//customhooks
import { useAppContext } from "../customhooks/useAppContext"

const Submenu = () => {

    const { navBarsAreHidden }: any = useAppContext(); //ANY

    return (
        <ul className={navBarsAreHidden ? "submenu" : "submenu submenu--down"}>

        </ul>
    )
}

export default Submenu