import { Component, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  //Inputs
  @Input() users: []
  @Input() loading: boolean
  @Input() error: boolean
  @Input() errorMessage: string
  @Input() search: string
  @Input() searchUsers: any
  @Input() fetchUsers: any

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if(changes.search) {
      const { currentValue, previousValue } = changes.search
      if(currentValue !== previousValue) {
        this.fetchUsers({ search: currentValue })
      }
    }
  }
}
