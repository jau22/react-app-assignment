import React, {useState} from "react";
import Stars from "./Stars";



const Movie = (props) => {

    return(
        <div>
            <img src={props.poster} className="moviePoster" onClick={props.toggler}></img>
            <h5 className="movieTitle truncate" onClick={props.toggler}>{props.title}</h5>
            <Stars rating={props.rating}/>
        </div>
    )
}

export default Movie;
