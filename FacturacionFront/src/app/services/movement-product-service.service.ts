import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateMovementProductDTO } from '../models/CreateMovementProductDTO';
import { MovementProductDTO } from '../models/MovemetProductDTO';

@Injectable({
  providedIn: 'root'
})
export class MovementProductServiceService {
  myAppUrl: string = '';

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
  }

  InsertMovementProduct (movementProductDTO: CreateMovementProductDTO): Observable<any> {
    return this.http.post(`${this.myAppUrl}MovementProduct/InsertMovementProduct`,movementProductDTO)
    .pipe(retry(0), map((response => {
      return response;
  })));
  }
  GetMovemetProduct(idMovementBill: number) {
    const params = new HttpParams({ fromObject: { idMovementBill } })
    return this.http.get<MovementProductDTO>(`${this.myAppUrl}MovementProduct/GetMovementProduct`, { params })
                    .pipe(retry(0),map((response => {
                      return response;
                    })));
  }
  UpdateMovementProduct(movementProductDTO: CreateMovementProductDTO) : Observable<any>{
    return this.http.put(`${this.myAppUrl}MovementProduct/UpdateMovementProduct`, movementProductDTO)
    .pipe(retry(0),map((response => {
      return response;
    })));                 
  }

    DeleteMovementProduct(id: number) {
      const params = new HttpParams({ fromObject: { id } })
      return this.http.delete(`${this.myAppUrl}MovementProduct/DeleteMovementProduct` , { params })
      .pipe(retry(0),map((response => {
        return response;
      })));  
    }
}
