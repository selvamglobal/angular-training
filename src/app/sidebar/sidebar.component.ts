import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Input() parentText:string
@Output() textfromChild = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
passtoParent(data:string){
  this.textfromChild.emit(data);
}
}
