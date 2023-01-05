export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: BelongsToCollection;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date?: Date;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface BelongsToCollection {
  id?: number;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?: string;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
}

export interface Similar {
  page?: number;
  results?: Result[];
  total_pages?: number;
  total_results?: number;
}

export interface Result {
  adult?: boolean;
  backdrop_path?: null;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  release_date?: Date;
  poster_path?: null;
  popularity?: number;
  title?: string;
  video?: boolean;
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
