import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTItle from "./VideoTItle";

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies.nowPlayingMovies)
    console.log(movies);
    if(movies == null){ return <div>Loading...</div>};

    const mainMovies = movies[0];
    // console.log("here");
    console.log(mainMovies);
    const {original_title , overview, id} = mainMovies;

  return (
    <div >
      <VideoTItle title={original_title} overview={overview} />
      <VideoBackground moviesId= {id}/>
    </div>
  );
};

export default MainContainer;
