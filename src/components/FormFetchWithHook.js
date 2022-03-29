import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * @function FormFetchWithHook - Fetch data from an API with hooks
 * @param initialUrl - The initial URL to fetch data from
 * @param initialData - The initial data to display
 * @returns {[{isLoading: boolean, isError: boolean, data: unknown}, ((value: unknown) => void)]}
 */
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios(url);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData(); // fetch data on component mount
    }, [url]); // trigger the effect when url changes

    return [{ data, isLoading, isError }, setUrl];
};

export default function FormFetchWithHook() {
    const [query, setQuery] = useState('');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );

    return (
        <>
            <form
                onSubmit={event => {
                    doFetch(
                        `http://hn.algolia.com/api/v1/search?query=${query}`,
                    );
                    event.preventDefault();
                }}
            >
                <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
