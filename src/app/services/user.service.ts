import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import getHttpOptions from '../../utils/getHttpOptions'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  findUsers(query?: object) {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url, getHttpOptions({}, new HttpParams().set('limit', '10').set('search', query.search)))
  }
}
