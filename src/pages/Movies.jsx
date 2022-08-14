import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchMovieList } from "components/SearchMovieList/SearchMovieList";
import { SearchBox } from "components/SearchBox/SearchBox";
import { getSearchedMovies } from "ServiceAPI";

export const Movies = () => {

  const [searchedMovies, setSearcedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('query') ?? '';

  useEffect(() => {

    if (movieTitle === '') {
      return;
    };

    getSearchedMovies(movieTitle)
      .then((response) => response.data)
      .then(movies => {

        if (!movies.results.length) {
          toast.error('Sorry, there are no movies matching your search query. Please try again.');
          return;
        }

        setSearcedMovies([...movies.results])
      })
      .catch(error => { console.log(error) });

  }, [movieTitle]);
  
  const searchSubmitHandler = movieTitle => {
    setSearchParams({ query: movieTitle })
  };

  return (
    <main>
      <SearchBox onSubmit={searchSubmitHandler} />
      <SearchMovieList movies={searchedMovies} />
      <ToastContainer autoClose={2000} />
    </main>
  );
};