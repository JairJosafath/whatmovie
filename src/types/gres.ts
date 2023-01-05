export interface Gres {
  kind?: string;
  url?: URL;
  queries?: Queries;
  context?: Context;
  searchInformation?: SearchInformation;
  spelling?: Spelling;
  items?: Item[];
}

export interface Context {
  title?: string;
}

export interface Item {
  kind?: Kind;
  title?: string;
  htmlTitle?: string;
  link?: string;
  displayLink?: DisplayLink;
  snippet?: string;
  htmlSnippet?: string;
  cacheId?: string;
  formattedUrl?: string;
  htmlFormattedUrl?: string;
  pagemap?: Pagemap;
}

export enum DisplayLink {
  WWWHbomaxCOM = "www.hbomax.com",
  WWWNetflixCOM = "www.netflix.com",
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
  cse_thumbnail?: CSEThumbnail[];
  metatags?: Metatag[];
  cse_image?: CSEImage[];
}

export interface CSEImage {
  src?: string;
}

export interface CSEThumbnail {
  src?: string;
  width?: string;
  height?: string;
}

export interface Metatag {
  "og:image"?: string;
  "twitter:title"?: string;
  "og:image:width"?: string;
  "og:image:alt"?: string;
  "twitter:card"?: TwitterCard;
  "og:site_name"?: string;
  "og:title"?: string;
  "og:image:height"?: string;
  "og:description"?: string;
  "twitter:image"?: string;
  "next-head-count"?: string;
  "twitter:image:alt"?: string;
  "twitter:site"?: TwitterSite;
  viewport?: string;
  "twitter:description"?: string;
  "og:url"?: string;
  "al:ios:app_name"?: string;
  "al:android:package"?: string;
  "al:ios:url"?: string;
  "al:ios:app_store_id"?: string;
  "al:android:url"?: string;
  "al:android:app_name"?: string;
}

export enum TwitterCard {
  SummaryLargeImage = "summary_large_image",
}

export enum TwitterSite {
  Hbomax = "@hbomax",
  Netflix = "@netflix",
}

export interface Queries {
  request?: NextPage[];
  nextPage?: NextPage[];
}

export interface NextPage {
  title?: string;
  totalResults?: string;
  searchTerms?: string;
  count?: number;
  startIndex?: number;
  inputEncoding?: string;
  outputEncoding?: string;
  safe?: string;
  cx?: string;
}

export interface SearchInformation {
  searchTime?: number;
  formattedSearchTime?: string;
  totalResults?: string;
  formattedTotalResults?: string;
}

export interface Spelling {
  correctedQuery?: string;
  htmlCorrectedQuery?: string;
}

export interface URL {
  type?: string;
  template?: string;
}
