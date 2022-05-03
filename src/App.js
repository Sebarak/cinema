import {Landing} from "./landing/Landing";
import {useEffect, useState} from "react";

const App = () => {
 const API_KEY = '114c970cfb0ac4bb84d531e002b522b4';
 const BASE_URL = 'https://api.themoviedb.org/3'
 const API_URL = BASE_URL + '/movie/now_playing?api_key=' + API_KEY;
 const [moviesList, setMoviesList] = useState([]);

 useEffect(() =>{
  fetch(API_URL)
      .then(res => res.json())
      .then(data => {
       setMoviesList(data.results);
       console.log(data.results)});
 },[])


 return(
     <Landing moviesList={moviesList}/>
 )
}

export {App};
