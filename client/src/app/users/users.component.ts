import { Component, OnInit } from '@angular/core';
import{ Users } from '../users'
import { UsersService } from '../users.service'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : Users[]
  constructor(private usersservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersservice.allUsers().subscribe(users=>{
      this.users = users
    })
  }

  deleteUsers(userId:number){
    this.usersservice.DeleteUser(userId).subscribe()
  }

}
