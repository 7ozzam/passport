import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiBase = 'http://localhost:3000/api';
  apiURL = 'https://sdk.photoroom.com/v1';
  apiKey = 'fd24a7481f4d27d6741052516e4b671eb2c83216';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }



  cropImage(formData: any) : Observable<Blob> {
    return this.http.post(this.apiBase + '/upload/2', formData, {responseType: 'blob'});
  }

  getAllLandingPagesList(): Observable<any>  {
    return this.http.get(this.apiBase + '/documents/list', {...this.httpOptions});
  }
  getAllLandingPages(): Observable<any>  {
    return this.http.get(this.apiBase + '/documents', {...this.httpOptions});
  }

   // Error handling
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
