import React, { Fragment} from 'react';
import SearchBox from './SearchBox';

import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

// Styled components for container, title, and icon
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
padding-bottom: .5rem;
`

const GitIcon = styled.span`
  display: flex;
  width: 5rem ;
  height: 5rem ;  
  font-size: 5rem;
  color:white;
  padding-bottom: .5rem;
`

// Define the main component for application
const Main: React.FC = () => {

    // Initialize the useNavigate for client-side routing
    const navigate = useNavigate();

    // Define a function to handle chagnes in the navigation path
    const changeNavigation = (input : string) => {
        const path = `/search/${input}`
        navigate(path);
    } 

    return (
        <Fragment>
           <MainContainer>
              <GitIcon> <FaGithub/></GitIcon>
              <MainTitle>Repo Search (jin-dev)</MainTitle>
              <SearchBox placeholder= 'type git ID (ex. jin-dev)' onSubmit={changeNavigation}/>
            </MainContainer>
        </Fragment>
    )
}
export default Main;

