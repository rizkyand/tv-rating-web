import {TVCard} from "../tv-card/TVCard";
import s from './style.module.css'

export const TvListContainer =  ({tvShowList, onClickList}) => {
    return (
        <>
            <div className={s.title}>
                Here some Recommendation for You:
            </div>
            <div className={s.list}>
                {tvShowList.map((tvShow)=> {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                            <TVCard tvShow={tvShow}
                                    onClicked={onClickList}/>
                        </span>
                    );
                })}
            </div>

        </>
    );
}