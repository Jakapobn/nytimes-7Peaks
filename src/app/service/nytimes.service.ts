import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NytimesService {

  _apiKey = '3CczMdAGAKX7ZGwzw5aAAWiYvd4TglHU';

  constructor(private http: HttpClient) { }

  getNytimesAllContent() {
    const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${this._apiKey}`;
    return this.http.get(url);
  }


}
