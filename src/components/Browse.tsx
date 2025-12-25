import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import type { RootState } from "../utilis/appStore";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const gptSearch = useSelector((store:RootState) => store.gpt.gptSearch);

  return (
    <div className="">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
