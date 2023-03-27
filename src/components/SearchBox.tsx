import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

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

interface SearchBoxProps {
    value? : string;
    placeholder?: string;
    onSubmit: (input:string) => void;
}

function SearchBox({ value = '', placeholder='type Git ID' , onSubmit} : SearchBoxProps) {

const [input, setInput] = useState(value);
const navigate = useNavigate();

    const handleInput = (event:  React.ChangeEvent<HTMLInputElement>) => {

        setInput(event.target?.value);
    }

    const routeChange = useCallback((input: string) => {
    const path = `/search/${input}`;
       navigate(path);
    },[navigate]);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.key === 'Enter' ? input ? handleSubmit() : null : null;
    }

    const handleSubmit = useCallback(() => {
        routeChange(input);
        onSubmit(input);
    }, [input, onSubmit, routeChange])

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