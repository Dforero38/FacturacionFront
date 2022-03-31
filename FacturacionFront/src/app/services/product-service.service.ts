import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProductsDTO } from '../models/CreateProductsDTO';
import { MarkDTO } from '../models/MarkDTO';
import { ProductsDTO } from '../models/ProductsDTO';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  myAppUrl: string ='';

  constructor(private http : HttpClient ) { 
    console.log(environment.endpoint); 
    this.myAppUrl=environment.endpoint;   
  }

  GetProduct(){
    
    return this.http.get<ProductsDTO>(`${this.myAppUrl}Product/GetProduct`)
                    .pipe(retry(0),map((response => {
                      return response;
                    })));
  }

  InsertProduct(createproductsDTO: CreateProductsDTO) : Observable<any>{
    return this.http.post(`${this.myAppUrl}Product/InsertProduct`, createproductsDTO)
    .pipe(retry(0),map((response => {
      return response;
    })));                 
  }

  UpdateProduct(productsDTO: ProductsDTO) : Observable<any>{
    return this.http.put(`${this.myAppUrl}Product/UpdateProduct`, productsDTO)
    .pipe(retry(0),map((response => {
      return response;
    })));                 
  }

  GetMark(){   
    return this.http.get<MarkDTO>(`${this.myAppUrl}Product/GetMark`)
                    .pipe(retry(0),map((response => {
                       return response;
                        })));
    }
 
    DeleteProduct(id: number) {
      const params = new HttpParams({ fromObject: { id } })
      return this.http.delete(`${this.myAppUrl}Product/DeleteProduct` , { params })
      .pipe(retry(0),map((response => {
        return response;
      })));  
    }
  
}
