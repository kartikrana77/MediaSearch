import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto, fetchVideos, fetchGif } from "../Api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResult,
  setPage,
  appendResult,
  setHasMore
} from "../Redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResutlGrid = () => {
  const dispatch = useDispatch();
  const { query, activetab, loading, error, result,page,hasMore } = useSelector(
    (state) => state.search,
  );

  useEffect(() => {
    if (!query||!hasMore) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activetab === "photo") {
          let res = await fetchPhoto(query,page);
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
           if (res.results.length === 0) {
          // no more data
          dispatch(setHasMore(false));
        }
        }
        else if (activetab == "video") {
          let res = await fetchVideos(query,page);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "Video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
           if (res.videos.length === 0) {
          dispatch(setHasMore(false));
        }
        }
        else if (activetab === "gif") {
          let res = await fetchGif(query,page);
          data = res.data.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title,
            thumbnail: item.images.fixed_width.url,
            src: item.images.original.url,
            url: item.url,
          }));
          if (res.data.length === 0) {
          dispatch(setHasMore(false));
        }
        }
        dispatch(appendResult(data));
      } catch {
        dispatch(setError());
      }
    };
    getData();
  }, [query, activetab,page,hasMore, dispatch]);

  useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !loading && hasMore
    ) {
      dispatch(setPage(page + 1));
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [page, loading,hasMore]);

  if (error) return <h1>{error}</h1>;
  return (
    <div className="flex flex-wrap gap-5 sm:pt-10 pt-5">
      {result.map((item, idx) => {
        return <ResultCard key={idx} item={item} />;
      })}
      {loading && (<h1 className="text-xl font-semibold relative top-[30vh] left-[45%] text-white">
        Loading...
      </h1>)}
    </div>
  );
};

export default ResutlGrid;
