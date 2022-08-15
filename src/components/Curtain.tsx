import { useEffect, useRef, FC } from 'react'
import ReactDom from 'react-dom'
//assets
import pandaHead from '../assets/panda-head.svg'
//customhooks
import { useAppContext } from '../customhooks/useAppContext'

const Curtain: FC = () => {

    const { closeCurtain }: any = useAppContext();  //ANY
    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {

        window.scroll(0, 0)
        timeoutRef.current = setTimeout(() => {
            closeCurtain();
            window.scroll(0, 0)
        }, 1500)

        return () => clearTimeout(timeoutRef.current)
    }, [])


    return ReactDom.createPortal(
        <div className="curtain">
            <img src={pandaHead} alt="panda-icon" className="curtain__icon" />
        </div>
        ,
        document.getElementById("portal")!

    )


}

export default Curtain