import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
  const { moviesResult, moviesName } = useSelector((store) => store.gpt);
  if (!moviesName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 z-100">
      <div>
        {moviesName.map((moviesName, index) => (
          <MoviesList key={moviesName} title={moviesName} moviesCardList={moviesResult[index]} />
        ))}
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
