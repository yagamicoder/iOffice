import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import getHttpOptions from '../../utils/getHttpOptions'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl
  users: []

  constructor(private http: HttpClient) { 
    
  }

  createUser(data) {

  }

  findUsers(query = {}) {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url, getHttpOptions({}, new HttpParams().set('limit', '10')))
  }

  getUser(id) {

  }

  patchUser(id, data) {

  }

  removeUser(id) {

  }
}
