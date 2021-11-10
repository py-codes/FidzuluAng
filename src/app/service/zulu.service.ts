import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Books } from 'src/Model/books.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZuluService {

  constructor(private http: HttpClient) { }
  booksList:Books[]=[];
  private url = 'http://localhost:3021';


  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){

    if(err.error instanceof ErrorEvent){
      console.error(`the error is as follows: ${err.error}`);
    }
    else{
      console.error(`the server returned error code ${err.status} which said ${err.error}`);

    }

  return throwError("unble to reach server , please try again");
}

 
}
function catchError(arg0: any): any {
  throw new Error('Function not implemented.');
}

