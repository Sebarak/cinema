import {Banner} from "./Banner";
import {Search} from "./Search";
import {Dates} from "./Dates";
import {Movies} from "./Movies";

const Landing = () =>{

    return(
        <>
            <Banner />
            <Search />
            <Dates />
            <Movies />
        </>
    )
}

export {Landing}