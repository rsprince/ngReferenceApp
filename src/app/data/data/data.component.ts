import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  users: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dataService.getItems()
    .subscribe(items => this.users = items)
  }



}
