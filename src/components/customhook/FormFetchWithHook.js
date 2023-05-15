import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ALGOLIA_SEARCH_URL = 'http://hn.algolia.com/api/v1/search?query=';
const ALGOLIA_SEARCH_DEFAULT = ALGOLIA_SEARCH_URL + 'useState';
const FETCH_ERROR_MSG = 'Something went wrong ...';

/** this is the definition of a React custom hook that will fetch data from some API.
 *
 * it returns a function that will be used as a callback
 * to set the URL to fetch using axios, and various states to track the fetching
 * @param initialUrl since we're using axios you may pass a string
 * or an object such as {url: 'https://hn.algolia.com/api/v1/search?query=useState', method: 'get'}
 * @param initialData
 * @returns {[{isLoading: boolean, isError: boolean, data: unknown}, ((value: unknown) => void)]}
 */
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData); // data to be fetched
    const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
    const [isLoading, setIsLoading] = useState(false); // is it fetching?
    const [isError, setIsError] = useState(false); // is there an error?

    // we are using useEffect to fetch data from the API
    // when the url state changes
    useEffect(() => {
        // this code returns a promise, but an effect can only return void or a cleanup function.
        // so we need to wrap the promise in a function that returns void
        const fetchData = async () => {
            setIsError(false); // reset error state
            setIsLoading(true); // set loading state to true to show loading indicator for example
            try {
                const result = await axios(url); // not that you can pass full object to axios including method, url, data
                setData(result.data); // set data state
            } catch (error) {
                setIsError(true); // an error occurred, set error state to true
            } finally {
                setIsLoading(false); // set loading state to false to hide loading indicator
            }
        };

        fetchData(); // execute the function above

    }, [url]); // trigger the effect when url changes

    return [{ data, isLoading, isError }, setUrl]; // return the data and the URL setter function
};

export default function FormFetchWithHook() {
    const [query, setQuery] = useState(''); // query string to be searched is a state

    // important remark: the initial value "{ hits: [] }" of the state must MATCH exactly the type of the data returned by the API
    // so if you are using this code for another API, you must change the initial value of the state to match the data returned by your API
    const [{ data, isLoading, isError }, doFetch] = useDataApi(ALGOLIA_SEARCH_DEFAULT, { hits: [] });

    return (
        <>
            <form
                onSubmit={event => {
                    doFetch(ALGOLIA_SEARCH_URL + encodeURIComponent(query));
                    event.preventDefault();
                }}
            >
                <input type="text" className="form-control" value={query} onChange={event => setQuery(event.target.value)}/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>

            {isError && <div className="alert alert-danger"> {FETCH_ERROR_MSG} </div>}

            {isLoading ? (
                <div className="alert alert-warning">Loading (this could be animated gif instead) ...</div>
            ) : (
                <ol>
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ol>
            )}
        </>
    );
}
