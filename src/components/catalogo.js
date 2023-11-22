import React, { Component } from 'react';
import './catalogo.css';

const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDFlNjYyMzM0NGE1MzRhOGVmNzRhMzI5NjM5N2JjMSIsInN1YiI6IjY1NTY4YzhmZWVhMzRkMDBhYzM3YjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFSQsGMM8s0REiFHFlqqpqxYvdTDyutDoavn2ZRSICc";

class Popular extends Component {
  state = {
    movies: [],
    sort: 'popularity',
    order: 'desc',
    page: 1,
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.sort !== this.state.sort || prevState.order !== this.state.order || prevState.page !== this.state.page) {
      this.getPopularMovies();
    }
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
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-US&page=${this.state.page}&sort_by=${this.state.sort}.${this.state.order}`, options);
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

  handleSortChange = (event) => {
    this.setState({ sort: event.target.value });
  }

  handleOrderChange = (event) => {
    this.setState({ order: event.target.value });
  }

  handleNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  handlePrevPage = () => {
    this.setState(prevState => ({ page: prevState.page > 1 ? prevState.page - 1 : 1 }));
  }

  render() {
    return (
      <div className="movie-container_catalogo">
        <div className="sort-container">
          <select onChange={this.handleSortChange}>
            <option value="popularity">Popularidad</option>
            <option value="revenue">Recaudación</option>
            <option value="release_date">Fecha de salida</option>
            <option value="vote_count">Cantidad de votos</option>
            <option value="vote_average">Promedio de votación</option>
          </select>
          <select onChange={this.handleOrderChange}>
            <option value="desc">Descendente</option>
            <option value="asc">Ascendente</option>
          </select>
          <button onClick={this.handlePrevPage}>Página anterior</button>
          <span>Página {this.state.page}</span>
          <button onClick={this.handleNextPage}>Página siguiente</button>
        </div>
        {this.state.movies.map((movie) => (
          <div key={movie.id} className="movie-card_catalogo">
            <div className="movie-card-inner_catalogo">
              <div className="movie-card-front_catalogo">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="movie-card-back_catalogo">
                <h2>{movie.title}</h2>
                <p>{movie.genres.length > 0 ? movie.genres.join(', ') : 'Géneros no disponibles'}</p>
                <p>{movie.overview ? movie.overview : 'Resumen no disponible'}</p>
                <p>Popularidad: {movie.popularity}</p>
                <p>Cantidad de votos: {movie.vote_count}</p>
                <p>Fecha de salida: {movie.release_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Popular;
