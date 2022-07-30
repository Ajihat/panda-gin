import { useEffect, useRef, FC } from 'react'
import ReactDom from 'react-dom'
//assets
import pandaHead from '../assets/panda-head.svg'
//actions
import { CLOSE_CURTAIN } from '../actions/appStateActions'
//customhooks
import { useAppContext } from '../customhooks/useAppContext'

const Curtain: FC = () => {

    const { isCurtainOpen, dispatch }: any = useAppContext();  //ANY
    const timeoutRef = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {
        if (isCurtainOpen) {
            window.scroll(0, 0)
            timeoutRef.current = setTimeout(() => {
                dispatch({ type: CLOSE_CURTAIN })
                window.scroll(0, 0)
            }, 1500)
        }
        return () => clearTimeout(timeoutRef.current)
    })

    if (!isCurtainOpen) return null;

    return ReactDom.createPortal(
        <div className="curtain">
            <img src={pandaHead} alt="panda-icon" className="curtain__icon" />
        </div>
        ,
        document.getElementById("portal")!

    )


}

export default Curtain