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

export default () => {
    getHomeList: async () =>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFech(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Recomendado para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []   
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ];
    }
}