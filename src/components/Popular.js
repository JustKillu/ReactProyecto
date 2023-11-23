import React, { Component } from 'react';
import './Popular.css';
const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDFlNjYyMzM0NGE1MzRhOGVmNzRhMzI5NjM5N2JjMSIsInN1YiI6IjY1NTY4YzhmZWVhMzRkMDBhYzM3YjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFSQsGMM8s0REiFHFlqqpqxYvdTDyutDoavn2ZRSICc";

const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg"

class Popular extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies = async () => {
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
      const genresResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options);
      const genresData = await genresResponse.json();
      const genres = genresData.genres ? genresData.genres : [];
      const movies = data.results ? data.results.map(movie => ({
        ...movie,
        genres: movie.genre_ids.map(id => genres.find(genre => genre.id === id)?.name).filter(Boolean)
      })) : [];
      this.setState({ movies });
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  }
  handleMovieClick = (id) => {
    window.location.href = `/info-pelicula/${id}`;
  }

  render() {
    return (
      <div className="movie-container_popular">
        {this.state.movies.map((movie) => (
        <div key={movie.id} className="movie-card_popular" onClick={() => this.handleMovieClick(movie.id)}>
          
            <div className="movie-card-inner_popular">
              <div className="movie-card-front_popular">
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : unavailable} alt={movie.title} />
              </div>
              <div className="movie-card-back_popular">
                <h1>{movie.name}</h1>
                <p>{movie.genres.length > 0 ? movie.genres.join(', ') : 'Géneros no disponibles'}</p>
                <p>{movie.overview ? movie.overview : 'Resumen no disponible'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Popular;
