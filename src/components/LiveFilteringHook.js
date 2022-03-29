import { useEffect, useState } from "react";

const array = [
    { key: '1', type: 'planet', value: 'Tatooine' },
    { key: '2', type: 'planet', value: 'Alderaan' },
    { key: '3', type: 'starship', value: 'Death Star' },
    { key: '4', type: 'starship', value: 'CR90 corvette' },
    { key: '5', type: 'starship', value: 'Star Destroyer' },
    { key: '6', type: 'person', value: 'Luke Skywalker' },
    { key: '7', type: 'person', value: 'Darth Vader' },
    { key: '8', type: 'person', value: 'Leia Organa' },
];

const LiveFilteringHook = props => {
    const [inputValue, setInputValue] = useState('');
    const [inputType, setInputType] = useState('');
    const [filteredArray, setFilteredArray] = useState(array);

    const inputValueHandler = e => {
        setInputValue(e.target.value);
    };

    const inputTypeHandler = e => {
        setInputType(e.target.value);
    };

    useEffect(() => {
        // update the STATE filtered array with a function that filters the array based on the input value and type
        setFilteredArray(() => {
            const newArray = array.filter(item => item.type.includes(inputType));
            return newArray;
        });
    }, [inputType]);

    // Prepare array to be rendered
    const listItems = filteredArray.map((item) =>
        <>
            <tr>
                <td style={{ border: '1px solid lightgray', padding: '0 1rem' }}>{item.type}</td>
                <td style={{ border: '1px solid lightgray', padding: '0 1rem' }} > {item.value}</td>
            </tr >
        </>
    );

    return (
        <>
            <form style={{ maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <label htmlFor="input-type">Filter by <b>type</b></label><br />
                    <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
                </div>
            </form>
            <br />
            <table style={{ width: '20rem', border: '1px solid gray', padding: '0 1rem' }}>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                {listItems}
            </table>
        </>
    );
};

export default LiveFilteringHook;