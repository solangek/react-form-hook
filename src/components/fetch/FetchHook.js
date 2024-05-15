import React, { useState, useEffect } from 'react';
import axios from 'axios';

// useEffect most of the time should not be used directly in the component
// unless we want to fetch data from an API or something similar
// the good way to use useEffect is to define a custom hook where we
// define some generic logic that can be reused in different components
export default function FetchHook(props) {
    const [data, setData] = useState({ hits: [] }); // an array of urls

    // we use the library axios to fetch the data from the url
    // axios is a promise based library that makes http requests

    useEffect( () => {
        // Why do we need to define a function and call it?
        // using async directly in the useEffect function isn't allowed.
        // an effect hook should return nothing or a clean up function, it cannot return a promise
        // so we define a function and call it
        const fetchData = async () => { // await can be used only inside async functions
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=useState'
            );
            setData(result.data);
        };
        fetchData();
    }, []); // array of dependencies: if the array is empty, the effect will only run once

    // note: we must generate keys for each item in the array
    // otherwise React will complain. Keys should be unique
    // and not change over time.
    return (
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}