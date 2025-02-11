import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Schedule {
  id: number;
  deviceName: string;
  action: 'ON' | 'OFF';
  time: string;
  repeat: string;
}

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
  imports:[FormsModule,CommonModule,RouterModule]
})
export class SchedulingComponent implements OnInit {
  schedules: Schedule[] = [];
  devices = ['Living Room Light', 'Air Conditioner', 'Smart TV', 'Refrigerator', 'Heater'];
  
  newSchedule: Schedule = {
    id: 0,
    deviceName: '',
    action: 'ON',
    time: '',
    repeat: 'Once'
  };

  constructor() {}

  ngOnInit(): void {}

  addSchedule() {
    if (!this.newSchedule.deviceName || !this.newSchedule.time) {
      alert('Please select a device and time.');
      return;
    }
    this.newSchedule.id = this.schedules.length + 1;
    this.schedules.push({ ...this.newSchedule });
    this.resetForm();
  }

  deleteSchedule(id: number) {
    this.schedules = this.schedules.filter(schedule => schedule.id !== id);
  }

  resetForm() {
    this.newSchedule = { id: 0, deviceName: '', action: 'ON', time: '', repeat: 'Once' };
  }
}
