import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkDTO } from 'src/app/models/MarkDTO';
import { ProductsDTO } from 'src/app/models/ProductsDTO';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {
  @Input() product :ProductsDTO = new ProductsDTO  ;
  @Output() closePopupM: EventEmitter<boolean> = new EventEmitter();
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";
  typeMark : MarkDTO = new MarkDTO;

  constructor(private productService : ProductServiceService ) { }
  ngOnInit(): void {
    this.getMark();
  }
  Close(){
    this.closePopupM.emit(false);
  }
  updateProduct = (event:any) =>{
    event.preventDefault();
    this.productService.UpdateProduct(this.product).subscribe((data:any) =>{
     if (data){
       
        this.message = "Producto modificado correctamente.";
        this.type = "success";
        this.isVisible = true;
      }else{
        this.message = "Error en la modificación del Producto";
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

