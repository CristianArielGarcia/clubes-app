import Login from './pages/Login.tsx'
import Logged from './pages/Logged.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

/**
 * The root component of the app.
 * It renders a BrowserRouter and its child Routes.
 * The Routes have two paths: "/" for the Login page and "/" for the Logged page.
 */
function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/success" element={<Logged />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
