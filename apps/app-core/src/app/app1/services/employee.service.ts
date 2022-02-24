import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient, @Inject('HOST_NAME') private host: string) { }
  async getEmployee () {
    return await lastValueFrom(this.http.get(`${this.host}/employees`));
  }

  async saveEmployee(model: any) {
    return await lastValueFrom(this.http.put(`${this.host}/employees`, model));
  }
}
