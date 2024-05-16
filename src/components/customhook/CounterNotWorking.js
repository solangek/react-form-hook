import {useEffect, useState} from "react";

// we want to use setInterval to increment a counter
// based on an useEffect hook. We set a timer on first render
// and clear it on unmount.
// However this code does not work as expected. The counter is not incremented and is stuck with value 1

export default function CounterNotWorking() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []); // we run the effect only once, it should start the timer

    return (
        <div>Count: {count}</div>
    );
}

// The problem is that useEffect captures the count from the first render.
// It is equal to 0. We never re-apply the effect so the closure in setInterval always
// references the count from the first render, and count + 1 is always 1. Oops!

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// for a detailed explanation of this code