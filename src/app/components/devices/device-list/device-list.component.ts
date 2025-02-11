import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DeviceDetailsComponent } from '../device-details/device-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-list',
  standalone: true, // ✅ Make component standalone
  imports: [CommonModule, FormsModule,RouterModule], // ✅ Correct placement of imports
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  searchTerm: string = '';
  selectedRoom: string = '';
  availableRooms: string[] = [];
  filteredDevices: any[] = [];

  newDevice = { name: '', room: '', energy: 0, status: 'OFF' };

  devices = [
    { id: 1, name: 'Living Room Light', status: 'OFF', energy: 10, room: 'Living Room' },
    { id: 2, name: 'Air Conditioner', status: 'ON', energy: 1500, room: 'Bedroom' },
    { id: 3, name: 'Smart TV', status: 'OFF', energy: 200, room: 'Living Room' },
    { id: 4, name: 'Refrigerator', status: 'ON', energy: 500, room: 'Kitchen' },
    { id: 5, name: 'Heater', status: 'OFF', energy: 1000, room: 'Bathroom' }
  ];

  ngOnInit(): void {
    this.updateAvailableRooms();
    this.filterDevices();
  }

  toggleDevice(device: any) {
    device.status = device.status === 'ON' ? 'OFF' : 'ON';
  }

  removeDevice(device: any) {
    this.devices = this.devices.filter(d => d.id !== device.id);
    this.updateAvailableRooms();
    this.filterDevices();
  }

  addDevice() {
    if (this.newDevice.name && this.newDevice.room && this.newDevice.energy > 0) {
      const newId = this.devices.length ? Math.max(...this.devices.map(d => d.id)) + 1 : 1;
      this.devices.push({ id: newId, ...this.newDevice });
      this.newDevice = { name: '', room: '', energy: 0, status: 'OFF' };
      this.updateAvailableRooms();
      this.filterDevices();
    } else {
      alert('Please enter valid device details.');
    }
  }

  filterDevices() {
    this.filteredDevices = this.devices.filter(device => 
      device.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedRoom === '' || device.room === this.selectedRoom)
    );
  }

  sortDevices() {
    this.filteredDevices.sort((a, b) => (a.status === 'ON' ? -1 : 1));
  }

  updateAvailableRooms() {
    this.availableRooms = [...new Set(this.devices.map(device => device.room))];
  }
}
