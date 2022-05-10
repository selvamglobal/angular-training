import { Component } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{
 appName = "My softwaredfdf";
 isDisabled = false;
 inputText = 'Please enter text';

 public alertme() {
     alert("Button clicked");
 }

}
