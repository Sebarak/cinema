const Search = () =>{
    return(
        <section className="container search">
            <div className='searching'>
                <input type="text" className='searching_input' placeholder='np. Avengers'/>
                <button className='searching_button'><i className="fa-solid fa-magnifying-glass" /></button>
            </div>
        </section>
    )
}

export {Search}