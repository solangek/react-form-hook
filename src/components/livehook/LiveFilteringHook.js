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
    //const [inputValue, setInputValue] = useState('');
    const [inputType, setInputType] = useState('');
    const [filteredArray, setFilteredArray] = useState(array);

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

    /** prepare the list of items to be rendered
     * Note that we use the key property to identify each item in the array as required by React
     */
    const listItems = filteredArray.map((item) =>
            <tr key={item.key}>
                <td>{item.type}</td>
                <td> {item.value}</td>
            </tr >
    );

    return (
        <>
            <form style={{ maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <label htmlFor="input-type">Filter by <b>type</b></label><br />
                    <input type="text" id="input-type" autoComplete="off" onChange={inputTypeHandler} className={'form-control'} />
                </div>
            </form>
            <br />
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>
            </table>
        </>
    );
};

export default LiveFilteringHook;