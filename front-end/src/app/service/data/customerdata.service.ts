import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Customer } from 'front-end/src/app/listphonenumber/listphonenumber.component';

@Injectable({
  providedIn: 'root'
})
export class CustomersdataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllCustomers(){
    return this.http.get<Customer[]>('http://localhost:8080/customers')
    .pipe(
      retry(3),
      catchError(this.handleError));
  }

  retrieveCustomersByCountry(country){
    return this.http.get<Customer[]>(`http://localhost:8080/customers/${country}`)
    .pipe(
      retry(3),
      catchError(this.handleError));
  }

  retrieveCustomersByState(state){
    return this.http.get<Customer[]>(`http://localhost:8080/customer/${state}`)
    .pipe(
      retry(3),
      catchError(this.handleError));
  }

  retrieveCustomersByCountryAndState(country,state){
    return this.http.get<Customer[]>(`http://localhost:8080/customers/${country}/${state}`)
    .pipe(
      retry(3),
      catchError(this.handleError));
  }

  // retrieveCustomersPages(page: number,size: number): Observable<any>{
  //   let params = new HttpParams();
  //   params = params.append('page', page.toString());
  //   params = params.append('size', size.toString());
  //   return this.http.get<Message>(`http://localhost:8080/customers/pages`, { params: params} ).pipe(
  //     map(response => {
  //       const array = JSON.parse(response.json()) as any[];
  //       const message = array.map(any => new Message(data))
  //     }));

  //   // .pipe(
  //   //   retry(3),
  //   //   catchError(this.handleError));
  // }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}


