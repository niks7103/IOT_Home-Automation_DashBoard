import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface LogEntry {
  id: number;
  deviceName: string;
  action: 'ON' | 'OFF';
  time: string;
  status: 'Success' | 'Failed' | 'Pending';
}

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  imports:[CommonModule,RouterModule]
})
export class LogsComponent implements OnInit {
  logs: LogEntry[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs() {
    this.logs = [
      { id: 1, deviceName: 'Living Room Light', action: 'ON', time: '10:30 AM', status: 'Success' },
      { id: 2, deviceName: 'Air Conditioner', action: 'OFF', time: '12:00 PM', status: 'Failed' },
      { id: 3, deviceName: 'Smart TV', action: 'ON', time: '03:45 PM', status: 'Pending' }
    ];
  }

  clearLogs() {
    this.logs = [];
  }
}
