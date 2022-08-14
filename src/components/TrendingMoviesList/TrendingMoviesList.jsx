import { Link, useLocation } from "react-router-dom";
import './TrendingMoviesList.styled.css'

export const TrendingMoviesList = ({ movies }) => {
  
  const location = useLocation();

  return (
    <ul className="TrendingList">
      {movies.map((movie) => (
        <li key={movie.id} className="TrendingListItem">
          <Link to={`movies/${movie.id}`} state={{ from: location }} className="TrendingListLink">
            <h3>{movie.original_title ? movie.original_title : movie.name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};