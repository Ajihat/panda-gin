import { FC } from 'react'

interface InnerContainerProps {
    children: React.ReactNode
}

const InnerContainer: FC<InnerContainerProps> = ({ children }) => {
    return (
        <div className="innercontainer">
            {children}
        </div>
    )
}

export default InnerContainer