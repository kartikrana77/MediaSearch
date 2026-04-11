import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from "../Redux/features/searchSlice"


const Searchbar = () => {
    const dispatch = useDispatch()
    const stopDef =(e)=>{
        e.preventDefault()
        dispatch(setQuery(v))
        setv('')
    }
    const [v, setv] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{stopDef(e)}} className='flex gap-5'>
            <input value={v} onChange={(e)=>{
                setv(e.target.value)
            }} type="text" placeholder="Search GIF's, photo, videos ..." className='bg-(--c7) text-xl px-5 py-2 rounded-2xl w-[95%] outline-0 text-amber-50' />
            <button  className='text-(--c9) hover:text-green-500 active:scale-90 duration-300 ease-in-out'><FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></button>
        </form>
    </div>
  )
}

export default Searchbar