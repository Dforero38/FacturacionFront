import { Component, Input, OnInit } from '@angular/core';
import { infobillDTO } from 'src/app/models/infobillDTO';
import { MovementProductDTO } from 'src/app/models/MovemetProductDTO';
import { ProductsDTO } from 'src/app/models/ProductsDTO';
import { MovementProductServiceService } from 'src/app/services/movement-product-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-bill-component',
  templateUrl: './product-bill-component.component.html',
  styleUrls: ['./product-bill-component.component.css']
})
export class ProductBillComponentComponent implements OnInit {
  productBill: MovementProductDTO = new MovementProductDTO;
  products : ProductsDTO = new ProductsDTO;
  selectProducts : MovementProductDTO[] =[]; 
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";  
  bill:boolean = false;
  @Input() idMovement : number = 0 ;
  updatebill : any ;
  constructor(private productService: ProductServiceService, private movementProductService: MovementProductServiceService)
  { 
    this.valueunitChanged= this.valueunitChanged.bind(this);
    this.totalValueChanged= this.totalValueChanged.bind(this);
    
  }

  ngOnInit(): void {
    this.getProduct();
  }

  InsertMovementProduct = (e: any) => {
    e.preventDefault();
    console.log(this.idMovement);
    this.productBill.idMovementBill = this.idMovement;
    this.movementProductService.InsertMovementProduct(this.productBill).subscribe((data: any) => {
      if (data) {
        this.message = "Generando Factura.";
        this.type = "success";
        this.isVisible = true;
        this.productBill = new MovementProductDTO;
      } else {
        this.message = "Error Generando Factura";
        this.type = "error";
        this.isVisible = true;
      }
      this.bill = true;
     });
  }


  getProduct() {
    this.productService.GetProduct().subscribe((response: any) => {
      this.products = response;
    })
  }
  valueunitChanged(event: any){
    this.productBill.unitValue = event.selectedItem.price;
  }

  totalValueChanged(){
  this.productBill.totalValue = this.productBill.unitValue * this.productBill.quantity;
  }

  UpdateBill(event:any){

  }
}
