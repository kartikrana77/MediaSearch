import { useDispatch, useSelector } from "react-redux"
import { setActivetab } from "../Redux/features/searchSlice";

const Tabs = () => {
 const tabs = ["photo","video","gif"];;
 const dispatch = useDispatch();
 const activeTabs = useSelector((state)=>state.search.activetab)
  return (
    <div className="flex gap-15 mt-8">
        {tabs.map((e,idx)=>{
            return (<button key={idx} 
            className={`${(activeTabs ==e?'border-b-green-400':'border-none')}  active:scale-95 rounded first-letter:uppercase transition-transform text-gray-300 text-2xl cursor-pointer border-b`}
            onClick={()=>{dispatch(setActivetab(e))}}>
                {e}
            </button>)
        })}
    </div>
  )
}

export default Tabs