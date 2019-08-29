import { Component } from '@angular/core';
import { NytimesService } from './service/nytimes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nytimesData$ = this.nytimesService.getNytimesAllContent();

  constructor(private nytimesService: NytimesService) {
    this.nytimesService.setNytimesAllContentData(this.nytimesData$);
  }

}
