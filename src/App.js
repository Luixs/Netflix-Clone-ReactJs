import React, {useEffect, useState}from "react";
import tmdb from "./config/tmdb";
import './App.css'
import MovieRow from "./components/movieRow/MovieRow";

export default ()=> {

  //When a reload the screen this fuction is gona run
  const  [movieList, setMovieList] = useState([]);
  useEffect(()=>{
    //Use state to save the fetch list into a page
    const loadAll = async () => {
      //Taking all list
      let list = await tmdb.getHomeList();
      setMovieList(list)
    }
    loadAll();
  }, []);
  
  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}