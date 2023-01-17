import React from 'react'
import { useProfile } from '../../services/api/useProfile';
import styled from 'styled-components';
import { firstLetterToCapital } from '../../utils/FirstLetterToCapital';
import Loader from '../Loader';
import Button from '../Button';
const Profile = ({ username, setTotalPages, setDataPresent }) => {
    const { data, loading, error } = useProfile(username, setTotalPages, setDataPresent);
    if (loading) {
        return <Loader />
    }
    if (error[0]) {
        return <Button >{error[1]}</Button>
    }
    return (
        <>
            {
                (data && !error[0]) && (
                    <div className='profileContainer' >  <AvatarAndInfo className='avatarandinfo'>
                        <AvatarContainer className='avatarContainer'>
                            <img src={data?.avatar_url} alt='avatar' />
                        </AvatarContainer>
                        <InfoContainer className='infoContainer'>
                            <h2 className='username'>{firstLetterToCapital(data?.login)}</h2>
                            <p className='bio'>Bio: {data?.bio || "N/A"}</p>
                            <p className='location'>Location: {data?.location || 'N/A'}</p>
                            <p className='twitter'>Twitter:<a href={data?.twitter_username} target='_blank'> {data?.twitter_username || 'N/A'}</a></p>
                        </InfoContainer>
                    </AvatarAndInfo>
                        <Anchor className='link'>	&#128279;<a href={data?.html_url} target='_blank' >{data?.html_url}</a></Anchor>
                    </div >
                )


            }
        </>
    )
}


const AvatarAndInfo = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
padding-left:30px;


`

const AvatarContainer = styled.div`

width:100px;
height:100px;
border-radius:50%;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;

img{
    width:95%;
    height:95%;
    border-radius:50%;
}
margin-right:50px;

`

const InfoContainer = styled.div`

p{
    margin:10px 0;
}
`

const Anchor = styled.p`
padding:20px 0;
`
export default Profile;