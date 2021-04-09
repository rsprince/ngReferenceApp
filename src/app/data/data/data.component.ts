import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

export interface User {
  id: string;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  users: any = [];
  dataSource: any;
  displayedColumns = ['id', 'name', 'phone'];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dataService.getItems()
    .subscribe(items => {
      this.users = items;
      //this.dataSource = new MatTableDataSource<User>(this.users);
    })
  }

}
