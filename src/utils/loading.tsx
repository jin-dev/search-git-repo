import React from 'react'
import styled, { keyframes } from 'styled-components'

// Define keyframe animation for spinner
const Spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Define the styled components for spinner
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SpinnerIcon = styled.div`
    border-radius: 50%;
    border: 5px solid whitesmoke;
    border-top: 5px solid black;
    width: 5rem;
    height: 5rem;
    animation: ${Spinner} 1s linear infinite;
`;

// Define the loading component
const Loading = () => {
  return (
   <SpinnerContainer>
    <SpinnerIcon />
   </SpinnerContainer>
  )
}

export default Loading