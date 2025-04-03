export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Type: string;
  }
  
  export interface MovieDetails extends Movie {
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Runtime: string;
    Released: string;
  }
  