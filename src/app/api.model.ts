export interface Anime {
  anime: AnimeDetail[];
}

export interface AnimeDetail {
  mal_id: number;
  title: string;
  rank: number;
  score: number;
  synopsis: string;
  img_url: string;
  trailer_url: string;
  broadcast: string;
  episodes: string;
  duration: string;
  title_japanese: string;
  rating: string;
  producers: Prod[];
  source: string;
  status: string;
  type: string;
  aired: From;
  genres: Genres[];
}
export interface Genres {
  name: string;
}
export interface Prod {
  name: string;
}

export interface From {
  string: string;
}
export interface Pictures {
  pictures: BigPictures[];
}
export interface BigPictures {
  large: string;
}

export interface Characters {
  characters: Character[];
}
export interface Character {
  image_url: string;
  name: string;
  voice_actors: Va[];
}
export interface Va {
  image_url: string;
  name: string;
}

export interface Promo {
  promo: Videos[];
}
export interface Videos {
  video_url: string;
}

export interface Years {
  id: number;
}

export interface TopUpcoming {
  rank: number;
  title: number;
  image_url: string;
  score: string;
  type: string;
  mal_id: number;
}

export interface TopAiring {
  rank: number;
  title: number;
  image_url: string;
  score: string;
  type: string;
  mal_id: number;
}

export interface TopTv {
  rank: number;
  title: number;
  image_url: string;
  score: string;
  type: string;
  mal_id: number;
}

export interface TopMovies {
  rank: number;
  title: number;
  image_url: string;
  score: string;
  type: string;
  mal_id: number;
}

export interface Results {
  results: Search[];
}
export interface Search {
  image_url: string;
  title: string;
  score: number;
}
