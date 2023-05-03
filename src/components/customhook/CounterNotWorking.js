import {useEffect, useState} from "react";

// we want to use setInterval to increment a counter
// based on an useEffect hook. However this code
// does not work as expected. The counter is not incremented and is stuck with value 1.

// see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// for a detailed explanation of this code

export default function CounterNotWorking() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, []);

    return (
        <div>Count: {count}</div>
    );
}