import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loading: boolean = false
  error: boolean = false
  user: object = {}

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id } = params
      if (id) {
        //Fetch user profile
        this.loading = true
        this.error = false
        this.userService.findUser(id).subscribe(user => {
          this.user = user
          this.loading = false
          this.error = false
        }, error => {
          this.loading = false
          this.error = false
        })
      }
    })
  }

}
