import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/model/article.model';
import { NytimesService } from 'src/app/service/nytimes.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(private nytimesService: NytimesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
