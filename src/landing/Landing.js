import {Banner} from "./Banner";
import {Dates} from "./Dates";
import {Movies} from "./Movies";
import {useEffect, useState} from "react";
import {Modal} from "./Modal";

const Landing = ({moviesList}) =>{
    const [dates,setDate] = useState([]);
    const [isModal, setModal] = useState(false);
    const [selectedMovie,setSelected] = useState({});
    const [movies, setMovies] = useState([]);
    const [searchedDay,setSearchedDay] = useState('');

    const Draw = (how,array,max,min) => {
        how = Math.floor(Math.random() * (max - min + 1) + min);

        for (let i = 0; i < how; i++){
            let randomHour
            do {
                randomHour = Math.floor(Math.random() * 10 + 13)
            }
            while(array.includes(randomHour))

            array.push(randomHour);
        }
    }

    useEffect(() => {
        const allDays = [];
        for (let i = 0;i < 7; i++){
            const moviesArray = [];
            moviesList.forEach(movie => {
                let howMany = 0
                const hours = []
                if (movie.vote_average >= 7.8 && movie.vote_average <= 10) {
                    Draw(howMany, hours, 5, 3);
                } else if (movie.vote_average >= 4.5 && movie.vote_average < 7.8) {
                    Draw(howMany, hours, 3, 0);
                } else {
                    Draw(howMany, hours, 1, 0);
                }
                if (hours.length !== 0) moviesArray.push({title: movie.title, hours})
            })

            allDays.push({id: i, movies: moviesArray})
        }
        setMovies(allDays);
    }, [moviesList])

    return(
        <>
            <Banner />
            <Dates setDate={setDate} setSearchedDay={setSearchedDay} searchedDay={searchedDay}/>
            <Movies  dates={dates} moviesList={moviesList} setSelected={setSelected} searchedDay={searchedDay}/>
            <Modal  modal={isModal} setModal={setModal} selectedMovie={selectedMovie} movies={movies} dates={dates}/>
        </>
    )
}

export {Landing}