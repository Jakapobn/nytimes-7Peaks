import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyBarComponent implements OnInit {
  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;

  @Output() search = new EventEmitter();
  @Output() filter = new EventEmitter();

  sticky: boolean = false;
  elementPosition: any;
  query: string;
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
    this.filter.emit(text)
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
