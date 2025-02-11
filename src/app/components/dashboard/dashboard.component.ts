import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalDevices: number = 0;
  activeDevices: number = 0;
  energyConsumption: number = 0;
  temperature: number = 24; // Default temperature
  isRecording: boolean = false;

  cameraList = [
    { name: 'Front Door', url: 'assets/images/front-door.jpg' },
    { name: 'Living Room', url: 'assets/images/living-room.jpg' },
    { name: 'Backyard', url: 'assets/images/backyard.jpg' }
  ];
  currentCameraUrl: string = this.cameraList[0].url;

  activityLogs: string[] = [];
  
  devices = [
    { id: 1, name: 'Living Room Light', status: 'OFF', energy: 10, room: 'Living Room' },
    { id: 2, name: 'Air Conditioner', status: 'ON', energy: 1500, room: 'Bedroom' },
    { id: 3, name: 'Smart TV', status: 'OFF', energy: 200, room: 'Living Room' },
    { id: 4, name: 'Refrigerator', status: 'ON', energy: 500, room: 'Kitchen' },
    { id: 5, name: 'Heater', status: 'OFF', energy: 1000, room: 'Bathroom' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateDashboardMetrics();
  }

  toggleDevice(device: any) {
    device.status = device.status === 'ON' ? 'OFF' : 'ON';
    this.activityLogs.unshift(`${device.name} turned ${device.status}`);
    this.updateDashboardMetrics();
  }

  toggleAllDevices() {
    const allOn = this.devices.every(device => device.status === 'ON');
    this.devices.forEach(device => device.status = allOn ? 'OFF' : 'ON');
    this.activityLogs.unshift(`All devices turned ${allOn ? 'OFF' : 'ON'}`);
    this.updateDashboardMetrics();
  }

  lockDoors() {
    this.activityLogs.unshift('All doors locked');
    alert('Doors have been locked securely.');
  }

  adjustTemperature() {
    this.temperature = Math.floor(Math.random() * (30 - 18 + 1)) + 18;
    this.activityLogs.unshift(`Temperature adjusted to ${this.temperature}°C`);
  }

  updateDashboardMetrics() {
    this.totalDevices = this.devices.length;
    this.activeDevices = this.devices.filter(device => device.status === 'ON').length;
    this.energyConsumption = this.devices
      .filter(device => device.status === 'ON')
      .reduce((total, device) => total + device.energy, 0);
  }

  switchCamera(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedCamera = this.cameraList.find(cam => cam.url === target.value);
    if (selectedCamera) {
      this.currentCameraUrl = selectedCamera.url;
      this.activityLogs.unshift(`Switched to camera: ${selectedCamera.name}`);
    }
  }

  captureSnapshot() {
    this.activityLogs.unshift('Snapshot captured.');
    alert('Snapshot captured successfully!');
  }

  toggleRecording() {
    this.isRecording = !this.isRecording;
    this.activityLogs.unshift(`Recording ${this.isRecording ? 'started' : 'stopped'}.`);
  }

  toggleNightMode() {
    this.activityLogs.unshift('Night mode toggled.');
    alert('Night mode activated.');
  }

  logout() {
    localStorage.removeItem('authToken'); // Clear authentication data
    this.activityLogs.unshift('User logged out.');
    this.router.navigate(['/login']); // Redirect to login page
  }
}
