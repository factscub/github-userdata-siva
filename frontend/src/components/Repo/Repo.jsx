import React from 'react';
import styled from 'styled-components';
import { useRepos } from '../../services/api/useRepos';
import { firstLetterToCapital } from '../../utils/FirstLetterToCapital';
import Languages from '../Languages/Languages';
import Loader from '../Loader';

const Repo = ({ username,pageNumber }) => {

    const { data, error, loading } = useRepos({ username,pageNumber });
    // console.log(data)

    if (loading) {
        return <Loader />
    }

    // if (error) {
    //     <Button >{error}</Button>
    // }
    return (
        <>
            {
                data?.length ? (<Repos>
                    {
                        data.map((repo, i) => (
                            <RepoContainer key={i}>

                                <Heading>{firstLetterToCapital(repo?.name)}</Heading>
                                {
                                    repo?.description && <Description>{firstLetterToCapital(repo?.description)}</Description>

                                }
                                <Languages username={repo?.owner?.login} repo={repo?.name} />
                            </RepoContainer>
                        ))
                    }
                </Repos>) :
                    <></>
            }
        </>
    )
}

const Repos = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
min-height:100vh;
`
const RepoContainer = styled.div`

padding:10px;
width:45%;
height:auto;
margin:15px 0;
border:2px solid black;
min-height:100px;

`

const Heading = styled.h3`
color:#FF33E3;

`
const Description = styled.p`
padding:10px 0;
`
export default Repo;