import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateProductsDTO } from 'src/app/models/CreateProductsDTO';
import { MarkDTO } from 'src/app/models/MarkDTO';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-create-product-component',
  templateUrl: './create-product-component.component.html',
  styleUrls: ['./create-product-component.component.css']
})
export class CreateProductComponentComponent implements OnInit {
  product: CreateProductsDTO = new CreateProductsDTO;
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  typeMark : MarkDTO = new MarkDTO;

  constructor(private productService : ProductServiceService ){}

  ngOnInit(): void {
    this.getMark();
   }
  Close(){
    this.closePopup.emit(false);
  }
  insertProduct = (event:any) => {
    event.preventDefault();
    this.productService.InsertProduct(this.product).subscribe((data:any) =>{
     if (data){
        this.message = "Producto creado correctamente.";
        this.type = "success";
        this.isVisible = true;
        this.product = new CreateProductsDTO;
      }else{
        this.message = "Error en la creación del Producto";
        this.type = "error";
        this.isVisible = true;
      }
      this.Close();
    } )
  }
  getMark(){
    this.productService.GetMark().subscribe((response:any)=>{
      this.typeMark=response;
    } )
  }
}