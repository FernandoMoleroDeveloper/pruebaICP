import Padrino from "../assets/ImageFilms/card-el-padrino.jpg";
import Oppenheimer from "../assets/ImageFilms/card-oppenheimer.jpg";
import Furious from "../assets/ImageFilms/card-fast-and-furious.png";
import Come from "../assets/ImageFilms/card-come-reza-ama.jpg";
import Toy from "../assets/ImageFilms/card-toy-story.jpg";

export interface Movie {
  title: string;
  year: string;
  duration: string;
  image: string;
  rating?: number;
}

export const moviesData: Movie[] = [
  { title: "El padrino", year: "1972", duration: "175m", image: Padrino, rating: undefined },
  { title: "Fast and Furious 7", year: "2015", duration: "140m", image: Furious, rating: undefined },
  { title: "Oppenheimer", year: "2023", duration: "140m", image: Oppenheimer, rating: undefined },
  { title: "Come, reza, ama", year: "2010", duration: "133m", image: Come, rating: undefined },
  { title: "Toy Story", year: "1995", duration: "80m", image: Toy, rating: undefined },
];
