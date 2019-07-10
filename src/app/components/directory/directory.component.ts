import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  open: boolean = false
  users: []

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.findUsers().subscribe(res => {
      console.log(res)
      this.users = res as []
    })
  }
  //Open new user modal
  openNewUserModal = (open: boolean) => this.open = open

  //Search for users
  searchUsers({ target }) {
    const { value } = target
    this.userService.findUsers(value)
  }
}
