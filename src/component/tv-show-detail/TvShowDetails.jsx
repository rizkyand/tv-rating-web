import s from './style.module.css'
import {RatingStar} from "../ratings/RatingStar";
export const TvShowDetails = ({tvShow}) => {
    const rating = Math.round(tvShow.vote_average/2 * 100) / 100;
    return (
        <div>
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <RatingStar ratings={rating}/>
                <span className={s.rating}>{rating}/5</span>
            </div>
            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    );
}