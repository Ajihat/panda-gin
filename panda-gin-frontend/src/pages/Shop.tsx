import { FC, useEffect } from 'react'
//components
import Header from '../components/Header'

const Shop: FC = () => {

    useEffect(() => {
        document.title = "Shop | Panda Gin"
    }, [])


    return (
        <div className="shop">
            <Header
                smallTitle="Shop Panda Gin"
                bigTitle="Find your Panda"
            />
        </div>
    )
}

export default Shop