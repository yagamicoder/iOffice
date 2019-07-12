import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { debounce } from 'lodash'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  //Inputs
  users: []
  loading: boolean
  error: boolean
  errorMessage: string
  search: string = ''
  limit: number = 10
  startAt: number = 0
  orderBy: string = 'id'
  orderByType: string = 'desc'

  constructor(private userService: UserService) { }

  ngOnInit() {
    //Fetch users on page load
    this.fetchUsers()
  }

  //Fetch all users
  fetchUsers = debounce(() => {
    this.loading = true
    this.error = false
    const query = {
      search: this.search,
      limit: this.limit,
      startAt: this.startAt,
      orderBy: this.orderBy,
      orderByType: this.orderByType
    }
    //HTTP call
    this.userService.findUsers(query).subscribe(res => {
      this.users = res as []
      this.loading = false
    }, error => {
      this.error = false
      this.loading = false
    })
  }, 500)

  //Search
  onSearchChange = ({ target }) => this.search = target.value
  //Limit
  onLimitChange = ({ target }) => this.limit = parseInt(target.value, 10)
  //Start At
  onStartAtChange = (value) => this.startAt = parseInt(value, 10)
  //Order By
  onOrderByChange = ({ target }) => this.orderBy = target.value
  //Order By Type
  onOrderByTypeChange = ({ target }) => this.orderByType = target.value
  //Clear all filters
  clearFilters = () => {
    this.search = ''
    this.limit = 10
    this.startAt = 0
    this.orderBy = 'id'
    this.orderByType = 'desc'
  }
}
