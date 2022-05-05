import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Movies = ({dates,moviesList,setSelected,searchedDay, movies}) =>{
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const navigate = useNavigate();

    const Parallax = (event) => {
        const movieHolderBound = event.currentTarget.getBoundingClientRect();

        let w = movieHolderBound.width/2;
        let h = movieHolderBound.height/2;
        let mousePosX = event.clientX;
        let mousePosY = event.clientY;

        let depth = `${-(mousePosX - w) * 0.01}%, ${-(mousePosY - h) * 0.01}%`;

        event.currentTarget.firstElementChild.style.transform = `translate(${depth})`;
    }

    const ShowDesc = (event) => {
        event.currentTarget.nextElementSibling.classList.toggle('show');
    }

    const Hover = (event, px) => {
        event.currentTarget.firstElementChild.style.filter = `blur(${px})`;
    }

    const Click = (event,{poster_path, title, overview, vote_average, backdrop_path, release_date, original_language}) => {
        event.preventDefault();
            setSelected({poster_path, title, overview, vote_average, backdrop_path, release_date, original_language});
            document.body.style.overflow = 'hidden'
    }

    const Nav = () => {
        navigate('/room');
    }

    if (searchedDay === '') return(
        <section className="container movies">
            {moviesList.map(({poster_path, title, overview, vote_average, backdrop_path, release_date, original_language}) => {
                let color
                if (vote_average >= 7.8 && vote_average <= 10) {
                    color = {color: 'green'}
                } else if(vote_average >= 4.5 && vote_average < 7.8){
                    color = {color: 'orange'}
                } else{
                    color = {color: 'red'}
                }
                return(
                        <div className='movie' key={title} onMouseEnter={e => {Hover(e, '2px')}}
                             onMouseLeave={e => {Hover(e, 0);e.currentTarget.lastElementChild.classList.remove('show')}}
                             onMouseMove={e => {Parallax(e)}}>
                            <img src={IMG_URL + poster_path} onClick={(e) => {Click(e,{poster_path, title, overview, vote_average, backdrop_path, release_date, original_language})}} alt={title} className='movie_poster'/>
                            <div className='movie_vote'><span style={color}>{vote_average}</span>/10</div>
                            <span className="movie_info" onClick={e => {ShowDesc(e)}}>?</span>
                            <div className='movie_description'>
                                <p className='movie_description_overview'>{overview}</p>
                            </div>
                        </div>
                )
            })}
        </section>
    )
    else return(
        <section className="container movies">
            {moviesList.map(({poster_path, title, overview, vote_average, backdrop_path, release_date, original_language}) => {
                let color
                if (vote_average >= 7.8 && vote_average <= 10) {
                    color = {color: 'green'}
                } else if (vote_average >= 4.5 && vote_average < 7.8) {
                    color = {color: 'orange'}
                } else {
                    color = {color: 'red'}
                }
                let found = false;
                for(let i = 0; i < movies[parseInt(searchedDay)].movies.length; i++) {
                    if (title === movies[parseInt(searchedDay)].movies[i].title) {
                        found = true;
                        break;
                    }
                }
                if (found) return(
                    <div className='movie' key={title} onMouseEnter={e => {Hover(e, '2px')}}
                         onMouseLeave={e => {Hover(e, 0);e.currentTarget.lastElementChild.classList.remove('show')}}
                         onMouseMove={e => {Parallax(e)}}>
                        <img src={IMG_URL + poster_path} onClick={Nav} alt={title} className='movie_poster'/>
                        <div className='movie_vote'><span style={color}>{vote_average}</span>/10</div>
                        <span className="movie_info" onClick={e => {ShowDesc(e)}}>?</span>
                        <div className='movie_description'>
                            <p className='movie_description_overview'>{overview}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export {Movies}