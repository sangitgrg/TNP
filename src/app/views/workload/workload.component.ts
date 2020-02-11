import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkloadService } from './workload-services';
import { WorkloadModel } from '../../model/workload.model';
// import { moment } from 'ngx-bootstrap/chronos/test/chain';
import * as  moment from 'moment'
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-workload',
  templateUrl: './workload.component.html',
  styleUrls: ['./workload.component.css']
})
export class WorkloadComponent implements OnInit {
  users = [];
  iconClass = "";
  usersWorkload: WorkloadModel;
  totalDays: number;
  daysArray = [];
  totalWeek: number;
  remainingDays: number;
  Arr = Array;
  currentMonth: string;
  @ViewChild('wightModal') public wightModal: ModalDirective;

  constructor(private workloadService: WorkloadService) {
    this.users.push("Raol");
    this.users.push("Gonzalez");
    this.users.push("Heisenberg");
    this.users.push("Moriarty");
    this.users.push("Spectre");
    this.users.push("Bond");
    this.iconClass = "fa fa-bars"
  }

  ngOnInit() {
    const dateObj = new Date();
    this.totalDays = this.daysInMonth(dateObj.getFullYear(), dateObj.getMonth() + 1)
    this.totalWeek = Math.floor(this.totalDays / 7);
    this.remainingDays = this.totalDays % 7
    this.currentMonth = moment().format('MMM');
    // this.totalWeek = Array().fill(this.totalWeek).map((x,i)=>i);
    this.daysArray = this.getDaysArray(dateObj.getFullYear(), dateObj.getMonth() + 1);
    this.usersWorkload = this.workloadService.getWorkload();
    console.log(this.usersWorkload.WorkloadData)
  }

  private handleKeyEvent(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      // Your code
      return;
    }
  }

  //
  getDaysArray(year, month) {
    const monthIndex = month - 1
    const names = Object.freeze(
      ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']);
    const date = new Date(year, monthIndex, 1);
    const result = [];
    while (date.getMonth() == monthIndex) {
      result.push(`${date.getDate()}-${names[date.getDay()]}`);
      date.setDate(date.getDate() + 1);
    }
    return result;
  }

  // get all days in month
  daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  setWeekHeaders() {

  }

  getColorforLoad(load: number) {
    let color = '#6f6aad82';
    if (load > 100) {
      color = 'red'
    } else if (load === 100) {
      color = 'green';
    }
    else if (load === 0) {
      color = '#9c9c9a';
    }
    return color;
  }

}
