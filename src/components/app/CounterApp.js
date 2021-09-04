import React, { useEffect, useState } from 'react';
import './CounterApp.css';

function CounterApp(props) {

    const [counter, setCounter] = useState(1);
    const [inputVal, setInputVal] = useState(1);
    const [initialValue, setInitialValue] = useState(1);
    const [maxValue, setMaxValue] = useState(1000);

    useEffect(() => {
        const counterFromLocalStorage = Number(localStorage.getItem('counter'));
        if (counterFromLocalStorage) {
            setCounter(counterFromLocalStorage);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counter', counter.toString());
    }, [counter])

    useEffect(() => {
        const counterFromLocalStorage = Number(localStorage.getItem('counter'));
        if (counterFromLocalStorage <= initialValue && isFinite(initialValue)) {
            setCounter(initialValue);
        }
    }, [initialValue])

    useEffect(() => {
        const counterFromLocalStorage = Number(localStorage.getItem('counter'));
        if (!isFinite(maxValue)) {
            setCounter(1000);
        }
        else if (counterFromLocalStorage >= maxValue) {
            setCounter(maxValue);
        }
    }, [maxValue])



    const setCounterWithValue = value => () => {
        const val = Number(value);
        if (!isNaN(val)) {
            setCounter(value);
        }
        else {
            setCounter(initialValue);
        }


    }

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
        const value = Number(e.target.value);

        if (isNaN(value)) {
            setInputVal('');
            alert('Please enter a valid number');
        }
        else {
            if (value > maxValue) {
                // setCounter(maxValue);
                setInputVal('');
                alert('Value cannot be greater than max value');
            }

            else if (value < initialValue) {
                // setCounter(initialValue);
                setInputVal('');
                alert('Value cannot be less than initial value');
            }

            else if (value < maxValue && value > initialValue) {
                setCounter(value);
                setInputVal('');
            }
        }
    }

    // const handleUpdateViaInput = () => {
        // const value = Number(inputVal);

        // if (isNaN(value)) {
        //     setInputVal('');
        //     alert('Please enter a valid number');
        // }
        // else {
        //     if (value > maxValue) {
        //         // setCounter(maxValue);
        //         setInputVal('');
        //         alert('Value cannot be greater than max value');
        //     }

        //     else if (value < initialValue) {
        //         // setCounter(initialValue);
        //         setInputVal('');
        //         alert('Value cannot be less than initial value');
        //     }

        //     else if (value < maxValue && value > initialValue) {
        //         setCounter(value);
        //         setInputVal('');
        //     }
        // }
    // }

    const handleInitialValueViaInput = (e) => {
        const endValue = Number(e.target.value);
        if (isNaN(endValue) || !isFinite(endValue)) {
            setInitialValue(1);
            alert('Enter a valid Initial Number');
            const counterFromLocalStorage = localStorage.getItem('counter');
            if (counterFromLocalStorage) {
                setCounter(counterFromLocalStorage);
            }
            else {
                setCounter(1);
            }

        } else {
            setInitialValue(e.target.value);
        }

    }

    const handleMaxValueViaInput = (e) => {
        const startValue = Number(e.target.value);
        if (isNaN(startValue)) {
            setMaxValue(1000);
            alert('Enter a valid Maximum Number');
            const counterFromLocalStorage = localStorage.getItem('counter');
            if (counterFromLocalStorage) {
                setCounter(counterFromLocalStorage);
            }
            else {
                setCounter(1);
            }
        } else {
            setMaxValue(e.target.value);
        }

    }


    // const handleInitialValues = () => {
    //     const startValue = Number(initialValue);
    //     const endValue = Number(maxValue);


    //     if (isNaN(startValue)) {
    //         setInitialValue(1);
    //         alert('Enter a Initial Number');
    //     } else if (isNaN(endValue)) {
    //         setMaxValue(1000);
    //         alert('Enter a Maximum Number');
    //     }
    //     else {
    //         setInitialValue(startValue);
    //         setMaxValue(endValue);
    //     }
    // }

    const reset = () => {
        setInitialValue(1);
        setMaxValue(1000);
        setCounter(initialValue);
    }
    return (
        <>
            <div>
                <input type="button" onClick={setCounterWithValue(counter - 1)} disabled={counter <= initialValue} className="minus-button" value="-" />
                <input className="num-input" onChange={handleInputChange} value={counter} />
                <input type="button" onClick={setCounterWithValue(counter + 1)} disabled={counter >= maxValue} className="plus-button" value="+" />

            </div>
            <br/>
            <div className="counterapp-body">
                <div>
                    <label>Initial Value:</label>
                    <input value={initialValue} onChange={handleInitialValueViaInput} /><br />
                    <label>Max Value:</label>
                    <input value={maxValue} onChange={handleMaxValueViaInput} /><br />
                    {/* <button onClick={handleInitialValues}>update initial values</button> */}

                </div>
                {/* <div>
                    <input value={inputVal} onChange={handleInputChange} />
                    <button onClick={handleUpdateViaInput}>update counter</button>
                </div> */}
                <div>
                    <button onClick={reset}>Reset</button>
                </div>
                <div>
                </div>

            </div>
        </>

    );
}

export default CounterApp;