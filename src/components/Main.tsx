import { Fragment} from 'react';
import SearchBox from './SearchBox';

import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c2331;
`

const MainTitle = styled.div`
font-size: 1.4rem;
font-weight: 700;
color: whitesmoke;
padding-bottom: 1rem;
`

const GitIcon = styled.span`
  width: 1em;
  height: 1em;
  color:white;
`

function Main() {

    const navigate = useNavigate();

    const changeNavigation = (input : string) => {
        const path = `/search/${input}`
        navigate(path);
    } 

    return (
        <Fragment>
           <MainContainer>
           <GitIcon> <FaGithub/></GitIcon>
            <MainTitle>Repo Search (jin-dev)</MainTitle>
           
            <SearchBox placeholder= 'type your input' onSubmit={changeNavigation}/>
         
            </MainContainer>
        </Fragment>
    )
}
export default Main;

