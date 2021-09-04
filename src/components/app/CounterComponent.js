import React, { useEffect, useState } from 'react';
import './CounterComponent.css';

function CounterComponent(props) {
    const [currCounterValue, setCurrCounterValue] = useState(1);
    const [initialValue, setInitialValue] = useState(1);
    const [maxValue, setMaxValue] = useState(1000);

    // To remember the state of counter:
    // useEffect(() => {
    //     const counterFromLocalStorage = Number(localStorage.getItem('counter'));
    //     if (counterFromLocalStorage) {
    //         setCurrCounterValue(counterFromLocalStorage);
    //     }
    // }, [])

    useEffect(() => {
        if (currCounterValue === maxValue) {
            alert('Reached Maximum Counter Value');
            setCurrCounterValue(currCounterValue - 1);
        }
        if (currCounterValue < initialValue) {
            alert('Reached at Start of Counter');
            setCurrCounterValue(1);
        }
        const temp = document.getElementById("txt");
        const container = document.getElementById("container");
        console.log(container);
        if(currCounterValue>99){
            temp.style.width="38px";
            container.style.width="200px";
        }
        
    }, [currCounterValue, initialValue, maxValue])

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

        const value = Number(e.target.value);

        if (isNaN(value)) {
            alert('Please enter a valid number');
        }
        else {
            if (value > maxValue) {
                alert(`Value cannot be greater than ${maxValue}`);
            }

            else {
                setCurrCounterValue(value);
            }
        }
    }


    
// const st=true;
//     let textAreaStyle = {
//         if(currCounterValue>2){

//         }
//   };


    return (
        <>
            <div id="container" className="container">
                <input type="button" onClick={setCounterWithValue(currCounterValue - 1)} disabled={currCounterValue <= initialValue} className="minus-button" value="-" />
                <input id="txt" className="num-input" onChange={handleInputChange} value={currCounterValue} />
                <input type="button" onClick={setCounterWithValue(currCounterValue + 1)} disabled={currCounterValue >= maxValue} className="plus-button" value="+" />

            </div>
        </>
    );
}

export default CounterComponent;