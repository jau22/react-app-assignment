import React, {useState} from "react";
import MovieExpanded from "./MovieExpanded";
import MovieList from "./MovieList";

function App(){
  return(
    <div className="container">
      
      <MovieExpanded />
      <h3> Now in Theatres</h3>
      <MovieList/>
      <div className="col text-center bottomfloat">
      </div>
    </div>
  )
}

export default App;