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
  //Fetch all iOffice users
  findUsers(query?: any) {
    const url = `${this.apiUrl}/users`;
    return this.http.get(url, getHttpOptions({}, new HttpParams()
    .set('limit', query.limit || '10')
    .set('search', query.search || '')
    .set('startAt', query.startAt || '0')
    .set('orderBy', query.orderBy || 'id')
    .set('orderByType', query.orderByType || 'desc')
    ))
  }
}
