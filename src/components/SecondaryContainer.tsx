import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import type { RootState } from "../utilis/appStore";

const SecondaryContainer = () => {
  const moviesList = useSelector((store:RootState) => store.movies);

  return (
    <div>
      <div className="pl-6 md:pl-16 bg-black">
        <div className="relative text-white  mt-0 xl:-mt-28 2xl:-mt-52 z-100">
          <MoviesList title={"Now Playing Movies"} moviesCardList={moviesList.nowPlayingMovies} />
          <MoviesList title={"Popular Movies"} moviesCardList={moviesList.popularMovies} />
          <MoviesList title={"Reccomended"} moviesCardList={moviesList.nowPlayingMovies} />
          <MoviesList title={"Top Rated Movies"} moviesCardList={moviesList.popularMovies} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
