import { useDispatch, useSelector } from "react-redux";
import { setActivetab } from "../Redux/features/searchSlice";
import { resetSearch } from "../Redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photo", "video", "gif"];
  const dispatch = useDispatch();
  const activeTabs = useSelector((state) => state.search.activetab);
  return (
    <div className="flex gap-15 mt-8 sm:ml-1 ml-10">
      {tabs.map((e, idx) => {
        return (
          <button
            key={idx}
            className={`${activeTabs == e ? "border-b-green-400 text-white" : "border-none text-gray-300"} active:scale-95 rounded first-letter:uppercase transition-transform text-2xl cursor-pointer border-b-2`}
            onClick={() => {
              if (activeTabs === e) return;

              dispatch(resetSearch());
              dispatch(setActivetab(e));
            }}
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
