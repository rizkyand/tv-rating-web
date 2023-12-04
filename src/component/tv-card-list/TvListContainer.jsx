import {ListTVCard} from "../tv-card/ListTVCard";
import s from './style.module.css'

export const TvListContainer =  ({tvShowList}) => {
    return (
        <div>
            <div className={s.title}>
                Here some Recommendation for You:
            </div>
            <div className={s.list}>
                {tvShowList.map((tvShow)=> {
                    return (
                        <span className={s.tv_show_item} key={tvShow.id}>
                            <ListTVCard tvShow={tvShow}
                            onClicked={()=> console.log('Here is todo')}/>
                        </span>
                    );
                })}
            </div>

        </div>
    );
}