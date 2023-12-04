import s from './style.module.css'
import {BASE_IMG_CARD} from "../../api-fetching/config";

const MAX_TITLE = 25;
export const ListTVCard = ({tvShow, onClicked}) => {
    const handleClick = () => {
        onClicked(tvShow);
    }
    return (
        <div onClick={handleClick} className={s.container}>
            <img alt={tvShow.name} src={BASE_IMG_CARD + tvShow.backdrop_path}
            className={s.imgs}/>
            <div className={s.title}>
                {tvShow.name.length > MAX_TITLE ? `${tvShow.name.slice(0, MAX_TITLE)}...` : tvShow.name}
            </div>
        </div>
    )
}