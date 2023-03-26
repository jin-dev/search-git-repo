import React, { Fragment, useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { octokit } from '../utils/octokit';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import { useNavigate, useParams } from 'react-router-dom';

import { FcNext, FcPrevious } from 'react-icons/fc';

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 0.2rem;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    padding: 0.2rem;
    border: 1px solid pink;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
`

function Search() {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>();
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const { q } = useParams<any>();

  const changeNavigation = (input: string) => {
    const path = `/search/${input}`;
    navigate(path);
  };

  const actPagination = ( flag : number) => {

    if (flag === 0 && page >= 2) {
      setPage(page -1);
    }
    if (flag === 1 && page > 0) {
      setPage(page+1);
    }
  }

  const fetchData = useCallback(
    async (input : string) => {
     
        console.log('fetched on Search11', input);
        setLoading(true);

        try {
          const res = await octokit.request('GET /search/repositories?q={user}&per_page=10&page={page}', {
            user: input,
            page: 1,
          });

          setData({
            totalCount: res?.data?.total_count,
            items: res.data?.items,
          });

          // Update the input state with the new input value
         // setInput(newInput);
        } catch (e) {
          console.log(e);
        }

        setLoading(false);
      
    },
    []
  );

  useEffect(() => {
    console.log('fetched ');
    fetchData(q || '1');
  }, [q]);

  return (
    <Fragment>
      <div>Search</div>
      <SearchBox value={q} placeholder="type your input" onSubmit={changeNavigation} />

      {data ? <SearchResult data={data} /> : null}
      <Pagination>
        <Icon onClick={() => actPagination(0)}>
        <FcPrevious/>
        Prev
        </Icon>
        <div>
          {page}
        </div>
        <Icon onClick={() => actPagination(1)}>
        Next
        <FcNext/>
        </Icon>
       
      </Pagination>
    </Fragment>
  );
}

export default Search;