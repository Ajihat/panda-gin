import { FC } from 'react'
//customhooks
import { useAppContext } from '../customhooks/useAppContext'

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
    const { isTopSliderClosed }: any = useAppContext(); //ANY
    return (
        <main className={isTopSliderClosed ? "main main--notopslider" : "main"}>
            {children}
        </main>
    )
}

export default Main