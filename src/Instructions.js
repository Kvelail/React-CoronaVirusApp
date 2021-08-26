import Headline from "./Headline"
import MaskImg from './img/instructions-imgs/mask-img.svg';
import MaskImgTwo from './img/instructions-imgs/mask-2-img.svg';
import DistanceImg from './img/instructions-imgs/distance-img.svg';
import HandsImg from './img/instructions-imgs/hands-img.svg';
import HandsImgTwo from './img/instructions-imgs/hands-2-img.svg';
import { useState, useEffect } from "react";

const Instructions = () => {

    const TITLE = 'instructions';
    const SUBTITLE = 'Please follow the instructions given by authorities';

    const [mask, setMask] = useState(MaskImg);
    const [hands, setHands] = useState(HandsImg);

    const renderImages = [
        { id : 1, title : 'wear a mask', image : mask, alt : 'Mask Image' },
        { id : 2, title : 'keep distance', image : DistanceImg, alt : 'Distance Image' },
        { id : 3, title : 'wash hands', image : hands, alt : 'Hands Image' }
    ];

    const changeIcons = () => {

        setMask(MaskImg);
        setHands(HandsImg);

        setTimeout(() => {
            setMask(MaskImgTwo);
            setHands(HandsImgTwo);
        }, 1000);

    };

    useEffect(() => {

        const interval = setInterval(changeIcons, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="instructions">
            <Headline title={ TITLE } subtitle={ SUBTITLE } />
            <div className="instructions__center">
                { renderImages.map(item => {
                    return <div className="instructions__box" key={ item.id }>
                                <img className="instructions__img" src={ item.image } alt={ item.alt } />
                                <div className="instructions__underline"></div>
                                <h2 className="instructions__heading">{ item.title }</h2>
                           </div>
                }) }
            </div>
        </div>
    );
}
 
export default Instructions;