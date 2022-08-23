import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { getMovieById } from "ServiceAPI";
import { BackLink } from "components/BackLink/BackLink";
import { MovieInformation } from "components/MovieInformation/MovieInformation";


export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [rating, setRating] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setposter] = useState('');

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const { data } = await getMovieById(id);
        setTitle(data.original_title)
        setReleaseYear(data.release_date)
        setRating(data.vote_average)
        setOverview(data.overview)
        setGenres([...data.genres])
        setposter(data.poster_path)
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

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
        backLink={backLinkHref}
      />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};