import React, { useState, useEffect } from 'react';
import './SearchMovies.css';

const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDFlNjYyMzM0NGE1MzRhOGVmNzRhMzI5NjM5N2JjMSIsInN1YiI6IjY1NTY4YzhmZWVhMzRkMDBhYzM3YjU4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yFSQsGMM8s0REiFHFlqqpqxYvdTDyutDoavn2ZRSICc";

async function getGenres() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${api_key}`
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
}

function SearchMovies({ navbarQuery }) { 
    const [results, setResults] = useState([]);
    const [genres, setGenres] = useState({});

    useEffect(() => {
        const search = async () => {
            if (navbarQuery !== '') {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${api_key}`
                    }
                };

                fetch(`https://api.themoviedb.org/3/search/movie?query=${navbarQuery}&include_adult=false&language=es-US&page=1`, options)
                    .then(response => response.json())
                    .then(data => {
                        setResults(data.results.slice(0, 3)); 
                    })
                    .catch(err => console.error(err));
            } else {
                setResults([]);
            }
        };

        getGenres().then(genres => {
            const genreMap = {};
            genres.forEach(genre => {
                genreMap[genre.id] = genre.name;
            });
            setGenres(genreMap);
        });

        search();
    }, [navbarQuery]);

    return (
        <div className="movie-container">
            {results && results.map((movie) => (
               <div key={movie.id} className="movie-card">
                   <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="movie-image" />
                   <div className="movie-info">
                       <h2 className="movie-title">{movie.title}</h2>
                       <p className="movie-overview">{movie.overview}</p> 
                       <p className="movie-overview">Género: {movie.genre_ids.map(id => genres[id]).join(', ')}</p>
                   </div>
               </div>
            ))}
        </div>
    );
}

export default SearchMovies;
