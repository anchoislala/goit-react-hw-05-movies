import { useState } from 'react';
import { toast } from 'react-toastify';
import './SearchBox.styled.css'

export const SearchBox = ({ onSubmit }) => {

  const [movieTitle, setMovieTitle] = useState('');

  const handleInputChange = event => {
    const searchMovie = event.currentTarget.value;

    setMovieTitle(searchMovie);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieTitle.trim() === '') {
      toast.error('Enter a movie title');
      return;
    };
      
    onSubmit(movieTitle);
    setMovieTitle('');
  };


  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        
        <input
          className="SearchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="movieTitle"
          value={movieTitle}
          onChange={handleInputChange}
        />

        <button type="submit" className='SearchButton'>Search</button>

      </form>
    </div>
  );
};