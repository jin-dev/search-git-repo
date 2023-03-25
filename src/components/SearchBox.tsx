import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div``;

const SearchInput = styled.div`
display: flex;
border: 1px solid burlywood;
border-radius: 10px;
padding: 0.5rem;
`

const Input = styled.input`
    border: 0;
    font-size: 1.2rem;
    background-color: transparent;
    text-overflow: ellipsis;
    max-width: 50rem;
    color: blanchedalmond;
`

function SearchBox({ value = '', placehoder , onSubmit} : any) {

const [input, setInput] = useState(value);

    const handleInput = (event: { target: { value: any; }; }) => {
        setInput(event.target?.value);
    }

    const routeChange = (input: string) => {
       // let path = `/search/${input}`;
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
                value={input || ''}
                placeholder={placehoder}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                />
            </SearchInput>

        </Container>
    )
}

export default SearchBox;