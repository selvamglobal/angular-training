import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent:string='';
  @Input() anotherdataFromParent:string='';
  @Output() dataFromChild = new EventEmitter<string>()




  childtext = "Child Text"
  constructor() { }

  ngOnInit(): void {
  }
  passtoParent(value:string){
    this.dataFromChild.emit(value);
  }
}
