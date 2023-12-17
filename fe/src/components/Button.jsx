import React from 'react'

const Button = ({handleClick, className, label}) => {
    return (
        <>
            <button onClick={handleClick} className={`${className}`}>
                {label}
            </button>
        </>
    )
}

export default Button