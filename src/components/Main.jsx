//customhooks
import useAppContext from "../customhooks/useAppContext"

function Main({ children }) {
    const { isTopSliderClosed } = useAppContext();

    return (
        <main className={isTopSliderClosed ? "main main--notopslider" : "main"}>
            {children}
        </main>
    )
}

export default Main