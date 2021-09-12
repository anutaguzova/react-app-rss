export interface Article {
  author: string;
  content: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  url: string;
}

export interface Get200Articles {
  articles: Article[];
  totalResults: number;
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
