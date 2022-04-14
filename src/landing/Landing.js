import {Banner} from "./Banner";
import {Search} from "./Search";
import {Dates} from "./Dates";
import {Movies} from "./Movies";
import {useState} from "react";

const Landing = () =>{
    const [dates,setDate] = useState([]);
    return(
        <>
            <Banner />
            <Search />
            <Dates setDate={setDate}/>
            <Movies  dates={dates}/>
        </>
    )
}

export {Landing}