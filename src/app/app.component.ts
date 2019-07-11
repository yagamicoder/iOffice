import { Component } from '@angular/core';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'iOffice';
  users: []
  loading: boolean = false
  error: boolean = false
  errorMessage: string = ''
  search: string = ''

  constructor(private userService: UserService) { }

  ngOnInit() {
    //Fetch users on page load
    this.fetchUsers()
  }

  //Fetach all users
  fetchUsers = (query?: object) => {
    //this.loading = true
    this.error = false
    //HTTP call
    this.userService.findUsers(query).subscribe(res => {
      this.users = res as []
      //this.loading = false
    }, error => {
      this.error = false
      //this.loading = false
    })
  }
  //Search
  searchUsers = ({ target }) => {
    const { value } = target
    this.search = value
  }
}
