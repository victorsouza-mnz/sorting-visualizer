import React, { useState, useEffect } from "react";
import Header from "../../compoents/header/header.component";
import './Sort-Visualizer.styles.css'
import mergeSortHelper from '../../sortHelpers/mergeSortHelper'
import bubleSortHelper from '../../sortHelpers/bubbleSortHelper'

const SortVisualizer = () => {

    const [array, setArray] = useState([{}])
    const [invert, setInvert] = useState(false)

    useEffect(() => {
        resetArray()
    }, [])



    const onToggleCheckBox = (event) => {
        setInvert(!invert)
    }

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
        setArray(log.sortedArray)
    }
    const bubbleSort = async () => {
        const animationLog = bubleSortHelper(array)
        let red = true
        for (let i = 0; i < animationLog.length; i++) {
            const bars = document.getElementsByClassName('bar')
            await timeout(1);
            if (animationLog[i][2] === 0) {
                if (red) {
                    bars[animationLog[i][0]].style.backgroundColor = 'red'
                    bars[animationLog[i][1]].style.backgroundColor = 'red'
                    red = false
                } else {
                    bars[animationLog[i][0]].style.backgroundColor = 'aqua'
                    bars[animationLog[i][1]].style.backgroundColor = 'aqua'
                    red = true
                }
            } else if (animationLog[i][2] === 1) {

                let temp = bars[animationLog[i][0]].style.height
                bars[animationLog[i][0]].style.height = bars[animationLog[i][1]].style.height
                bars[animationLog[i][1]].style.height = temp
            }

        }
        const sortedArray = array.sort(function (a, b) {
            var x = a['value']; var y = b['value'];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        setArray(sortedArray)
    }

    return (
        <div>
            <Header bubbleSort={bubbleSort} onToggleCheckBox={onToggleCheckBox} mergeSort={mergeSort} onClick={onClick} />
            <div array={array} className="array" style={{ alignItems: `${invert ? 'flex-start' : 'flex-end'}` }}>

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