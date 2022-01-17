import React, {useEffect, useState}from "react";
import tmdb from "./config/tmdb";
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//-------------- Screen's 
import Login from "./components/login/Login";
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
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <div className="page">
            {/* ---- HEADER PAGE RENDER ----- */}
            <Header black={blackHeader}/>

            {/* ----FEATURE MOVIE PAGE RENDER ----- */} 
            {featureData && 
              <FeatureMovie item={featureData}/>
            }

            {/* ---- ALL LIST RENDER ----- */}
            <section className="lists">
              {movieList.map((item, key)=>(
                <MovieRow key={key} title={item.title} items={item.items}/>
              ))}
            </section>

            {/* ---- FOOTER PAGE RENDER ----- */}   
            <footer>
              Study Copy Developer by ©Luis Starlino <br/>
              All image rights reserved by ©Netflix | Database by ©themoviedb.org
            </footer>

            {/* ---- LOADING PAGE RENDER ----- */}
            {movieList.length <= 0 &&
              <div className="loading">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
              </div>
            }
          </div>
        </Route>
      </Switch>
    </Router>
  )
}