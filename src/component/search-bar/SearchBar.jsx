import s from './style.module.css';
import {Search} from "react-bootstrap-icons";

export const SearchBar = (props) => {
    return (
    <>
        <Search size={27} className={s.icons}/>
        <div className={s.container_search}>
            <input className={s.search} type="text"
                   placeholder="search your film..."
            />
        </div>
    </>)
}