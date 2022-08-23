import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "ServiceAPI";

export const Reviews = () => {

    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {

        const fetchReviews = async () => {
            try {
                const { data } = await getReviewsById(id);
                setReviews(data.results)
            } catch (error) {
                console.error(error);
            }
        };

        fetchReviews();

    }, [id]);

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