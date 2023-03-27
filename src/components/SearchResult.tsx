import React from 'react';
import styled from 'styled-components';

interface SearchResultProps {
  data: {
    items: {
      id: number;
      name: string;
    }[];
  };
}

const Result = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;

const List = styled.div``;

const Repo = styled.div`
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid black;
`;

const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
 
  return (
    <Result>
      <List>
        {(data?.items || []).map(( {id, name}) => {
          return <Repo key={id}>{name}</Repo>;
        })}
      </List>
    </Result>
  );
};

export default SearchResult;
