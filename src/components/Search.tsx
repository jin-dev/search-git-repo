import React, { Fragment, useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { octokit } from '../utils/octokit';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import { useNavigate, useParams } from 'react-router-dom';

function Search() {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>();
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();

  const { q } = useParams<any>();

  const changeNavigation = (input: string) => {
    const path = `/search/${input}`;
    navigate(path);
  };

  const fetchData = useCallback(
    async (input : string) => {
     
        console.log('fetched on Search11', input);
        setLoading(true);

        try {
          const res = await octokit.request('GET /search/repositories?q={user}', {
            user: input,
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

      <SearchResult data={data} />
    </Fragment>
  );
}

export default Search;