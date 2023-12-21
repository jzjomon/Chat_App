import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Auth } from './pages/pages.js'
import { Authorization, SignOutOrHome,  } from './constants/Authorization.jsx'
import OpenChat from './components/OpenChat.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<SignOutOrHome />}>
            <Route path='/' element={<Auth />} />
          </Route>
          <Route element={<Authorization />} >
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
