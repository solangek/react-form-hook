import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// for a detailed explanation of this code

export default function CounterCustomHook() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
    }, isRunning ? delay : null);

    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }

    function handleIsRunningChange(e) {
        setIsRunning(e.target.checked);
    }
    //console.log("here")
    return (
        <>
            <h1>{count}</h1>
            <input type="checkbox" checked={isRunning} onChange={handleIsRunningChange} /> Running
            <br />
            <input value={delay} onChange={handleDelayChange} />
        </>
    );
}
// the custm hook
function useInterval(callback, delay) {
    const savedCallback = useRef();
    console.log("useInterval");
    // Remember the latest function.
    useEffect(() => {
        console.log("storing callback...");
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        console.log("callback:" + savedCallback.current)
        if (delay !== null) {
            console.log("setInterval starting:");
            let id = setInterval(tick, delay);
            return () => {console.log("clear !"); clearInterval(id);}
        }
    }, [delay]);
}
