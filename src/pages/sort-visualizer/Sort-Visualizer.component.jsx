import React, { useState, useEffect } from "react";
import Header from "../../compoents/header/header.component";
import './Sort-Visualizer.styles.css'
import mergeSortHelper from '../../sortHelpers/mergeSortHelper'

const SortVisualizer = () => {

    const [array, setArray] = useState([{}])

    useEffect(() => {
        resetArray()
    }, [])


    const resetArray = () => {
        const array = []
        for (let i = 0; i < 100; i++) {
            array.push({ value: randomInt(5, 100), idx: i })
        }
        setArray(array)
    }


    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const onClick = () => {
        resetArray()
    }

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const mergeSort = async () => {
        const log = mergeSortHelper(array)
        for (let i = 0; i < log.comparingLogArray.length; i++) {
            const bars = document.getElementsByClassName('bar')
            for (let j = 0; j < 2; j++) {
                await timeout(20);
                const color = j === 0 ? 'red' : 'aqua'
                bars[log.comparingLogArray[i][0]].style.backgroundColor = color
                bars[log.comparingLogArray[i][1]].style.backgroundColor = color

                if (j === 1) {
                    bars[log.changeLogArray[i][1]].style.height = 6 * log.changeLogArray[i][0] + 'px';
                }
            }


        }
    }

    return (
        <div>
            <Header mergeSort={mergeSort} onClick={onClick} />
            <div className="array">
                {
                    array.map((item, idx) => {
                        return (
                            <div className="bar" key={idx} style={{ height: `${6 * item.value}px` }}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )



}

export default SortVisualizer