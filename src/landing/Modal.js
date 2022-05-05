import {useEffect} from "react";

const Modal = ({modal, setModal, selectedMovie, movies, dates}) => {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        if (Object.keys(selectedMovie).length !== 0) setModal(true);
    },[selectedMovie])

    const Click = () => {
        document.body.style.overflow = 'auto'
        setModal(false);
    }

    return(
        <>
        {modal && (
            <section className='modal'>
                <span className='modal_close' onClick={() => {Click()}}>x</span>
                <img src={IMG_URL + selectedMovie.backdrop_path} alt="banner" className='modal_banner'/>
                <div className='modal_poster'>
                    <img src={IMG_URL + selectedMovie.poster_path} alt="poster" className='modal_poster_img'/>
                </div>
                <div className='modal_info'>
                    <h2 className='modal_info_title'>Title: '{selectedMovie.title}'</h2>
                    <h2 className='modal_info_title'>Release date: {selectedMovie.release_date}</h2>
                    <h2 className='modal_info_title'>Rate: {selectedMovie.vote_average}</h2>
                    <h2 className='modal_info_title'>Language: '{selectedMovie.original_language.toUpperCase()}'</h2>
                    <h2 className='modal_info_title'>Description: {selectedMovie.overview}</h2>
                </div>
                <div className='modal_performance'>
                    {movies.map((day,index) => {
                        return(
                            <div key={index} className='modal_performance_day'>
                                {dates[day.id]}
                                    {day.movies.map((movie,index)=>{if (movie.title === selectedMovie.title){
                                        return (
                                            <div key={index} className='hours'>
                                                {movie.hours.map(hours=> (
                                                    <button key={hours} className='hour'><span>{hours}:00</span></button>
                                                ))}
                                            </div>
                                        )
                                    }})}
                            </div>
                        )
                    })}
                </div>
            </section>
        )}
        </>
    )
}

export {Modal}