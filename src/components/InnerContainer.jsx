import React from 'react'

function InnerContainer({ children }) {
    return (
        <div className="innercontainer">
            {children}
        </div>
    )
}

export default InnerContainer