import {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'
  
  

//   async function fetchMovies(url) { 
//         // return fetch(url)
//         //     .then(response => response.json())
//         //     .then(({hits}) => { 
//         //         this.options.page += 1;
//         //         return hits;
//         //     })
//         //     .catch(console.log);
//         try {
//             const response = await fetch(url);
//             // this.options.page += 1;
//             return response.json()
//                 .then(({results}) => results);
//         }
//         catch (error) {
//             console.log("Ошибка КЕЧ", error);
//         }
//     }

  
const fetchApi = new FetchApi();


function Trendings(props) {

    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        fetchTrendsMovies();
    },[]);

    return (
        <div>
            <h2>Trendings.js</h2>
            <MoviesList list={trendMovies} />
        </div>
    )

    async function fetchTrendsMovies() {
        const weekTrendingMovies = await fetchApi.trendMoviesDay().then(movies => movies);

        setTrendMovies(movies=>[...movies, ...weekTrendingMovies]);
    }
}

// Trendings.propTypes = {

// }

export default Trendings



// 

                        // <li key={id} >
                        //     <h3>{title}</h3>
                        //     <i>{overview}</i>
                        //     <span><b>votes:</b> {vote_average}</span>
                        //     <img alt={title} src={"https://image.tmdb.org/t/p/original/"+poster_path} />
                        // </li>  