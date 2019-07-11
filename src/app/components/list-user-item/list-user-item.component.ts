import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-user-item',
  templateUrl: './list-user-item.component.html',
  styleUrls: ['./list-user-item.component.scss']
})
export class ListUserItemComponent implements OnInit {
  @Input() user: object
  
  constructor() { }

  ngOnInit() {
  }

}
