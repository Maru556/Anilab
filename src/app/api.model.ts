export interface SeasonalAnime {
  anime: Animes[];
}

export interface Animes {
  title: string;
  image_url: string;
  mal_id: number;
}

export interface AnimeDetail {
  title: string;
  rank: number;
  score: number;
  synopsis: string;
  trailer_url: string;
  broadcast: string;
  episodes: string;
  gen: Themes[];
}
export interface Themes {
  genres: string;
}
export interface Pictures {
  pics: BigPictures[];
}
export interface BigPictures {
  large: string;
}
