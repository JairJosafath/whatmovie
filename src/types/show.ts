export interface Show {
  backdrop_path?: string;
  created_by?: CreatedBy[];
  episode_run_time?: number[];
  first_air_date?: Date;
  genres?: Genre[];
  genre_ids: number[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: Date;
  last_episode_to_air?: LastEpisodeToAir;
  name?: string;
  next_episode_to_air?: null;
  networks?: Network[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Network[];
  production_countries?: ProductionCountry[];
  seasons?: Season[];
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
  original_title?: string;
}

export interface CreatedBy {
  id?: number;
  credit_id?: string;
  name?: string;
  gender?: number;
  profile_path?: string;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface LastEpisodeToAir {
  air_date?: Date;
  episode_number?: number;
  id?: number;
  name?: string;
  overview?: string;
  production_code?: string;
  season_number?: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Network {
  name?: string;
  id?: number;
  logo_path?: null | string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface Season {
  air_date?: Date;
  episode_count?: number;
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string;
  season_number?: number;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

export interface Season {
  _id?: string;
  air_date?: Date;
  episodes?: Episode[];
  name?: string;
  overview?: string;
  id?: number;
  poster_path?: string;
  season_number?: number;
}

export interface Episode {
  air_date?: Date;
  episode_number?: number;
  crew?: Crew[];
  guest_stars?: Crew[];
  id?: number;
  name?: string;
  overview?: string;
  production_code?: string;
  season_number?: number;
  still_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Crew {
  department?: Department;
  job?: Job;
  credit_id?: string;
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: Department;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: null | string;
  order?: number;
  character?: string;
}

export enum Department {
  Acting = "Acting",
  Camera = "Camera",
  Creator = "Creator",
  Directing = "Directing",
  Editing = "Editing",
  Production = "Production",
  Writing = "Writing",
}

export enum Job {
  Director = "Director",
  DirectorOfPhotography = "Director of Photography",
  Editor = "Editor",
  Writer = "Writer",
}

export interface Similar {
  page?: number;
  results?: Result[];
  total_pages?: number;
  total_results?: number;
}

export interface Result {
  backdrop_path?: string;
  first_air_date?: Date;
  genre_ids?: number[];
  id?: number;
  original_language?: OriginalLanguage;
  original_name?: string;
  overview?: string;
  origin_country?: OriginCountry[];
  poster_path?: string;
  popularity?: number;
  name?: string;
  vote_average?: number;
  vote_count?: number;
}

export enum OriginCountry {
  GB = "GB",
  Us = "US",
}

export enum OriginalLanguage {
  En = "en",
}
