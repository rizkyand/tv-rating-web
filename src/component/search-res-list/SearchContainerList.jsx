import s from './style.module.css'
import {SearchResultCard} from "../search-result/SearchResultCard";

export const SearchContainerList = (props) => {
    const dummyState = true;
    return <div className={s.container}>
        <div className={s.list}>
            {dummyState?
                (<>
                    <SearchResultCard/>
                    <SearchResultCard/>
                    <SearchResultCard/>
                </>
                ) : <p>No Result Found</p>}
        </div>
    </div>
}