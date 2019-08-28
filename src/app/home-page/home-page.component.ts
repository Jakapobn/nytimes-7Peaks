import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../service/nytimes.service';
import { ArticleModel } from '../model/article.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  $nytimesData = this.nytimesService.getNytimesAllContent();
  query: string;

  constructor(private nytimesService: NytimesService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.nytimesService.getNytimesAllContent().subscribe(res => {
      console.log(res);
    })
  }

  onSelectArticle(article: ArticleModel) {
    console.log(article);
    console.log(this.query);
  }

  convertDate(date: string) {
    return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
  }

}
