import React from 'react';

const MoviePost = (props) => {
  const { title, overview, poster_path } = props.data;
  const basePathImage = 'https://image.tmdb.org/t/p/w185'
  return (
    <article className="movie-post">
      <figure className="movie-post__poster-container">
        <img width="160" className="movie-post__poster" src={basePathImage + poster_path} alt={`Poster de ${title}`} />
      </figure>
      <div className="movie-post__overview">
        <h3 className="movie-post__title">{title}</h3>
        <p className="movie-post__overview-text">{overview}</p>
      </div>
    </article>
  )
};

export default MoviePost;