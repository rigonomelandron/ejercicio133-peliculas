export interface Pelicula {
  Title:      string;
  Year:       string;
  Rated:      string;
  Released:   string;
  Runtime:    string;
  Genre:      string;
  Director:   string;
  Writer:     string;
  Actors:     string;
  Plot:       string;
  Language:   string;
  Country:    string;
  Awards:     string;
  Poster:     string;
  Ratings:    Rating[];
  Metascore:  string;
  ImdbRating: string;
  ImdbVotes:  string;
  ImdbID:     string;
  Type:       string;
  Dvd:        string;
  BoxOffice:  string;
  Production: string;
  Website:    string;
  Response:   string;
}

export interface Rating {
  Source: string;
  Value:  string;
}
