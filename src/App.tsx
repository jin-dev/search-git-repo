
import Main from 'components/Main'
import Search from 'components/Search';

import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path='/' Component={Main} />
 <Route path='/search/:q' Component={Search} />
 </Routes>
 </BrowserRouter>
  )
}

export default App
