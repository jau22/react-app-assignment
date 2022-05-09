import React from "react";

function Review(props){

    return(
        <div className="review-container">
            <p>{props.comment}</p>
            <h6><small>by: {props.user}</small></h6>
        </div>
    )
}

export default Review;