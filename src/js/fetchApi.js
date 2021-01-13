export default class FetchApi {

    constructor(optionsObj){ 
        this.options = {
            BASE_URL: 'https://api.themoviedb.org/3/',
            // per_page: 12,
            sources: {
                trendMoviesDay: "trending/movie/day",
                searchMovies: "search/movie",
                singleMovie: "movie"
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

    // https://api.themoviedb.org/3/search/movie?api_key=5109669929d60bcec12dd0fb9f3893cc&language=en-US&query=batman&page=1&include_adult=false

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

    // getUrl(source) {
    //     const { BASE_URL, key } = this.options;        
    //     const url = BASE_URL+source+'?api_key='+key;
    //     return url;
    // }
    // getUrl() {
    //     const { BASE_URL, defaultOptions, searchQuery, page, per_page, key } = this.options;
    //     const url = `${BASE_URL}?${defaultOptions}&q=${searchQuery}&page=${page}&per_page=${per_page}&key=${key}`;
    //     return url;
    // }
    // async fetchImages(url) { 
    //     // return fetch(url)
    //     //     .then(response => response.json())
    //     //     .then(({hits}) => { 
    //     //         this.options.page += 1;
    //     //         return hits;
    //     //     })
    //     //     .catch(console.log);
    //     try {
    //         const response = await fetch(url);
    //         this.options.page += 1;
    //         return response.json()
    //             .then(({ hits }) => hits);
    //     }
    //     catch (error) {
    //         console.log("Ошибка КЕЧ", error);
    //     }
    // }
            
    // getImages(searchQuery) {

    //     if (searchQuery) {
    //         this.options.searchQuery = searchQuery;
    //         this.options.page = 1;
    //     }
            
        
    //     const url = this.getUrl();

    //      return this.fetchImages(url);
    // }
}
    
    

