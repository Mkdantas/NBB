import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';

const httpHeader = {
  headers : new HttpHeaders ({'Content-Type' : 'Application/json'})
};

const apiUrl = 'http://app.brasilbasquete.com.br/wp-json/wp/v2/posts';

const apiUrlMedia = 'https://app.brasilbasquete.com.br/wp-json/wp/v2/media';



@Injectable({providedIn: 'root'})
export class ServiceNameService {

  id:any;

  constructor(private httpClient: HttpClient) { }

  
  
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private API_URL: string = 'http://app.brasilbasquete.com.br/wp-json/'

  constructor(public http: HttpClient) { 
        
  }

  get(query:string = ''){
    return this.http.get(this.API_URL + query);
  }

  private errorHandle(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error ('Error Message:', error.message);
    }else {
      console.error(`Error Status: ${error.status}` + `Body: ${error.error}`
      );
    }
    return throwError('Check the code and server response from end point')
  }

  private dataExtract(res: Response){
    const body = res;
    return body || {};

  }

  getAPIData(): Observable<any> {
    return this.http.get(apiUrl, httpHeader).pipe(map(this.dataExtract),
    catchError(this.errorHandle));
  }

  getAPIDataByID(id): Observable<any> {
    return this.http.get(apiUrl + '/' + id, httpHeader).pipe(map(this.dataExtract),
    catchError(this.errorHandle));
    
  
  }

  getAPIDataByIDMedia(id): Observable<any> {
    return this.http.get(apiUrlMedia + '/' + id, httpHeader).pipe(map(this.dataExtract),
    catchError(this.errorHandle));
  }

}
