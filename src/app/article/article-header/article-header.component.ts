import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ArticleModel } from 'src/app/model/article.model';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleHeaderComponent implements OnInit {

  @Input() articleDetail: ArticleModel;

  link = {};

  constructor() { }

  ngOnInit() {
    console.log(this.articleDetail);

    this.articleDetail.multimedia.filter(res => {
      if (res['subType'] === "largeWidescreen1050") {
        this.link = `https://www.nytimes.com/${res['url']}`;
      }
    })
  }

}
