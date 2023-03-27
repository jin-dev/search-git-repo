import React, { Fragment, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { octokit } from 'utils/octokit';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import { useNavigate, useParams } from 'react-router-dom';

import { FcNext, FcPrevious } from 'react-icons/fc';
import { throttle } from 'utils/throttle';
import Loading from 'utils/loading';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

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
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
`

function Search() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState< { totalCount: number; items: any[]} | null>(null);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const { q } = useParams< { q: string}>();

  const changeNavigation = (input: string) => {
    const path = `/search/${input}`;
    navigate(path);
  };

  const actPagination = ( flag : 0 | 1) => {

    if (flag === 0 && page >= 2) {
      setPage(page -1);
    }
    if (flag === 1 && page > 0) {
      setPage(page+1);
    }
  }
  const fetchDataThrottled = throttle(async (input: string, page: number) => {
    setIsLoading(true);
  
    try {
      const res = await octokit.request(
        'GET /search/repositories?q={user}&per_page={perPage}&page={page}',
        {
          user: input,
          perPage: 15,
          page: page || 1,
        
        }
      );
  
      setData({
        totalCount: res?.data?.total_count,
        items: res.data?.items,
      });
    } catch (e) {
      console.log(e);
    }
  
    setIsLoading(false);
  }, 500) as (input: string, page: number) => Promise<void>;
  

  const fetchData = useCallback(
    async (input: string, page: number) => {
      fetchDataThrottled(input, page);
    },
    []
  );

  useEffect(() => {
    fetchData(q || '' , page);
  }, [q, page]);

  return (
    <Fragment>
      <SearchContainer>
       
      <SearchBox value={q} placeholder="type your input" onSubmit={changeNavigation} />
      {isLoading ?  <Loading/> : data ? <SearchResult data={data} /> : null}     
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
      </SearchContainer>
    </Fragment>
  );
}

export default Search;