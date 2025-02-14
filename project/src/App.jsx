import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Navigation/Nav'
import About from './Containers/About/About'
import Blog from './Containers/Blog/Blog'
import Contacts from './Containers/Contacts/Contacts'
import Main from './Containers/Main/Main'
import Portfolio from './Containers/Portfolio/Portfolio'
import Service from './Containers/Services/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route path="/main" element={<Main/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
      
    
  )
}

export default App
