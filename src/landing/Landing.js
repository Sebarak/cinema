import {Banner} from "./Banner";
import {Search} from "./Search";
import {Dates} from "./Dates";
import {Movies} from "./Movies";
import {useState} from "react";
import {Modal} from "./Modal";

const Landing = ({moviesList}) =>{
    const [dates,setDate] = useState([]);
    const [isModal, setModal] = useState(false);
    const [selectedMovie,setSelected] = useState({})

    return(
        <>
            <Banner />
            <Search />
            <Dates setDate={setDate}/>
            <Movies  dates={dates} moviesList={moviesList} setSelected={setSelected}/>
            <Modal  modal={isModal} setModal={setModal} selectedMovie={selectedMovie}/>
        </>
    )
}

export {Landing}