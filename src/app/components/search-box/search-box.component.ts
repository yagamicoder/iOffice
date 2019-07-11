import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  @Input() onSearchChange: any
  @Input() fetchUsers: any
  @Input() search: string

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    /* Call api anytime the search input changes */
    if (changes.search) {
      const { currentValue, previousValue } = changes.search
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
  }

}
