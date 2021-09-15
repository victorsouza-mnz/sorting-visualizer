import React from "react";
import './header.styels.css'

const Header = ({ onClick, mergeSort }) => {

    return (
        <div className='header'>
            <button onClick={onClick}>Generate new array</button>
            <button onClick={mergeSort}>Merge sort</button>
        </div>
    )
}

export default Header