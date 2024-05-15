import React, { useState, useEffect, useRef } from "react";

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// for a detailed explanation of this code

export default function CounterCustomHook() {
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [isRunning, setIsRunning] = useState(true);

    // this is the custom hook.
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

/**
 * This custom hook sets up an interval and calls the callback function
 * How do we know it is a hook? Because it starts with "use"
 * @param callback the function to be called
 * @param delay the delay in milliseconds
 */
function useInterval(callback, delay) {
    // The useRef Hook allows you to persist values between renders.
    // It can be used to store a mutable value that does not cause a re-render when updated.
    const savedCallback = useRef();

    // when callback changes, we store the new callback in the ref
    useEffect(() => {
        console.log("storing callback...");
        savedCallback.current = callback;
    }, [callback]);

    // when delay changes, we set up the interval with the new delay
    useEffect(() => {
        // we need to define the function tick() inside the useEffect hook
        // so it can access the savedCallback.current value
        function tick() {
            savedCallback.current();
        }
        console.log("callback:" + savedCallback.current)
        if (delay !== null) {
            console.log("setInterval starting:");
            // setInterval(savedCallback.current, delay) won't work because
            // savedCallback.current will always have the initial value of callback
            // since it is a closure.
            let id = setInterval(tick, delay);
            return () => {console.log("clear !"); clearInterval(id);}
        }
    }, [delay]);
}
