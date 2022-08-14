import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "ServiceAPI";
import './Cast.styled.css'

export const Cast = () => {

    const { id } = useParams();
    const getCast = getCastById(id);
    const [cast, setCast] = useState([]);
 
    useEffect(() => {

        getCast
            .then((response) => response.data)
            .then(({ cast }) => { setCast([...cast]) })
            .catch(error => { console.log(error) });

    }, [cast]);
    
    return (
        <section>
            <ul className="CastList">
                {cast.map(({ cast_id, name, character, profile_path }) => (
                    <li key={cast_id} className="CastItem">
                        <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                        <div className="CastItem_description">
                            <p>{name}</p>
                            <p> Character: {character}</p>
                        </div>
                    </li>
                ))}</ul>
        </section>
    );
};