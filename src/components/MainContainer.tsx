import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTItle from "./VideoTItle";

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(movies ===null) return;

    const mainMovies = movies[0];
    console.log(mainMovies);
  return (
    <div>
      <VideoTItle />
      <VideoBackground/>
    </div>
  );
};

export default MainContainer;
