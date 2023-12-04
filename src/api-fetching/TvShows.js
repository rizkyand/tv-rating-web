import axios from "axios";
import {DUMMY_DATA} from "./DummyData";
import {API_KEY, BASE_URL, ENDPOINT} from "./config";





export class TvShowsAPI {
    static getAllTVShows = async () =>{
        // const response = await axios.get(`${BASE_URL}${ENDPOINT.get('popular-tv-shows')}${API_KEY}`);
        // console.log(response.data.results);
        // return response.data.results;
        return DUMMY_DATA;
    }
}
