import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() startAt: number
  @Input() onStartAtChange: any
  @Input() fetchUsers: any
  @Input() limit: number

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.startAt) {
      const { currentValue, previousValue } = changes.startAt
      if (currentValue !== previousValue) {
        this.fetchUsers()
      }
    }
  }

}
