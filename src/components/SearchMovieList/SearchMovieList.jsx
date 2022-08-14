import { Link, useLocation } from "react-router-dom";
import './SearchMovieList.styled.css'

export const SearchMovieList = ({ movies }) => {

  const location = useLocation();

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }} className='SearchMovieLink'>
            <h3>{movie.original_title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
