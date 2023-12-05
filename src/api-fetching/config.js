const BASE_URL = 'https://api.themoviedb.org/3/';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';
const BASE_IMG_CARD = 'https://image.tmdb.org/t/p/w300';

const BASE_IMG_ICONS = 'https://image.tmdb.org/t/p/w200';
const API_KEY = '?api_key=cc035a9dd7bdfae6ab41f1e3280196e6';
const list_map = [
    ['popular-tv-shows' , 'tv/popular'],
    ['recommend-tv-shows' , (tvId)=>`tv/${tvId}/recommendations`],
];
const ENDPOINT = new Map(list_map);

export {BASE_URL, BASE_IMG_URL, BASE_IMG_CARD, BASE_IMG_ICONS,API_KEY, ENDPOINT};