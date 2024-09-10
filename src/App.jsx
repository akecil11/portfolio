import './App.css'
import Home from './pages/Home'
import DetailPortfolio from './pages/DetailPortfolio'
import PageNotFound from './pages/PageNotFound'
import Experience from './pages/Experience'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App