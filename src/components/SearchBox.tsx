import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'


// Styled Components for container and input elements
const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding:1rem;
    background-color: #1c2331;

`;

const SearchInput = styled.div`
display: flex;
border: 1px solid burlywood;
border-radius: 10px;
padding: 0.5rem;
`

const Input = styled.input`
    border: 0;
    font-size: 1.2rem;
    color:white;
    background-color: transparent;
    text-overflow: ellipsis;
    max-width: 55rem;

`
// Define the interface for the search box component
interface SearchBoxProps {
    value? : string;
    placeholder?: string;
    onSubmit: (input:string) => void;
}

function SearchBox({ value = '', placeholder='type Git ID' , onSubmit} : SearchBoxProps) {

const [input, setInput] = useState(value);
const navigate = useNavigate();

    // Define a function to handle changes to the search input
    const handleInput = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target?.value);
    }

    // Define a function to handle changes in the navigation path
    const routeChange = useCallback((input: string) => {
    const path = `/search/${input}`;
       navigate(path);
    },[navigate]);

    // Define a function to handle key presses in the search input
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' ? input ? handleSubmit() : null : null;
    }

    // Define a callback function to handle form submission
    const handleSubmit = useCallback(() => {
        routeChange(input);
        onSubmit(input);
    }, [input, onSubmit, routeChange])

    // Render search box component
    return (
        <Container id={'searchBox'}>
            <SearchInput>
                <Input 
                type='text'
                value={input}
                placeholder={placeholder}
                onChange={ handleInput}
                onKeyPress={handleKeyPress}
                />
            </SearchInput>

        </Container>
    )
}

export default SearchBox;