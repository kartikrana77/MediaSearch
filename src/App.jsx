import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import { ToastContainer } from 'react-toastify';
import Navbar2 from './components/Navbar2';

const App = () => {
  return (
    <div className='flex min-h-screen w-full overflow-hidden bg-(--c5)'>
      <Navbar />
      <Navbar2 />
      <div className='flex-1 sm:ml-10 sm:py-6 sm:px-6 px-3 ml-3 py-6'>
        <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path ='/collections' element={<Collections/>}/>
      </Routes>

      <ToastContainer />
      </div>
    </div>
  )
}

export default App
