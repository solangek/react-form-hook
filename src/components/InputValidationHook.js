import { useEffect, useState } from "react";

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
        if (input.length < 5 || /\d/.test(input)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input]); // <--- note the dependency array

    return (
        <>
            <form>
                <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
                <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
        </>
    );
};

export default InputValidationHook;