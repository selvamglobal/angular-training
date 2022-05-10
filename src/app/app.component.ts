import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-training';
  myProduct = "Ac";
  myMsg = "App component loaded successfully";
  usersList = [];

constructor(public alert: AlertService, public user: UsersService){

}
ngOnInit() {
  this.alert.alertuser(this.myMsg);
  console.log(this.alert.myvariable);
  this.getusers();
}
getusers(){
  this.user.getusers().subscribe(
    (res)=>{
      this.usersList = res;
    }
  );
}

}
