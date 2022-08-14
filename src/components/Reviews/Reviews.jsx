import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "ServiceAPI";

export const Reviews = () => {

    const { id } = useParams();
    const getReviews = getReviewsById(id);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {

        getReviews
            .then((response) => response.data)
            .then(({ results }) => { setReviews([...results]) })
            .catch(error => { console.log(error) });

    }, [getReviews]);

    return (
        <section>
            <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <h4>Author: {author}</h4>
                        <p>{content}</p>
                    </li>
                ))}</ul>
          
            {!reviews.length && <p>We don't have any reviews for this movie.</p>}
        </section>
    );
};