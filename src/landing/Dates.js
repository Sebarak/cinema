import {useEffect, useState} from "react";

const Dates = ({setDate, setSearchedDay, searchedDay}) => {
    const [dates,setDates] = useState([]);
    const [day,setDay] = useState([]);

    useEffect(()=>{
        const today = new Date();
        const arrayDates = [];
        const arrayDays = [];

        for (let i = 0; i<7; i++){
            const newDay = new Date(today);
            newDay.setDate(today.getDate() + i);
            arrayDates.push(`${newDay.getMonth() + 1}/${newDay.getDate()}/${newDay.getFullYear()}`);
            switch(newDay.getDay()){
                case 1:
                    arrayDays.push('Monday');
                    break;
                case 2:
                    arrayDays.push('Tuesday');
                    break;
                case 3:
                    arrayDays.push('Wednesday');
                    break;
                case 4:
                    arrayDays.push('Thursday');
                    break;
                case 5:
                    arrayDays.push('Friday');
                    break;
                case 6:
                    arrayDays.push('Saturday');
                    break;
                default:
                    arrayDays.push('Sunday');
                    break;
            }
        }
        setDate(arrayDates);
        setDay(arrayDays);
        setDates(arrayDates);
    },[])

    return(
        <section className='container date'>
            <div className='date_holder'>
                <select className='day' value={searchedDay} onChange={e => {setSearchedDay(e.target.value)}}>
                    <option className='day_option' value=''>--Select--</option>
                    {dates.map((date,index) => (
                            <option className='day_option' key={index} value={index}>{date} ({day[index]})</option>
                        ))}
                </select>
            </div>
        </section>
    )
}

export {Dates}
