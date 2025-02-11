import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
  imports:[CommonModule,RouterModule]
})
export class DeviceDetailsComponent implements OnInit {
  device: any;

  devices = [
    { id: 1, name: 'Living Room Light', status: 'OFF', energy: 10, room: 'Living Room' },
    { id: 2, name: 'Air Conditioner', status: 'ON', energy: 1500, room: 'Bedroom' },
    { id: 3, name: 'Smart TV', status: 'OFF', energy: 200, room: 'Living Room' },
    { id: 4, name: 'Refrigerator', status: 'ON', energy: 500, room: 'Kitchen' },
    { id: 5, name: 'Heater', status: 'OFF', energy: 1000, room: 'Bathroom' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.device = this.devices.find(d => d.id === id);
    if (!this.device) {
      alert('Device not found!');
      this.router.navigate(['/devices']);
    }
  }

  toggleStatus() {
    this.device.status = this.device.status === 'ON' ? 'OFF' : 'ON';
  }

  goBack() {
    this.router.navigate(['/devices']);
  }
}
