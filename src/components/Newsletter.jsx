//components
import Header from "./Header"

function Newsletter() {
    return (
        <div className="newsletter">
            <div className="newsletter__inner">
                <Header
                    smallTitle="Join the panda family"
                    bigTitle="Newsletter"
                    text="Stay up to date with new products, promotions and our limited editions"
                />
            </div>
        </div>
    )
}

export default Newsletter