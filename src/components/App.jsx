import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Home } from "pages/Home";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import './App.styled.css'

const Movies = lazy(() => import('../pages/Movies').then(module => ({
  ...module,
  default: module.Movies
})));

const MovieDetails = lazy(() => import('../pages/MovieDetails').then(module => ({
  ...module,
  default: module.MovieDetails
})));

const Cast = lazy(() => import('../components/Cast/Cast').then(module => ({
  ...module,
  default: module.Cast
})));

const Reviews = lazy(() => import('../components/Reviews/Reviews').then(module => ({
  ...module,
  default: module.Reviews
})));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>

  );
};
