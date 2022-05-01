import {useEffect, useState} from "react";

const Movies = ({dates,moviesList}) =>{
    const IMG_URL = 'https://image.tmdb.org/t/p/w500'

    return(
        <section className="container movies">
            {moviesList.map(({poster_path, title, overview}) => (
                <div className='movie' key={title}>
                    <img src={IMG_URL + poster_path} alt={title} className='movie_poster'/>
                    <div className='movie_description'>
                        <h2 className='movie_description_title'>{title}</h2>
                        <p className='movie_description_overview'>{overview}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export {Movies}