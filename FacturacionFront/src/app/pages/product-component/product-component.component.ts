import { Component, Input, OnInit } from '@angular/core';
import { ProductsDTO } from 'src/app/models/ProductsDTO';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  products : ProductsDTO[] =[]; 
  isVisible: boolean = false;
  message: string = "message";
  type: string = "error";

  closePopup: boolean = false;
  closePopupM: boolean = false;
  product = new ProductsDTO;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.GetProduct().subscribe((response: any) => {
      this.products = response;
    })
  }
  deleteProduct(id : number) {
    this.productService.DeleteProduct(id).subscribe(data => {
      if (data){
        this.message = "Producto elimando correctamente.";
        this.type = "success";
        this.isVisible = true;
      }else{
        this.message = "Error en la eliminacion del Producto";
        this.type = "error";
        this.isVisible = true;
      }
      this.getProduct();
    })
  }

  editProduct(data:ProductsDTO){
    this.product = data;
    this.closePopupM = true;
  }
  processProduct(event: any){
     this.closePopupM = false;
    this.closePopup = false;
    this.getProduct();
  }
}
