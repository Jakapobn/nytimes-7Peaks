import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../service/nytimes.service';
import { ArticleModel } from '../model/article.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  nytimesData$ = this.nytimesService.getNytimesAllContent();
  query: string;
  filter = '';

  constructor(private nytimesService: NytimesService, private datePipe: DatePipe, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.nytimesService.getNytimesAllContent().subscribe(res => {
      console.log(res);
    })
  }

  onSelectArticle(article: ArticleModel) {
    console.log(article);
    this.router.navigate(['article/detail', { url: article.url }]);
  }

  convertDate(date: string) {
    return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
  }

}
