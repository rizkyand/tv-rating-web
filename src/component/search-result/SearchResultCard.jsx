import s from './style.module.css';
import {BASE_IMG_ICONS} from "../../api-fetching/config";

export const SearchResultCard = (props) => {
    const titles = "Dexter"
    const overviews = "Dexter Morgan, a blood spatter pattern analyst for the Miami Metro Police also leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.";
    return (
        <div className={s.container}>
            <img src={BASE_IMG_ICONS+"/aSGSxGMTP893DPMCvMl9AdnEICE.jpg"} alt={titles} className={s.images}/>
            <div className={s.detail_container}>
                <div className={s.title}>{titles}</div>
                <div className={s.overview}>{overviews}</div>
            </div>
        </div>
    );
}