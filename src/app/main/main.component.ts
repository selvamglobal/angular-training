import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
dataComingfromChild = '';


  constructor() { }

  ngOnInit(): void {
  }
  getdata(data:string){
    this.dataComingfromChild = data;
  }

}
