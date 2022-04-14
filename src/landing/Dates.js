import {useEffect, useState} from "react";

const Dates = ({setDate}) => {
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
                case 0:
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
            <input list='dates' placeholder='00/00/0000'/>
            <datalist id='dates'>
                {dates.map((date,index) => (
                    <option key={index} value={date}>({day[index]})</option>
                ))
                }
            </datalist>
            </div>
        </section>
    )
}

export {Dates}
