import React, {useState} from "react";
import Stars from "./Stars";
import ReviewForm from "./ReviewForm";



function MovieExpanded(){
    
    return(
        <div>
            <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/aWzlQ2N6qqg" allowFullScreen></iframe>
            </div>
            <div className="info-container">
                <h3>Doctor Strange in the Multiverse of Madness</h3>
                <h5><small>Your Rating</small></h5>
                <Stars/>
                <br/>
                <ReviewForm/>
            </div>            
        </div>        


    )
}

export default MovieExpanded;