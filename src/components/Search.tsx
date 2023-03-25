import React, { Fragment, useState, useCallback } from 'react';
import styled, {css } from 'styled-components';
import { octokit } from '../utils/octokit';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';
import { useNavigate, useParams } from 'react-router-dom'

function Search() {

    const [lading, setLoading] = useState(false);

    const navigate = useNavigate();

    const changeNavigation = (input : string) => {
        const path = `/search/${input}`
        navigate(path);
    } 

    const fetchData = useCallback(({input} : { input: string}): void  => {

        setLoading(true);

        async function onLoad() {

            // ?q=jin-dev&per_page=30&page=1
            
            
                  await octokit.request('GET /search/repositories?q={user}', {
                    user: 'jin-dev',
                  }).then((res) => console.log(res))
                  .catch((e) => console.log(e));
                } 
                onLoad();

                setLoading(false);
    },[])

    return (
        <Fragment>
            <div>Search</div>
            <SearchBox placeholder= 'type your input' onSubmit={changeNavigation}/>

            <SearchResult />
        </Fragment>
    )
}
export default Search;

