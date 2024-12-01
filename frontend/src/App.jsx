import Login from './pages/Login.tsx'
import Logged from './pages/IndexPage.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SupabaseProvider } from './components/SupabaseContext.tsx'
import './App.css'
import PrivateRoute from './pages/PrivateRoute.tsx'

function App() {

  return (
    <div>
      <SupabaseProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/success" element={<Logged />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </SupabaseProvider>
    </div>
  )
}

export default App
