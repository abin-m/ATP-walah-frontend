// import React from 'react';

// const Button = ({ onclickHandler, children }) => {
//     return (
//         <button onClick={onclickHandler} className="btn  bg-slate-900  hover:bg-slate-800 w-32 text-white ">{children}</button>
//     );
// };

// export default Button;

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn  bg-slate-900  hover:bg-slate-800 w-32 text-white ">
            {children}
        </button>
    );
};

export default Button;