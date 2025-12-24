import { useDispatch, useSelector } from "react-redux";
import lang from "../utilis/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utilis/contants";
import { addGptMoviesResult } from "../utilis/gptSlice";
import groq from "../utilis/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const gptQuery =
    "Act as a movie reccomendation system and suggest some movies for the query" +
    searchText?.current?.value +
    ". only give me 5 movies name ,,separated by commas like the example resut ahead> Examole result : Gadar, Sholay, Don, Koi mil gya, Golmaal ";

  const getGroqChatCompletion = () => {
    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "openai/gpt-oss-20b",
    });
  };

  const handleGptSearchCLick = async () => {
    const chatCompletion = await getGroqChatCompletion();
    //  console.log(chatCompletion.choices[0]?.message?.content || "");
    const gptMovies = chatCompletion.choices[0]?.message?.content?.split(",");

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMoviesResult({ moviesName : gptMovies, moviesResult : tmdbResults}));
    
    console.log(tmdbResults);
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();

    return json.results;
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12  p-4 sm:p-6" onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="p-1 sm:p-4 sm:m-4 col-span-9 bg-gray-600 text-white" placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText} />
        <button className="col-span-3  sm:m-4 py-2 px-4 bg-red-700 text-white sm:rounded-lg" onClick={handleGptSearchCLick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
