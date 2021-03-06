import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StickyBarComponent implements OnInit {
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;

  @Input() useSearch: boolean;
  @Output() search = new EventEmitter();
  @Output() filter = new EventEmitter();

  sticky: boolean = false;
  elementPosition: any;
  query: string;
  queryBy = '';
  items = [
    {
      label: 'Firstly',
      icon: 'pi pi-sort-amount-up',
    }, {
      label: 'Latest',
      icon: 'pi pi-sort-amount-down',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  onSearch() {
    this.search.emit(this.query)
  }

  onClickFilter(text: string) {
    this.queryBy = text;
    this.filter.emit(text)
  }

  cancleFilter(queryBy: string) {
    this.queryBy = queryBy;
    this.filter.emit(queryBy)
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
