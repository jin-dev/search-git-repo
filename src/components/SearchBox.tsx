import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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

function SearchBox({ value = '', placehoder='type Git ID' , onSubmit} : any) {

const [input, setInput] = useState(value);
const navigate = useNavigate();

    const handleInput = (event: { target: { value: any; }; }) => {

        setInput(event.target?.value);
    }

    const routeChange = (input: string) => {
    const path = `/search/${input}`;
       navigate(path);
    }

    const handleKeyPress = (event: any) => {
        event.key === 'Enter' ? input ? handleSubmit() : null : null;
    }

    const handleSubmit = () => {
        routeChange(input);
        onSubmit(input);
    }

    return (
        <Container id={'searchBox'}>
            <SearchInput>
                <Input 
                type='text'
                value={input}
                placeholder={placehoder}
                onChange={ handleInput}
                onKeyPress={handleKeyPress}
                />
            </SearchInput>

        </Container>
    )
}

export default SearchBox;