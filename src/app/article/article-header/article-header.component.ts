import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ArticleModel } from 'src/app/model/article.model';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleHeaderComponent implements OnInit {

  @Input() articleDetail: any;

  link = {};
  loading: boolean;

  constructor() { }

  ngOnInit() {
    if (this.articleDetail.multimedia.length > 0) {
      this.articleDetail.multimedia.filter(res => {
        if (res['subType'] === "largeWidescreen1050") {
          this.link = `https://www.nytimes.com/${res['url']}`;
        } else {
          this.link = 'assets/image/No_image_available.svg';
        }
      })
    } else {
      this.link = 'assets/image/No_image_available.svg';
    }
  }

}
