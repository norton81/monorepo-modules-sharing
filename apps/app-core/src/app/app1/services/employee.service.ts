import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  async getEmployee () {
    return await lastValueFrom(this.http.get('http://localhost:1234/employees'));
  }

  async saveEmployee(model: any) {
    return await lastValueFrom(this.http.put('http://localhost:1234/employees', model));
  }
}
