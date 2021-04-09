import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.testFn();
  }

  testFn() {
    const arr = [10, 20, 30, 40];
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function() {
          console.log('Index: ' + i + ', value: ' + arr[i]);
      }, 3000);
    }
  }
}
