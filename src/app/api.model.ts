export interface SeasonalAnime {
  anime: Animes[];
}

export interface Animes {
  title: string;
  image_url: string;
  mal_id: number;
}

export interface AnimeDetail {
  //top
  title: string;
  rank: number;
  score: number;
  //synopsis tab
  synopsis: string;
  //trailer tab
  trailer_url: string;
  //row 1
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
  voice_actors: VA[];
}
export interface VA {
  image_url: string;
  name: string;
}

export interface Promo {
  promo: Videos[];
}
export interface Videos {
  video_url: string;
}