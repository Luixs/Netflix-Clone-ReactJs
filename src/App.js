import React, {useEffect, useState}from "react";
import tmdb from "./config/tmdb";
import './App.css'
//-------------- Screen's 
import MovieRow from "./components/movieRow/MovieRow";
import FeatureMovie from "./components/featureMovie/FeaturedMovie";
import Header from "./components/header/Header";
//------------------


export default ()=> {

  // ---------- CONST AREA ---------------
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  //--------------------------------------

  //-------------- USE EFFECT AREA -------------------
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

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    //If exist ANY ONE scroll movimentation, we use the scroll Listener Fuction. This is a trigger.
    window.addEventListener('scroll', scrollListener);
    //Disnable the trigger
    return ()=>{
      window.removeEventListener('scroll',scrollListener);
    }      
  },[]);

  //---------------------------------------------
  //-------------- RENDER APP -------------------
  return(
    <div className="page">
      
      <Header black={blackHeader}/>

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