import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from '../model/article.model';

@Injectable({
  providedIn: 'root'
})
export class NytimesService {

  _apiKey = '3CczMdAGAKX7ZGwzw5aAAWiYvd4TglHU';
  nytimesData: any[];
  nytimesArticle: ArticleModel;

  constructor(private http: HttpClient) { }

  getNytimesAllContent() {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${this._apiKey}`;
    return this.http.get(url);
  }

  getNytimesBySearch(web_url: string) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${web_url}")&api-key=${this._apiKey}`;
    return this.http.get(url);
  }

  setNytimesData(data) {
    this.nytimesData = [...data];
  }

  getNytimesData() {
    return this.nytimesData
  }
}
