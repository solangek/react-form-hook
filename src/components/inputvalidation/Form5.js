
import React from 'react'
const Form5 = ({inputHandler}) => {
    return (
        <form>
            <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
            <input type="text" id="input" autoComplete="off" onChange={inputHandler} className={"form-control"} />
        </form>
    )
}

export default Form5;