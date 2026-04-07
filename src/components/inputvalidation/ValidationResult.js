
import React from 'react'

const PROMPT = "Write something (more than 5 non numerical characters is a valid input)";
const ValidationResult = ({isValid}) => {
    return (
        <p  className={isValid ? "alert alert-info" : "alert alert-danger"}>
            {isValid ? 'Valid input' : 'Input not valid'}
        </p>
    )
}

export default ValidationResult;