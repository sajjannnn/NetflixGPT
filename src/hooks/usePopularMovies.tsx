import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/contants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const nowPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    nowPopularMovies();
  }, []);
};

export default usePopularMovies;
