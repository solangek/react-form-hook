import { useEffect, useState } from "react";
import Form5 from "./Form5";
import ValidationResult from "./ValidationResult";

// The React docs explicitly say: "You don't need Effects to transform data for rendering"
// THIS EXAMPLE IS INCLUDED AS A WARNING EXAMPLE!
// because:
// - The validation logic doesn't need useEffect at all.
//   You're deriving state from other state, which should be done during render, not in an effect.
// - Current flow causes two renders:
//      User types → setInput() → render
//      useEffect runs → setIsValid() → render again

// When WOULD you use useEffect for validation?
// Only if you need:
// - Debouncing (validate 500ms after user stops typing)
// - Async validation (check username availability on server)
// - Side effects (analytics tracking, localStorage sync)

// The example helps understand the flow of execution:
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
        // note that the useEffect below is not necessary since we could simply apply
        // the validation logic directly in the inputHandler function
        // setIsValid((e.target.value.length >= 5 && ! /\d/.test(e.target.value)));

    };

    // we define an effect trigggered upon modification of the input state
    useEffect(() => {
        setIsValid((input.length >= 5 && ! /\d/.test(input))); // <--- this is the validation logic

        //(input.length < 5 || /\d/.test(input)) ? setIsValid(false) : setIsValid(true);
    }, [input]); // <--- note the dependency array

    return (
        <>
            <Form5 inputHandler={inputHandler} />
            <ValidationResult isValid={isValid}  />
        </>
    );
};

export default InputValidationHook;
