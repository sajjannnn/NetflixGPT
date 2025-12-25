import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/contants";
import type { RootState } from "../utilis/appStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store:RootState) => store.movies.nowPlayingMovies);

  const nowPlayingMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovies) nowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
