import React, { useEffect, useState } from 'react';

export const useProfile = (username, setTotalPages,setDataPresent) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        async function callback(username) {
            if (!username) {
                return;
            }
            setError([]);
            setData(null)
            setLoading(true);
            setDataPresent(false);
            try {

                const signal = abortController.signal;
                const data = await fetch(`https://github-backend-siva.onrender.com/api/username/${username}`, { signal });
                if (!data.ok) {
                    setLoading(false);
                    console.log(data)
                    throw [data.status, data.statusText]
                }
                const profile = await data.json();
                setData(profile.data);
                setDataPresent(true);
                setTotalPages(Math.ceil(profile.data.public_repos / 10));
                setLoading(false);

            } catch (error) {
                setDataPresent(false);
                console.log(error)
                setLoading(false);
                setError(error);

            }

        }

        callback(username);
        // console.log(error)
        return () => {
            abortController.abort();
        }
    }, [username]);

    return { data, error, loading };
}
