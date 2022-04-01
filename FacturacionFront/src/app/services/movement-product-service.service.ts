import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovementProductDTO } from '../models/MovemetProductDTO';

@Injectable({
  providedIn: 'root'
})
export class MovementProductServiceService {
  myAppUrl: string = '';

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
  }

  InsertMovementProduct (movementProductDTO: MovementProductDTO): Observable<any> {
    return this.http.post(`${this.myAppUrl}MovementProduct/InsertMovementProduct`,movementProductDTO)
    .pipe(retry(0), map((response => {
      return response;
  })));
  }
  
}
