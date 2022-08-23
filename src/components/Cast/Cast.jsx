import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "ServiceAPI";
import './Cast.styled.css'

export const Cast = () => {

    const { id } = useParams();
    const [cast, setCast] = useState([]);
 
    useEffect(() => {

        const fetchCast = async () => {
            try {
                const { data } = await getCastById(id);
                setCast(data.cast)
            } catch (error) {
                console.error(error);
            }
        };

        fetchCast();

    }, [id]);
    
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
            
            {!cast.length && <p>We don't have any information about the cast of this movie.</p>}
        </section>
    );
};