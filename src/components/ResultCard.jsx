import { useDispatch } from "react-redux"
import {addCollection, addedToast} from "../Redux/features/collectionSlice"
const ResultCard = ({item}) => {

const dispatch = useDispatch();
const addTo = (item)=>{
  dispatch(addCollection(item));
  dispatch(addedToast())
}
  return (
    <div className='w-96 h-100 rounded-2xl bg-(--c6)'>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.type === "Photo"?<img className='w-full h-[82%] object-cover rounded-2xl' src={item.thumbnail}></img>:''}
            {item.type === "Video"?<video className='w-full h-[82%] object-cover rounded-2xl'autoPlay loop muted src={item.src}></video>:''}
            {item.type == 'GIF'?  <img className='w-full h-[82%] object-cover rounded-2xl' src={item.thumbnail}/>:''}
        </a>
        <h2 className="bg-(--c10) w-10 text-center rounded text-white relative bottom-78 left-4">{item.type}</h2>
       <div className="p-5 text-white relative  bottom-5 rounded-b-2xl flex justify-between items-center">
        <h1>{item.title}</h1>
        <button
        onClick={()=>{addTo(item)}}
         className=' hover:bg-emerald-400 hover:shadow-[0px_0px_20px_0px_rgba(255,165,0,0.7),0px_0px_40px_0px_rgba(255,0,0,0.5)] duration-300 ease-in-out active:scale-95 bg-emerald-500 text-white rounded px-2 py-1 font-medium cursor-pointer'>Save</button>
       </div>
    </div>
  )
}

export default ResultCard