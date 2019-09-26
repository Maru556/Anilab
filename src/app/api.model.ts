export interface Anime {
  anime: AnimeDetail[];
}

export interface AnimeDetail {
  mal_id: null;
  title: '';
  rank: null;
  score: null;
  synopsis: '';
  img_url: '';
  trailer_url: '';
  broadcast: '';
  episodes: '';
  duration: '';
  title_japanese: '';
  rating: '';
  producers: Prod[];
  source: '';
  status: '';
  type: '';
  aired: From;
  genres: Genres[];
}
export interface Genres {
  name: '';
}
export interface Prod {
  name: '';
}

export interface From {
  '': '';
}
export interface Pictures {
  pictures: BigPictures[];
}
export interface BigPictures {
  large: '';
}

export interface Characters {
  characters: Character[];
}
export interface Character {
  image_url: '';
  name: '';
  voice_actors: Va[];
}
export interface Va {
  image_url: '';
  name: '';
}

export interface Promo {
  promo: Videos[];
}
export interface Videos {
  video_url: '';
}

export interface Years {
  id: null;
}

export interface TopUpcoming {
  rank: null;
  title: null;
  image_url: '';
  score: '';
  type: '';
  mal_id: null;
}

export interface TopAiring {
  rank: null;
  title: null;
  image_url: '';
  score: '';
  type: '';
  mal_id: null;
}

export interface TopTv {
  rank: null;
  title: null;
  image_url: '';
  score: '';
  type: '';
  mal_id: null;
}

export interface TopMovies {
  rank: null;
  title: null;
  image_url: '';
  score: '';
  type: '';
  mal_id: null;
}

export interface Results {
  results: Search[];
}
export interface Search {
  image_url: '';
  title: '';
  score: null;
  mal_id: null;
}
