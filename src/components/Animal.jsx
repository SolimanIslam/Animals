import { useState } from "react";
import '../style/Animal.css';
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";
import heart from "../svg/heart.svg";




function Animal({ type }) {
    const AnimalSrcMap = { bird, cat, cow, dog, gator, horse };
    const [heartSize , setHeartSize] = useState(0);
    const reactLove = ()=>{
            setHeartSize(()=>{
                if (heartSize < 6) {return heartSize + 1}
            });
        }

    return (
        <div className="container" onClick={reactLove}>
            <img className="Animal" src={AnimalSrcMap[type]} alt="Animal-image" />
            <img className="Heart" src={heart} alt="heart icon" style={{height: 10+10 * heartSize+"px"}}/>
        </div>
    );
}

export default Animal;