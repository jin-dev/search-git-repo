
import Main from 'components/Main'
import Search from 'components/Search';

import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
 <Route path='/' Component={Main} />
 <Route path='/search/:q' Component={Search} />
 <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
 </Routes>
 </BrowserRouter>
  )
}

export default App
