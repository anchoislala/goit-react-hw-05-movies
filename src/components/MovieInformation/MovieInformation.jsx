import { Link } from 'react-router-dom';
import './MovieInformation.styled.css'
   
export const MovieInformation = ({ title, year, rating, overview, genres, poster, backLink }) => {

    return (

        <div>
            <div className="MovieInfo">

                <div className="MovieInfo_left">
                    <img src={`https://image.tmdb.org/t/p/w400${poster}`} alt={title} />
                </div>

                <div className="MovieInfo_right">
                    <h2>{title} ({year.slice(0, 4)})</h2>
                    <p>
                        User score: {rating.toFixed(1)}
                    </p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <ul className='Genres'>
                        {genres.map(({ name, id }) => (
                            <li key={id} className='GenresItem'>{name}</li>
                        ))}</ul>
                </div>
            
            </div>

            <div className="AdditionalInfo">
                <p>Additional information</p>
                <ul>
                    <li>
                        <Link to="cast" state={{ from: backLink }} className='AdditionalInfoLink'>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={{ from: backLink }} className='AdditionalInfoLink'>Reviews</Link>
                    </li>
                </ul>
            </div>
         
        </div>
    );
};