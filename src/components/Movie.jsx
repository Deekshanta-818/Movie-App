import React from 'react';

const image_api = 'https://image.tmdb.org/t/p/w500';


const Movie = ({title,poster_path,overview,vote_average}) => {

const setVoteClass = (vote) => {
    if (vote>=8) {
        return 'Green';
    }
    else if (vote>= 6) {
        return 'Yellow';
    }
    else {
        return 'Red';
    }
}

return (
    <div className='movie'>
          <img src={image_api + poster_path} alt={title}/>
          <div className="movie-info">
                <h3>{title}</h3>
                <span className={
                    `tag ${setVoteClass(vote_average)}`}> {vote_average} </span>
          </div>
          <div className="movie-over">
              <h2>Overview:</h2>
                <p>{overview}</p>
          </div>
           </div>
        )
}
export default Movie