import { HttpHeaders } from '@angular/common/http'

const getHttpOptions = (headers = {}, params) => {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-username': 'mgillam',
      'x-auth-password': 'iOffice!',
      ...headers
    }),
    params,
  }
  return httpOptions
}

export default getHttpOptions