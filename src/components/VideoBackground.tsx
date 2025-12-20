import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";


const VideoBackground = (moviesId :string) => {
  useTrailerVideo(moviesId);
    const movie_Id = useSelector((store) => store.movies?.trailerVideo)
  return (
    <div className="w-full">
      <iframe className="h-full aspect-video"

        src={"https://www.youtube.com/embed/"+movie_Id + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
