

const MovieCard = ({posterPath} : {posterPath : string}) => {
    if(!posterPath) return null;
  return (
    <div className="w-32 md:w-56 mr-2 md:mr-6 flex-shrink-0">
        <img className="" src={"https://image.tmdb.org/t/p/w500/" + posterPath} alt="movieCard" />
    </div>
  )
}

export default MovieCard
