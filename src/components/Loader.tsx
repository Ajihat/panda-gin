import { FC } from 'react'
//assets
import loader from '../assets/loader.gif'

const Loader: FC = () => {
    return (
        <div className="loader">
            <img src={loader} alt="spinner" className="loader__spinner" />
        </div>
    )
}

export default Loader