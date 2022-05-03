import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 myvalue = "passed from parent";
 datafromChildis = 'as';
  constructor() { }

  ngOnInit(): void {
  }
addItem(newdata:any){
  this.datafromChildis = newdata;
}
}
