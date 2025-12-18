import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/contants";

const VideoBackground = ({ moviesId }: { moviesId: string }) => {
  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + moviesId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
  return <div>VideoBackground</div>;
};

export default VideoBackground;
