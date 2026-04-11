import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Collections from "./pages/Collections";

const App = () => {
  return (
    <div className='flex min-h-screen bg-(--c5)'>
      <Navbar />
      <div className='flex-1 ml-10 p-6'>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path ='/collections' element={<Collections/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
