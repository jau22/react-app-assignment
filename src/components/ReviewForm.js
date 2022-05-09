import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";
import Review from "./Review";

function ReviewForm(){
    const [movieReview,setReview] = useState([
        {user:"Andrew Bacak",
        comment: "I expected a lot from Sam Raimi going in. As someone who grew up watching his Spider-Man movies, this felt like a perfect Raimi superhero movie. It was action packed with stunning, creative action sequences, delivered a heart breaking villain performance, and gave us the closest the MCU has gotten to a horror film. "},
        {user:"Arun Mohan",
        comment:"The movie started great and in the middle of the movie, I was a bit confused about certain action moments where I thought I came for the wrong movie."}
    ]);
    
    const[toggle, setToggle]=useState(true);
    const toggler = () => {
        setToggle((prev) => !prev);
    };

    //form

    const [inputText,setInputText] = useState("");
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const [commentText,setCommentText] = useState("");
    const inputCommentHandler = (e) => {
        console.log(e.target.value);
        setCommentText(e.target.value);
    };

    const submitCommentHandler = (e) => {
        e.preventDefault();
        setReview([
            ...movieReview,{user:inputText, comment:commentText}
        ]);
        setInputText("");
        setCommentText("");
    }

    return(
        <div>
            <div className="info-container">
                <form>
                    <div class="form-group">
                        <label for="user">Full Name:</label>
                        <input value={inputText} onChange={inputTextHandler} type="text" class="form-control" id="user"></input>
                    </div> 
                    <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea value={commentText} onChange={inputCommentHandler} type="text" class="form-control" id="comment" rows="3"></textarea>
                    </div>
                    <button onClick={submitCommentHandler} type="submit" class="btn btn-primary">Submit</button> 
                </form> 

                    <button onClick={toggler} className="btn btn-secondary">Read the Reviews</button>                  
               
            
            </div>
                <div className={toggle ? "hidden" : "active info-container"}>
                    <h5><small>Reviews ({movieReview.length})</small></h5>
                    {movieReview.map((review) => 
                    (<Review user={review.user} comment={review.comment}/>))}
                </div>
            </div>

    )
}

export default ReviewForm;