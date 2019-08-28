import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Output() filter = new EventEmitter();
  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  onSearch(text: string) {
    this.search.emit(text);
  }

  onFilter(text: string) {
    this.filter.emit(text);
  }

}
