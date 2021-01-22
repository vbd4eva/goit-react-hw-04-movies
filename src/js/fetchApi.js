export default class FetchApi {

    constructor(optionsObj){ 
        this.options = {
            BASE_URL: 'https://api.themoviedb.org/3/',
            // per_page: 12,
            sources: {
                trendMoviesDay: "trending/movie/day",
                searchMovies: "search/movie",
                singleMovie: "movie",
                cast: "credits",
                reviews: "reviews"                
            },
            options: {
                page: 1,
                language:'en-US',
                query:'',
                adult:true
            },
            key: '5109669929d60bcec12dd0fb9f3893cc',
            ...optionsObj
        }
    }

    // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

    async trendMoviesDay() { 
        const { BASE_URL, key, sources, options } = this.options;
        const url = `${BASE_URL}${sources.trendMoviesDay}?api_key=${key}&${options.page}`;

        try {
            const response = await fetch(url);
            return response.json().then(({results}) => results);
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }

    async searchMovies(searchQuery) {
        const { BASE_URL, key, sources, options } = this.options;
        if (searchQuery) options.query = searchQuery;
        const url = `${BASE_URL}${sources.searchMovies}?api_key=${key}&query=${options.query}&language=${options.language}&include_adult=${options.adult}`;

        try {
            const response = await fetch(url);
            return response.json().then(({results}) => results);
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }

    async movieById(id) {
        const { BASE_URL, key, sources } = this.options;
        const url = `${BASE_URL}${sources.singleMovie}/${id}?api_key=${key}`;
        try {
            const response = await fetch(url);
            return response.json();
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }

    async creditsByMovieId(id) {
        const { BASE_URL, key, sources } = this.options;
        const url = `${BASE_URL}${sources.singleMovie}/${id}/${sources.cast}?api_key=${key}`;

        try {
            const response = await fetch(url);
            return response.json().then(({cast}) => cast.slice(0, 9));
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }

    async reviewsByMovieId(id) {
        const { BASE_URL, key, sources } = this.options;
        const url = `${BASE_URL}${sources.singleMovie}/${id}/${sources.reviews}?api_key=${key}`;

        try {
            const response = await fetch(url);
            return response.json().then(({results}) => results.reverse());
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }
}
    
    

