import React, { useState } from 'react'
import Profile from '../Profile';
import Repo from '../Repo';
import SearchBar from '../SearchBar/SearchBar';

const UserDetails = () => {
    const [username, setUsername] = useState('');

    return (
        <>
           <SearchBar setUsername={setUsername} />
            <Profile username={username} />
            <Repo username={username} />
        </>
    )
}


export default UserDetails