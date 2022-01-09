import React, {useEffect, useState}from "react";
import tmdb from "./config/tmdb";
import './App.css'
//-------------- Screen's 
import MovieRow from "./components/movieRow/MovieRow";
import FeatureMovie from "./components/featureMovie/FeaturedMovie";

export default ()=> {

  //When a reload the screen this fuction is gona run
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(()=>{
    //Use state to save the fetch list into a page
    const loadAll = async () => {
      //Taking all list
      let list = await tmdb.getHomeList();
      setMovieList(list)
      //Taking a Feature Movie
      let originals = list.filter(i=>i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 )) 
      let chosen = originals[0].items.results[ramdomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      //Set him
      setFeatureData(chosenInfo);
      
    }
    loadAll();
  }, []);
  
  return(
    <div className="page">
      
      {featureData && 
        <FeatureMovie item={featureData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}