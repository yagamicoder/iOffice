import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  open: boolean = false

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  //Open new user modal
  openNewUserModal = (open: boolean) => this.open = open

  //Search for users
  searchUsers({ target }) {
    const { value } = target
    this.userService.findUsers(value)
  }
}
