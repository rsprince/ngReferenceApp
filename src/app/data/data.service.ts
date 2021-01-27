import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getDataUrl: string = 'assets/api/users.json';
  data: any;

  constructor(private http: HttpClient) { }

  getItems() {
    this.data = this.http.get(this.getDataUrl);
    return this.data;
  }

  getItem(id:number) {

  }

  createItem(item) {

  }

  deleteItem() {

  }

  updateItem() {

  }


}
