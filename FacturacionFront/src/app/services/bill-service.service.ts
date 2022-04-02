import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, retry } from "rxjs";
import { environment } from "src/environments/environment";
import { BillingForPayDTO } from "../models/BillingForPayDTO";
import { CreateBillDTO } from "../models/CreateBillDTO";


@Injectable({
    providedIn: 'root'
})
export class BillServiceService {
    myAppUrl: string = '';

    constructor(private http: HttpClient) {
        console.log(environment.endpoint);
        this.myAppUrl = environment.endpoint;
    }

    InsertBill(createbilltDTO: CreateBillDTO): Observable<any> {
        return this.http.post(`${this.myAppUrl}MovementBill/InsertMovementBill`, createbilltDTO)
            .pipe(retry(0), map((response => {
                return response;
            })));
    }
    
    GetBillByNumber (){
         return this.http.get<CreateBillDTO>(`${this.myAppUrl}MovementBill/ConsultMovementBillByNumber`)
                    .pipe(retry(0),map((response => {
                      return response;
                    })));
    }

    ConsultMovementBills (){
        return this.http.get<BillingForPayDTO>(`${this.myAppUrl}MovementBill/ConsultMovementBills`)
                   .pipe(retry(0),map((response => {
                     return response;
                   })));
   }
}