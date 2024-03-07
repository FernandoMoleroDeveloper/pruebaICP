import React, { useState } from "react";
import "./Movies.scss";
import Padrino from "../../assets/ImageFilms/card-el-padrino.jpg";
import Oppenheimer from "../../assets/ImageFilms/card-oppenheimer.jpg";
import Furious from "../../assets/ImageFilms/card-fast-and-furious.png";
import Come from "../../assets/ImageFilms/card-come-reza-ama.jpg";
import Toy from "../../assets/ImageFilms/card-toy-story.jpg";
import MovieCard from "../MovieCard/MovieCard";
import Formulario from "../Formulario/Formulario";
import { RxCaretRight } from "react-icons/rx";

interface Movie {
  title: string;
  year: string;
  duration: string;
  image: string;
  rating?: number;
}

const moviesData: Movie[] = [
  { title: "El padrino", year: "1972", duration: "175m", image: Padrino, rating: undefined },
  { title: "Fast and Furious 7", year: "2015", duration: "140m", image: Furious, rating: undefined },
  { title: "Oppenheimer", year: "2023", duration: "140m", image: Oppenheimer, rating: undefined },
  { title: "Come, reza, ama", year: "2010", duration: "133m", image: Come, rating: undefined },
  { title: "Toy Story", year: "1995", duration: "80m", image: Toy, rating: undefined },
];

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesData);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieSelect = (movie: Movie) => setSelectedMovie(movie);

  const handleRatingSubmit = (valoracion: number) => {
    if (!selectedMovie) return;
    const updatedMovies = movies.map((movie) => (movie.title === selectedMovie.title ? { ...movie, rating: valoracion } : movie));
    setMovies(updatedMovies);
  };

  return (
    <div className="movies">
      <div className="movies__text">
        <div className="movies__breadcrumb">
          <p className="movies__breadcrumb--text">Películas</p>
          <RxCaretRight className="movies__breadcrumb--text" />
          <p className="movies__breadcrumb--text-selected">Valoraciones</p>
        </div>
        <h1 className="movies__title">1.Selecciona una película</h1>
      </div>

      <div className="movies__card">
        {movies.map(({ title, year, duration, image, rating }) => (
          <MovieCard key={title} movie={{ title, year, duration, image, rating }} onSelect={() => handleMovieSelect({ title, year, duration, image, rating })} />
        ))}
      </div>
      {selectedMovie && <Formulario movie={selectedMovie} onSubmit={handleRatingSubmit} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default Movies;
