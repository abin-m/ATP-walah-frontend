import React from 'react'

const Button = ({ children, onclickHandler }) => {
    return (
        <div>
            <button className="btn  bg-slate-900  hover:bg-slate-800 w-32 text-white " onClick={onclickHandler}>{children}</button>
        </div>
    )
}

export default Button
