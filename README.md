# Git Repo search (jin-dev)

#### A web application(react + typescript) that performs repository searches using GitHub API

## Table of contents

- [Demo](#demo)
- [Screen Shot](#screen-shot)
- [Tech Stack](#tech-stack)
- [How to install](#installation)
- [Components](#components)
- [utils](#utils)

## Demo

- Netlify : https://jin-dev-git-repo-search.netlify.app/

## Screen Shot

<table>
    <tr>
        <tr>
        <th>PC</th>
        </tr>
    </tr>
    <td> <img src="public/pcMain.png" alt="1"></td>
    <td> <img src="public/pcResult.png" alt="2"></td>
<tr>
    <tr>
    <th>Mobile</th>
    <tr>
    </tr>
      <td> <img src="public/mobileMain.png" alt="3"></td>
    <td> <img src="public/mobileResult.png" alt="4"></td>
</table>

## Tech-Stack

- react (18.2)
- typescript
- styled-components
- octokit

## Installation

to run my application, please follow steps below

```
1. yarn
2. yarn start
3. open a web browser and type 'http://localhost:3000/'
```

## Components

- Main : main page
- Search : consist of search layout with pagination
- SearchBox : contains search input text box
- SearchResult : prints search result

## utils

- loading : personal loading component
- octokit : it allows to use github API
- throttle : it allows to use throttling.
