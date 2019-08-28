import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  onSearch(text) {
    this.search.emit(text);
  }

}
