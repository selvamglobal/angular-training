import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
child = '';
  @Input() dataFromParent:string='';
  @Input() anotherdataFromParent:string='';
  @Output() dataFromChild = new EventEmitter<string>()
  // @ViewChild(childInput) child:ElementRef



  childtext = "Child Text"
  constructor() { }

  ngOnInit(): void {
  }
  passtoParent(value:string){
    this.dataFromChild.emit(value);
  }
}
