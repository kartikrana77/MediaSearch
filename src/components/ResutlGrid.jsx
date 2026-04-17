import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto, fetchVideos, fetchGif } from "../Api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResult,
} from "../Redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResutlGrid = () => {
  const dispatch = useDispatch();
  const { query, activetab, loading, error, result } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activetab == "photo") {
          let res = await fetchPhoto(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "Photo",
            title: item.alt_description
              ? item.alt_description.slice(0, 25)
              : "Untitled",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        else if (activetab == "video") {
          let res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "Video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        else if (activetab === "gif") {
          let res = await fetchGif(query);
          data = res.data.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title,
            thumbnail: item.images.downsized.url,
            src: item.images.downsized.url,
            url: item.url,
          }));
        }

        console.log(data);
        dispatch(setResult(data));
      } catch {
        dispatch(setError());
      }
    };
    getData();
  }, [query, activetab, dispatch]);

  if (error) return <h1>{error}</h1>;
  if (loading)
    return (
      <h1 className="text-xl font-semibold relative top-[30vh] left-[45%] text-white">
        Loading...
      </h1>
    );
  return (
    <div className="flex flex-wrap gap-5 p-10">
      {result.map((item, idx) => {
        return <ResultCard key={idx} item={item} />;
      })}
    </div>
  );
};

export default ResutlGrid;
