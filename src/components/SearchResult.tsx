import React from 'react';
import styled from 'styled-components';

// Define the interface for search result data
interface SearchResultProps {
  data: {
    items: {
      id: number;
      name: string;
      html_url: string; 
    }[];
  };
}
// Define the styled component for the search result
const Result = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;

const List = styled.div``;

const Info = styled.span`
  font-size: 0.8rem;
`;

const Repo = styled.div`
  padding: 1rem 0 1rem 0;
  border-bottom: 1px solid black;
  font-size: 1rem;
`;

// Render the search results based on the data provided
const SearchResult: React.FC<SearchResultProps> = ({ data }) => {
  
  return (
    <Result>
      <List>
        {(data?.items || []).map(( {id, name, html_url}) => {
          return <Repo key={id}>[ {name} ] <br></br> <Info>{html_url}</Info></Repo>;
        })}
      </List>
    </Result>
  );
};

export default SearchResult;
