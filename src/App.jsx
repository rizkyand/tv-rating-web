import s from './style.module.css'
import {TvShowsAPI} from "./api-fetching/TvShows";
import {useEffect, useState} from "react";
import {BASE_IMG_URL} from "./api-fetching/config";
import {TvShowDetails} from "./component/tv-show-detail/TvShowDetails";
import {LogoHead} from "./component/logo/LogoHead";
import logos from './asset/image/tv-solid-xl.svg'
import {ListTVCard} from "./component/tv-card/ListTVCard";
import {TvListContainer} from "./component/tv-card-list/TvListContainer";

export const App = () => {
    const [tvShowsList, setTvShowsList] = useState();
    const [recommendTvList, setRecommendTvList] = useState([]);

    const fetchTvShowList = async () => {
        const popularTV = await TvShowsAPI.getAllTVShows();
        if(popularTV.length > 0){
            setTvShowsList(popularTV[0]);
        }
    }
    const fetchTvShowRecommend = async (tvId) => {
        const respRecommend = await TvShowsAPI.getRecommendationTv(tvId);
        if(respRecommend.length > 0){
            setRecommendTvList(respRecommend.slice(0,10));
        }
    }

    useEffect( () => {
        fetchTvShowList();
    }, []);

    useEffect( ()=> {
        if(tvShowsList){
            fetchTvShowRecommend(tvShowsList.id);
        }
    }, tvShowsList)

    //console.log(tvShowsList);
    console.log(recommendTvList);

    return <div className={s.main_container}
                style={{
                    background : tvShowsList? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),url("${BASE_IMG_URL}${tvShowsList.backdrop_path}") no-repeat center / cover` : "black"
                }}>
        <div className={s.header}>
            <div className="row">
                <div className="col-4">
                    <LogoHead img={logos} title="Tiviku" subtitle="Nonton TV Dimanapun Gratis"/>
                </div>
                <div className="col-md-12 col-lg-4">
                    <input style={{width: "100%"}} type="text"/>
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>{
            tvShowsList && <TvShowDetails tvShow={tvShowsList}/>
        }</div>
        <div className={s.recommended_tv_show}>
            {tvShowsList &&
            <TvListContainer tvShowList={recommendTvList}/>}
        </div>
    </div>
}