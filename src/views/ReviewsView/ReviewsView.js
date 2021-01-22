import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import ReviewBlock from "../../components/ReviewBlock/ReviewBlock"
import Notification from '../../components/Notification/Notification'

// import s from './ReviewsView.module.css'

import FetchApi from '../../js/fetchApi'
const fetchApi = new FetchApi();

export default function ReviewsView() {

    const [movieReviews, setMovieReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in Reviews component");
            return;
        } 
        fetchApi.reviewsByMovieId(movieId).then(setMovieReviews);

    },[movieId]);

    return (
        <>
            {(movieReviews.length) ? 
                <>
                    <Header title="Reviews" />

                    {movieReviews.map(({ updated_at, author_details, content }, id) =>
                        <ReviewBlock key={id}
                            author={author_details}
                            updated={updated_at}
                            content={content}
                        />
                    )}
                </>
                :
                <Notification message='We don`t have any reviews for this movie.' />
            }
        </>
    )
}
