import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL = environment.baseURL+'users';

  constructor(public http: HttpClient) { }

  getusers():Observable<any>{
    return this.http.get(this.baseURL)
  }
}
