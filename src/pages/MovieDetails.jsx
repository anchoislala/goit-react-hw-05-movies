import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { getMovieById } from "ServiceAPI";
import { BackLink } from "components/BackLink/BackLink";
import { MovieInformation } from "components/MovieInformation/MovieInformation";


export const MovieDetails = () => {
  const { id } = useParams();
  const movie = getMovieById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [rating, setRating] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setposter] = useState('');

  useEffect(() => {

    movie
      .then((response) => response.data)
      .then(movie => {
        setTitle(movie.original_title)
        setReleaseYear(movie.release_date)
        setRating(movie.vote_average)
        setOverview(movie.overview)
        setGenres([...movie.genres])
        setposter(movie.poster_path)
      })
      .catch(error => { console.log(error) });

  }, [movie]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>

      <MovieInformation
        title={title}
        id={id}
        year={releaseYear}
        rating={rating}
        overview={overview}
        genres={genres}
        poster={poster}
      />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};