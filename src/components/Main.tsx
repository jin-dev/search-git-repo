import React, { Fragment, useEffect} from 'react';
import SearchBox from './SearchBox';
import { octokit } from '../utils/octokit';
import styled, {css } from 'styled-components';

import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate();

    const changeNavigation = (input : string) => {
        const path = `/search/${input}`
        navigate(path);
    } 
/*
  useEffect(() => {

    async function onLoad() {

// ?q=jin-dev&per_page=30&page=1
        console.log('fetched on Main');

      await octokit.request('GET /search/repositories?q={user}', {
        user: 'jin-dev',
      }).then((res) => console.log(res))
      .catch((e) => console.log(e));
    } 
    onLoad();

},[]) */



    return (
        <Fragment>
            <div>ahah Main</div>
            <SearchBox placeholder= 'type your input' onSubmit={changeNavigation}/>
        </Fragment>
    )
}
export default Main;

