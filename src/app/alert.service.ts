import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
myvariable = 20;

  constructor() { }

  alertuser(alertMsg:string){
   console.log(alertMsg)
  }

}
