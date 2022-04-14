import {useEffect, useState} from "react";

const Movies = ({dates}) =>{
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            const movies = [{movies:[1,2,3]},{movies:[1,2,3]},{movies:[1,2,3,4,5]},{movies:[1,2,3,4]},{movies:[1,2,3]},{movies:[1,2]},{movies:[1,2,3,4,5,6]}]
            movies.forEach((movie,index) => {
                movie.date = dates[index];
            })
            setMovie(movies);
        },1000);
    },[movie])


    return(
        <section className='container movies'>
                {movie.map((date,index)=>(
                <div className='movie' key={index}>
                    <h2 className='date_section'>{date.date}</h2>
                    <div className='movies_holder'>
                        {date.movies.map(mov=>(
                            <div className='mov'>{mov}</div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export {Movies}