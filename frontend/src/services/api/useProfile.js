import React, { useEffect, useState } from 'react';

export const useProfile = (username) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        async function callback(username) {
            if (!username) {
                return;
            }

            setLoading(true);
            try {

                const signal = abortController.signal;
                const data = await fetch(`http://localhost:3000/api/username/${username}`, { signal });
                if (!data.ok) {
                    setLoading(false);
                    throw new Error('Something went wrong.')
                }
                const profile = await data.json();
                setData(profile.data);
                setLoading(false);

            } catch (error) {
                setLoading(false);
                setError(error.message);

            }

        }

        callback(username);
        console.log(error)
        return () => {
            abortController.abort();
        }
    }, [username]);

    return { data, error, loading };
}
