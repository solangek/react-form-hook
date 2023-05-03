import { useEffect, useState } from "react";
import Form5 from "./Form5";

// this is the flow of execution:
// 1. user types some input text
// 2. the onChange callback is called and update the state "input"
// 3. the hook is triggered because it depends on the state "input"
// 4. the hook updates the isValid state
// 5. React re-renders the component ONLY if the state "isValid" changes

const InputValidationHook = props => {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    const inputHandler = e => {
        setInput(e.target.value);
    };

    // we define an effect trigggered upon modification of the input state
    useEffect(() => {
        setIsValid((input.length >= 5 && ! /\d/.test(input)));

        //(input.length < 5 || /\d/.test(input)) ? setIsValid(false) : setIsValid(true);
    }, [input]); // <--- note the dependency array

    return (
        <>
            <Form5 inputHandler={inputHandler} />
            <p  className={isValid ? "alert alert-info" : "alert alert-danger"}>
                {isValid ? 'Valid input' : 'Input not valid'}
            </p>
        </>
    );
};

export default InputValidationHook;