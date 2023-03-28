
import Main from 'components/Main'
import Search from 'components/Search';

import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';


// Define the root component of the app
    
/** Wrap this application in a BrowserRouter to enable client-side routing
    * 1. Define the route for main page
    * 2. Define the route for search page with a query parameter
    *  3. define a catch all route that redirects to the main 
    */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/search/:q' Component={Search} />
        <Route path="*" element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
