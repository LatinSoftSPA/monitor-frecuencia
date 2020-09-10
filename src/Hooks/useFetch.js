import { useState, useEffect } from 'react';

const useFetch = (url, method) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        //const param = {method: method};
        const fetchResource = async () => {
            try {
                let res = await fetch(url);
                let data = await res.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchResource();
    }, [url]);
    //const param = {method: method};

    return { data, loading, error };
}

export default useFetch;