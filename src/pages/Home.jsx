import { useState, useEffect } from "react";
import { TrendingMoviesList } from "components/TrendingMoviesList/TrendingMoviesList";
import { getTrendingMovies } from "ServiceAPI";

export const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
     
    getTrendingMovies()
      .then((response) => response.data)
      .then(movies => { setTrendingMovies([...movies.results]) })
      .catch(error => { console.log(error) });

  }, [trendingMovies]);
  
  return (
    <main>
      <h1>Trending movies today</h1>
      <TrendingMoviesList movies={trendingMovies} />
    </main>
  );
};