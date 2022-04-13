import {useEffect, useState} from "react";
import banner from '../images/banner.png';

const Banner = () => {
    const [distance,setDistance] = useState(1);
    const [direction, setDirection] = useState('right');

    useEffect(() =>{
        const banner = document.querySelector('.banner > img');

        const TimeoutId = setTimeout(()=>{
            banner.style.transform = `translateX(-${distance}px)`;
            if (direction === 'right'){
                setDistance(prev => prev + 1);
            }else{
                setDistance(prev => prev - 1);
            }
            if (distance === 160){
                setDirection('left');
            }
            if (distance === 0){
                setDirection('right');
            }
        },200)

        return () => clearInterval(TimeoutId);
    },[distance]);

    return(
        <section className='banner'>
            <img src={banner} alt="Movies"/>
            <div className='banner_curtain'>CinemaX</div>
        </section>
    )
}

export {Banner}