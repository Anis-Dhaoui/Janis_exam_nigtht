import { USER } from './../models/UserModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  public url = environment.url + "users"

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<USER[]>(this.url);
  }

  removeUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateUser(u: USER) {
    return this.http.put(`${this.url}/${u.id}`, u)
  }
}
