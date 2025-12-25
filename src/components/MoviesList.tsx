import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  poster_path: string;
}

const MoviesList = ({ title, moviesCardList}: { title: string, moviesCardList: Movie[] | null}) => {
  // console.log(moviesCardList);
  if (!moviesCardList) return null;
  return (
    <div className="pb-16 ">
      <h1 className="text-xl md:text-4xl">{title}</h1>
      <div className="flex flex-nowrap overflow-x-scroll">
        {moviesCardList.map((card: Movie) => {
          return <MovieCard key={card.id} posterPath={card.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
