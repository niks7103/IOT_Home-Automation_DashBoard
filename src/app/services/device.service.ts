import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:8080/api/devices'; // Backend API URL

  constructor(private http: HttpClient) {}

  getAllDevices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getDeviceById(deviceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${deviceId}`);
  }

  addDevice(device: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, device);
  }

  updateDevice(deviceId: number, device: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${deviceId}`, device);
  }

  deleteDevice(deviceId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${deviceId}`);
  }
}
