import s from './style.module.css';
import {StarFill, StarHalf, Star as StarEmpty} from "react-bootstrap-icons";
export const RatingStar = (props) => {
    const showStar = [];
    const fullStar = Math.floor(props.ratings);
    const hasHalfStar = props.ratings - parseInt(fullStar) >= 0.5;
    const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0);

    for(let i=1; i<=fullStar; i++){
        showStar.push(<StarFill key={"star-fill-"+i}/>);
    }
    if(hasHalfStar){
        showStar.push(<StarHalf key={"star-half"}/>);
    }
    for(let i=1; i<=emptyStar; i++){
        showStar.push(<StarEmpty key={"star-empty-" + i}/>)
    }


    return <div>
        {showStar}
    </div>
}