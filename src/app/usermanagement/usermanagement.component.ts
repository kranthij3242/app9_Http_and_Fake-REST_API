import { Component, OnInit } from '@angular/core';

import {UsersService} from '../users.service';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  users:object=[];
  constructor(private userserve:UsersService) { }

  ngOnInit() {
    this.getusers();
  }
getusers(){
  this.userserve.getallusers().subscribe((allusers)=>{
    this.users=allusers;
  });
}
}
