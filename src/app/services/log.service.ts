import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private apiUrl = 'http://localhost:8080/api/logs';

  constructor(private http: HttpClient) {}

  getAllLogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getLogById(logId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${logId}`);
  }
}
