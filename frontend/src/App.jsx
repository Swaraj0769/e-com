import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Category from './components/Category'
import SubCategory from './components/SubCategory'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Category />
        <SubCategory />
      </div>
    </div>
  )
}

export default App
