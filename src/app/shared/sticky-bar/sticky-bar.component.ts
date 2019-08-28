import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss']
})
export class StickyBarComponent implements OnInit {
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;

  @Output() search = new EventEmitter();

  sticky: boolean = false;
  elementPosition: any;
  query: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  onSearch() {
    this.search.emit(this.query)
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
