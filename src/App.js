import React, {useEffect} from "react";
import tmdb from "./config/tmdb";

export default ()=> {
  //When a reload the screen this fuction is gona run
  useEffect(()=>{
    const loadAll = async () => {
      //Taking all list
      let list = await tmdb.getHomeList();
      console.log(list)
    }
    loadAll();
  }, []);
  
  return(
    <div>
      Ola mundo!
    </div>
  )
}