import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Main from './components/Main'
import Search from './components/Search';

import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import './App.css'

function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path='/' Component={Main} />
 <Route path='/123' Component={Search} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
