import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/model/article.model';
import { NytimesService } from 'src/app/service/nytimes.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  articleDetail: ArticleModel;

  constructor(private nytimesService: NytimesService, private route: ActivatedRoute, private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.articleDetail = data.article[0];
    });
  }

  convertDate(date: string) {
    return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
  }

  linkToNytimes(web_url) {
    window.location.href = web_url;
  }

}
