import MovieCard from "./MovieCard";

const MoviesList = ({ title, moviesCardList}: { title: string ,moviesCardList: string}) => {
  // console.log(moviesCardList);
  return (
    <div className="pb-16 ">
      <h1 className="text-4xl">{title}</h1>
      <div className="flex flex-nowrap overflow-x-scroll">
        {moviesCardList?.map((card) => {
          return <MovieCard key={card.id} posterPath={card.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
