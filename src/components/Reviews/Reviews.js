import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import ReviewBlock from "./ReviewBlock/ReviewBlock";

import s from './Reviews.module.css'

import FetchApi from '../../js/fetchApi'
const fetchApi = new FetchApi();

export default function Reviews() {

    const [movieReviews, setMovieReviews] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in Reviews component");
            return;
        } 
        fetchApi.reviewsByMovieId(movieId).then(setMovieReviews);

    },[movieId]);

    return (
        <div>
            <h1>Reviews</h1>
            {movieReviews &&
                movieReviews.map(({ updated_at, author_details, content }, id) =>
                    <ReviewBlock key={id}
                        author={author_details}
                        updated={updated_at}
                        content={content}
                    />
                )
            }
        </div>
    )
}
