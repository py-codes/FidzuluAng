import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZuluService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:";

  getData(serviceWithPort: string){
    return this.http.get<any>(this.url+serviceWithPort)
  }

}
