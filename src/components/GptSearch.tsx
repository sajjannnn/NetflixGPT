import { BG_URL } from "../utilis/contants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (<>
      <img className="fixed h-full w-full -z-10 object-cover" src={BG_URL} alt="" />
    <div className="">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  </>

  );
};

export default GptSearch;
