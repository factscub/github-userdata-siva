import { useEffect, useState } from 'react';

export const useLanguages = ({ username, repo }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const abortController = new AbortController();
        async function callback(username, repo) {
            if (!username) {
                return;
            }
            setLoading(true);

            try {
                const signal = abortController.signal;

                const data = await fetch(`http://localhost:3000/api/languages?` +
                    new URLSearchParams({
                        username,
                        repo
                    })
                    , { signal });
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

        callback(username, repo);
    }, [username, repo]);
    return { data, error, loading };
}
