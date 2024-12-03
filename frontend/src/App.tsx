import Login from './pages/Login.tsx'
import IndexPage from './pages/IndexPage.tsx'
import DeportesPage from './pages/DeportesPage.tsx'
import CategoriasPage from './pages/CategoriasPage.tsx'
import UsuariosPage from './pages/UsuariosPage.tsx'
import TipoItemPage from './pages/TipoItemPage.tsx'
import SociosPage from './pages/SociosPage.tsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SupabaseProvider } from './components/SupabaseContext.tsx'
import './App.css'
import React from 'react'
import PrivateRoute from './pages/PrivateRoute.tsx'

function App() {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", minWidth: "50vw" }}>
      <SupabaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/socios" element={<SociosPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/success" element={<IndexPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/deportes" element={<DeportesPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/categorias" element={<CategoriasPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/usuarios" element={<UsuariosPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/tipoitem" element={<TipoItemPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SupabaseProvider>
    </div>
  )
}

export default App
