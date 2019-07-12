import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent {
  @Input() isCollapsed: boolean
  @Input() limit: number
  @Input() startAt: number
  @Input() orderByType: string
  @Input() orderBy: string
  @Input() onLimitChange: any
  @Input() onStartAtChange: any
  @Input() onOrderByChange: any
  @Input() onOrderByTypeChange: any
  @Input() fetchUsers: any
  @Input() clearFilters: any

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    /* Call api anytime any of the filters change */
    //Limit
    if (changes.limit) {
      const { currentValue, previousValue } = changes.limit
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
    //StartAt
    if (changes.startAt) {
      const { currentValue, previousValue } = changes.startAt
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
    //OrderBy
    if (changes.orderBy) {
      const { currentValue, previousValue } = changes.orderBy
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
    //OrderByType
    if (changes.orderByType) {
      const { currentValue, previousValue } = changes.orderByType
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
  }

}
