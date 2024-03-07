import React from "react";
import "./MovieCard.scss";
import StarIcon from "../../assets/Logos/icon-star.svg";

interface Movie {
  title: string;
  year: string;
  duration: string;
  image: string;
  rating?: number;
}

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie: { title, year, duration, image, rating }, onSelect }) => {
  return (
    <div className="movieCard" onClick={onSelect}>
      <img className="movieCard__img" src={image} alt={title} />
      <div className="movieCard__info">
        <div className="movieCard__rating">
          {rating && <span className="movieCard__rating-number">{rating}</span>}
          {rating && [...Array(rating)].map((_, i) => <img key={i} src={StarIcon} alt="Star" className="movieCard__stars" />)}
        </div>
        <h2 className="movieCard__title">{title}</h2>
        <div className="movieCard__details">
          <p className="movieCard__year">{year}</p>
          <p className="movieCard__duration">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
