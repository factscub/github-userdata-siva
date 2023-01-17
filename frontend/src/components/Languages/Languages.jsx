import React from 'react'
import styled from 'styled-components';
import { useLanguages } from '../../services/api/useLanguages';
import Loader from '../Loader';
import Button from '../Button'
const Languages = ({ username, repo }) => {

    const { data, error, loading } = useLanguages({ username, repo });

    if (loading) {
        return <Loader />
    }
    // if (error) {
    //     return <Button>{error}</Button>
    // }
    return (
        <>
            {
                Object.keys(data ? data : {}).length ? (
                    <LanguagesContainer>
                        {
                            Object.keys(data)?.map((language, i) => (<Button key={i} >{language}</Button>))
                        }
                    </LanguagesContainer>
                ) :
                    <></>
            }
        </>
    )
}

const LanguagesContainer = styled.div`
display:flex;
flex-wrap:wrap;
`
export default Languages