import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PayDTO } from '../models/PayDTO';

@Injectable({
  providedIn: 'root'
})
export class PayServiceService {
  myAppUrl: string ='';

  constructor(private http : HttpClient ) { 
    console.log(environment.endpoint); 
    this.myAppUrl=environment.endpoint;   
  }

  InsertPay(createPayDTO:PayDTO): Observable<any> {
    debugger
    return this.http.post(`${this.myAppUrl}Payment/InsertPayment`, createPayDTO)
        .pipe(retry(0), map((response => {
            return response;
        })));
}
}
