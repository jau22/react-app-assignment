import React from "react";
import Movie from "./Movie";

function MovieList(){   
    
    
    const movies=[
        {title:"Doctor Strange in the Multiverse of Madness", rating:4.5, reviews:[],
        poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_screenx_digital_suppemental_ig_v2.jpg"},
        {title:"Fantastic Beasts: The Secrets of Dumbledore", rating:4, reviews:[],
            poster:"https://m.media-amazon.com/images/M/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_.jpg"},
        {title:"Sonic the Hedgehog 2", rating:3, reviews:[],
            poster:"https://pbs.twimg.com/media/FN-8wqkXoAYilRk?format=jpg&name=900x900"},
        {title:"Downton Abbey: A New Era", rating:4, reviews:[],
            poster:"https://tellyvisions.org/sites/default/files/styles/alignnone/public/DA2_DogPoster_2764x4096.jpg?itok=ZJiLzV40"}]


    return(
        <div>
        <div className="row">
            {movies.map((movie, index) => 
            (<div className="col-6 col-sm-4 col-md-3" key={index}> 
                <Movie title={movie.title} rating={movie.rating} poster={movie.poster}/> 
            </div>))}
        </div>
        </div>

        


        )
}

export default MovieList;