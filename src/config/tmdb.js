const API_KEY = 'f7b4bab24380f90309ac9307ccee4966';
const API_BASE = 'https://api.themoviedb.org/3';

/*
 - PEGAR ESSES TOPICOS
    - Originais Netflix
    - Recomendados (treding)
    - Em Alta (top rated)
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentário
*/

const basicFech = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFech(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendado para Você',
                items: await basicFech(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFech(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFech(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFech(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFech(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFech(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFech(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo : async (movieId, type) => {
        let info = {};
        
        if(movieId){
            switch(type){
                case 'movie': //MOVIE
                    info = await basicFech(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv': //TV SERIE
                    info = await basicFech(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    info = null
                break;
            }
        }
        
        return info;
    }
}