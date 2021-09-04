import React, { useEffect, useState } from 'react';
import './CounterComponent.css';

function CounterComponent(props) {

    const [currCounterValue, setCurrCounterValue] = useState(1);
    const [initialValue, setInitialValue] = useState(1);
    const [maxValue, setMaxValue] = useState(1000);

    // useEffect(() => {
    //     const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    //     if (counterFromLocalStorage) {
    //         setCurrCounterValue(counterFromLocalStorage);
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('counter', currCounterValue.toString());
    // }, [currCounterValue])

    // useEffect(() => {
    //     const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    //     if (counterFromLocalStorage <= initialValue && isFinite(initialValue)) {
    //         setCounter(initialValue);
    //     }
    // }, [initialValue])

    // useEffect(() => {
    //     const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    //     if (!isFinite(maxValue)) {
    //         setCounter(1000);
    //     }
    //     else if (counterFromLocalStorage >= maxValue) {
    //         setCounter(maxValue);
    //     }
    // }, [maxValue])



    const setCounterWithValue = value => () => {
        const val = Number(value);
        if (!isNaN(val)) {
            setCurrCounterValue(value);
        }
        else {
            setCurrCounterValue(initialValue);
        }
    }

    const handleInputChange = (e) => {
        // setInputVal(e.target.value);
        const value = Number(e.target.value);

        if (isNaN(value)) {
            alert('Please enter a valid number');
        }
        else {
            if (value > maxValue) {
                alert(`Value cannot be greater than ${maxValue}`);
            }

            // else if (value < initialValue) {
            //     alert(`Value cannot be less than ${initialValue} `);
            // }

            else {
                setCurrCounterValue(value);
            }
        }
    }

    const increaseSize = (e) => {
        const width = 'px';
        
        // e.target.style.width= ((currCounterValue.toString().length)*8) + width;
    }
    return (
        <>
            <div className="container">
                <input type="button" onClick={setCounterWithValue(currCounterValue - 1)} disabled={currCounterValue <= initialValue} className="minus-button" value="-" />
                <input className="num-input" onChange={handleInputChange} onKeyPress={increaseSize} value={currCounterValue}  />
                <input type="button" onClick={setCounterWithValue(currCounterValue + 1)} disabled={currCounterValue >= maxValue} className="plus-button" value="+" />

            </div>

        </>

    );
}

export default CounterComponent;