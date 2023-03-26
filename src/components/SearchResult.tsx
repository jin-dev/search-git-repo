import React from 'react';
import styled from 'styled-components';

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

const SearchResult = ({ data }: { data: any }) => {
  console.log('data in Result : ', data);
  return (
    <Result>
      <List>
        {(data?.items || []).map((row: any) => {
          const { id, name } = row;

          return <Repo key={id}>{name}</Repo>;
        })}
      </List>
    </Result>
  );
};

export default SearchResult;
