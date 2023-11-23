import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDFlNjYyMzM0NGE1MzRhOGVmNzRhMzI5NjM5N2JjMSIsInN1YiI6IjY1NTY4YzhmZWVhMzRkMDBhYzM3YjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFSQsGMM8s0REiFHFlqqpqxYvdTDyutDoavn2ZRSICc";

  const getGenres = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };
    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options);
      const data = await response.json();
      return data.genres ? data.genres : [];
    } catch (error) {
      console.error('Error fetching genres:', error);
      return [];
    }
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-US`, options)
    .then(response => response.json())
    .then(data => {
      if (data.genres) {
        const movieGenres = data.genres.map(genre => {
          const matchedGenre = genres.find(g => g.id === genre.id);
          return matchedGenre ? matchedGenre.name : genre.name;
        });
        data.genres = movieGenres;
      }
      setMovie(data);
    })
    .catch(error => console.error(error));
  

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-US`, options)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const trailer = data.results.find(video => video.type === 'Trailer');
          setVideo(trailer);
        }
      })
      .catch(error => console.error(error));

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=es-US`, options)
      .then(response => response.json())
      .then(data => {
        if (data.cast) {
          setActors(data.cast.slice(0, 5)); 
        }
      })
      .catch(error => console.error(error));

    getGenres().then(setGenres);
  }, [id]);

  return (
    <div className="movie-details1">
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
          <p>{movie.overview}</p>
          <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
          <p><strong>Calificación promedio:</strong> {movie.vote_average}</p>
          {actors.length > 0 ? (
            <div>
              <h3>Actores:</h3>
              <ul>
                {actors.map(actor => (
                  <li key={actor.id}>{actor.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No se encontraron actores para esta película.</p>
          )}
          {movie.genres && movie.genres.length > 0 ? (
            <div>
              <h3>Géneros:</h3>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No se encontraron géneros para esta película.</p>
          )}
          {video ? (
            <div className="trailer">
              <h3>Tráiler:</h3>
              <iframe width="100%" height="315" src={`https://www.youtube-nocookie.com/embed/${video.key}`} title={video.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          ) : (
            <p>No se encontró un tráiler para esta película.</p>
          )}
        </div>
      ) : (
        <p>Cargando detalles de la película...</p>
      )}
    </div>
  );
};

export default MovieDetails;
