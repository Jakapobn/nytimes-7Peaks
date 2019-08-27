import { Component, OnInit } from '@angular/core';
import { NytimesService } from '../service/nytimes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  $nytimesData = this.nytimesService.getNytimesAllContent();

  constructor(private nytimesService: NytimesService) { }

  ngOnInit() {
    this.nytimesService.getNytimesAllContent().subscribe(res => {
      console.log(res);
    })
  }

}
