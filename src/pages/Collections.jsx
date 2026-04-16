import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection, clearCollection, removeToast} from '../Redux/features/collectionSlice'


const Collections = () => {
  const dispatch = useDispatch()
  const removeTo = (item) =>{
    dispatch(removeCollection(item))
    dispatch(removeToast())
  }
  const clearTo = ()=>{
    dispatch(clearCollection())
  }
  const data = useSelector((state)=>state.collect.items)

  return (
    <div className="flex flex-col gap-5 items-center">
   <div className="flex flex-wrap gap-7 justify-center pt-10">
     {data.map((item, idx)=>(
       <div key={idx} className='w-96 h-96 rounded relative'>
    <a href={item.url} target="_blank">
            {item.type === "Photo"?<img className='w-full h-[82%] object-cover rounded-2xl' src={item.thumbnail}></img>:''}
            {item.type === "Video"?<video className='w-full h-[82%] object-cover rounded-2xl'autoPlay loop muted src={item.src}></video>:''}
            {item.type == 'GIF'?  <img className='w-full h-[82%] object-cover rounded-2xl' src={item.thumbnail}/>:''}
        </a>
       <div className=' flex justify-between w-full items-center px-3 py-2 absolute bottom-0 text-white'>
         <h1 id='bottom' className='text-lg font-semibold capitalize'>{item.title}</h1>
        <button
         onClick={()=>{removeTo(item.id)}}
          className='hover:bg-red-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.7),0px_0px_40px_0px_rgba(255,0,0,0.5)] duration-300 ease-in-out active:scale-95 bg-red-500 text-white rounded px-2 py-1 font-medium cursor-pointer'>Remove</button>
       </div>
    </div>
    ))}
   </div>
   {data.length > 0 && (
        <button
          onClick={clearTo}
          className="hover:bg-red-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.7),0px_0px_40px_0px_rgba(255,0,0,0.5)] duration-300 ease-in-out w-[20%] active:scale-95 bg-red-500 text-white rounded px-2 py-2 font-medium cursor-pointer"
        >
          Clear All
        </button>
      )}
   </div>
  )
}

export default Collections