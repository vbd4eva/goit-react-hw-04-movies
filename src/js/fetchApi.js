export default class FetchApi {

    constructor(optionsObj){ 
        this.options = {
            BASE_URL: 'https://api.themoviedb.org/3/',
            // defaultOptions: 'image_type=photo&orientation=horizontal',
            // page: 1,
            // per_page: 12,
            sources: {
                trendMoviesDay: "trending/movie/day",
            },
            key: '5109669929d60bcec12dd0fb9f3893cc',
            ...optionsObj
        }


    }

    async trendMoviesDay() { 
        const url = this.getUrl("trendMoviesDay");

        try {
            const response = await fetch(url);
            return response.json()
                .then(({results}) => results);
        }
        catch (error) {
            console.log("Ошибка КЕЧ", error);
        }
    }

    getUrl(source) {
        const { BASE_URL, sources, key } = this.options;        
        const url = BASE_URL+sources[source]+'?api_key='+key;
        return url;
    }
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
    
    

