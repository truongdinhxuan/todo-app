
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Layout from './shared/layouts/Layout'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* home = {children} */}
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/about' element={<Layout><About /></Layout>} />
        <Route path='/contact' element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
