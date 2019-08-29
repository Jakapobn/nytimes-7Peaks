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

  setNytimesAllContentData(data) {
    this.nytimesData = data;
  }


  getNytimesAllContentData() {
    return this.nytimesData;
  }

  setNytimesArticle(article: ArticleModel) {
    this.nytimesArticle = article;
  }

  getNytimesArticle() {
    return this.nytimesArticle;
  }


}
