import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setCountries] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data :(');
                }
                return res.json();
            })
            .then((data) => {
                setCountries(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }

            })

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}
