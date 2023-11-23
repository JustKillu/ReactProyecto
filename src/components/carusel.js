import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCarousel.css';
import { Link } from 'react-router-dom';
const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDFlNjYyMzM0NGE1MzRhOGVmNzRhMzI5NjM5N2JjMSIsInN1YiI6IjY1NTY4YzhmZWVhMzRkMDBhYzM3YjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFSQsGMM8s0REiFHFlqqpqxYvdTDyutDoavn2ZRSICc";

async function getPopularMovies() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${api_key}`
        }
      };
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-US&page=1'`, options);
      const data = await response.json();
      console.log(data)
      return data.results ? data.results : [];
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
}

async function getGenres() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
    }
  };
  try {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
    const data = await response.json();
    return data.genres ? data.genres : [];
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
} 
function MovieComponent({ movie, genres }) {
  return (    
    <div className="movie-component">
        <Link to={`/info-pelicula/${movie.id}`}>
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </Link>
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Género: {movie.genre_ids.map(id => genres[id]).join(', ')}</p>
        <p>Votos: {movie.vote_count}</p>
        <p>Fecha de salida: {movie.first_air_date}</p>
        <p>Idioma original: {movie.original_language}</p>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </div>
    
  );
}

export default function MovieCarousel() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});

  useEffect(() => {
    getPopularMovies().then(setMovies);
    getGenres().then(genres => {
      const genreMap = {};
      genres.forEach(genre => {
        genreMap[genre.id] = genre.name;
      });
      setGenres(genreMap);
    });
  }, []);

  return (
    <div className="carousel-container">
      <Carousel className="movie-carousel">
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <MovieComponent movie={movie} genres={genres} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
