import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/contants";
import type { RootState } from "../utilis/appStore";

const useTrailerVideo = ({ moviesId }: { moviesId: string }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store:RootState) => store.movies.trailerVideo);
  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + moviesId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    console.log("json.results");
    const filterData = json.results.filter((video: { type: string }) => {
      return video.type === "Trailer";
    });
    const trailer = filterData ? filterData[0] : json.results[0];
    console.log(filterData);
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    if (!trailerVideo) {
      getMovieTrailer();
    }
  }, []);
  return <div></div>;
};

export default useTrailerVideo;
