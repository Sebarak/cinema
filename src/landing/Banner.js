import {useEffect} from "react";

const Banner = () => {
    useEffect(() =>{
        const carousel = document.querySelector('.banner_carousel');
        let rot = -120;
        const IntervalId = setInterval(()=>{
            carousel.style.transform = `translateZ(-180px) rotateY(${rot}deg)`;
            rot -= 120;
        },8000);

        return () => clearInterval(IntervalId);
    },[])

    return(
        <section className='banner'>
            <div className="banner_carousel">
                <div className='banner_carousel_section'>1</div>
                <div className='banner_carousel_section'>2</div>
                <div className='banner_carousel_section'>3</div>
            </div>
        </section>
    )
}

export {Banner}