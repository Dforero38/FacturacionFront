import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientDTO } from '../models/ClientDTO';
import { CreateClientDTO } from '../models/CreateClientDTO';
import { TypeCustomerDTO } from '../models/TypeCustomerDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  myAppUrl: string ='';

  constructor(private http : HttpClient ) { 
    console.log(environment.endpoint); 
    this.myAppUrl=environment.endpoint;   
  }

  GetCustomer(){
    
    return this.http.get<ClientDTO>(`${this.myAppUrl}Customers/GetCustomer`)
                    .pipe(retry(0),map((response => {
                      return response;
                    })));
  }

  InsertCustomer(createclientDTO: CreateClientDTO) : Observable<any>{
    return this.http.post(`${this.myAppUrl}Customers/InsertCustomer`, createclientDTO)
    .pipe(retry(0),map((response => {
      return response;
    })));                 
  }

  UpdateCustomer(clientDTO: ClientDTO) : Observable<any>{
    return this.http.put(`${this.myAppUrl}Customers/UpdateCustomer`, clientDTO)
    .pipe(retry(0),map((response => {
      return response;
    })));                 
  }

  GetTypeCustomer(){   
    return this.http.get<TypeCustomerDTO>(`${this.myAppUrl}Customers/GetTypeCustomer`)
                    .pipe(retry(0),map((response => {
                       return response;
                        })));
  }
  DeleteCustomer(id: number) {
    const params = new HttpParams({ fromObject: { id } })
    return this.http.delete(`${this.myAppUrl}Customers/DeleteCustomer` , { params })
    .pipe(retry(0),map((response => {
      return response;
    })));  
  }


 


}
