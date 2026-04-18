import axios from "axios"

export const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
export const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
export const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export async function fetchPhoto(query,page =1,per_page =30) {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return response.data
}

export async function fetchVideos(query,page = 1,per_page=50) {
    const response = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page,page},
        headers:{Authorization:PEXELS_KEY}
    });
    return response.data
}

export async function fetchGif(query, page = 1) {
  const limit = 30;

  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: limit,
        offset: (page - 1) * limit,
      },
    }
  );

  return response.data;
}