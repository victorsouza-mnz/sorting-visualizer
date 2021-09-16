import React from "react";
import './header.styels.css'

const Header = ({ onClick, mergeSort, onToggleCheckBox, bubbleSort }) => {

    return (
        <div>
            <div className='header'>
                <div className='nav-item' onClick={onClick}>Generate new array</div>
                <div className='nav-item' onClick={mergeSort}>Merge sort</div>
                <div className='nav-item' onClick={bubbleSort}>Buble sort (speedUp 20x)</div>
                <div className='nav-item' onClick={() => alert('Not implemented yet')}>Insertion Sort</div>
                <div className='nav-item' onClick={() => alert('Not implemented yet')}>Quick sort</div>
            </div>
            <div className="info">
                <div className='info-item'>
                    <div className='dot'>
                    </div>
                    <div className='legend'>Comparando</div>
                </div>
                <div className='info-item'>
                    <input onChange={onToggleCheckBox} id='invert' type='checkbox' className='dot'>
                    </input>
                    <label htmlFor='invert' className='legend'>Inverter</label>
                </div>
            </div>
        </div>
    )
}

export default Header