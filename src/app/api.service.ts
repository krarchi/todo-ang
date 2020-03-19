import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  getItem() {
    return this.http.get('http://localhost:3000/all');
  }
  addItem(data) {
    return this.http.post('http://localhost:3000/create', {data:data});
  }
  delete(data) {
    return this.http.post('http://localhost:3000/delete', {id:data});
  }
  update(data,name){
    return this.http.post('http://localhost:3000/update', {data:{name:name},id:data});
  }
}
