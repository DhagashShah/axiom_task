import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SortEvent } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { Table } from 'primeng/table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  userList = [];
  first = 0;

  rows = 10;
  
  
  constructor(private service: DataService) { }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   processing: true,
    // };

    this.service.getUsers().subscribe(res => {
      this.userList = res;
      console.log(this.userList);
    })
    
  }
  
  
  

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.userList ? this.first === (this.userList.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.userList ? this.first === 0 : true;
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

}
