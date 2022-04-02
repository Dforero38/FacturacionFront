import { Component, Input, OnInit } from '@angular/core';
import { CreateMovementProductDTO } from 'src/app/models/CreateMovementProductDTO';
import { infobillDTO } from 'src/app/models/infobillDTO';
import { MovementProductDTO } from 'src/app/models/MovemetProductDTO';
import { ProductsDTO } from 'src/app/models/ProductsDTO';
import { BillServiceService } from 'src/app/services/bill-service.service';
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
  idMovement: number = 0 ;
  updatebill : any ;
  infobill: infobillDTO = new infobillDTO();
  subtotal : number = 0 ; 
  iva : number = 0 ; 
  total : number = 0 ; 

  constructor(private productService: ProductServiceService, private movementProductService: MovementProductServiceService, private billService : BillServiceService)
  { 
    this.valueunitChanged= this.valueunitChanged.bind(this);
    this.totalValueChanged= this.totalValueChanged.bind(this);
    
  }

  ngOnInit(): void {
    this.getProduct();
    this.getBill();
    this.getMovementProduct();
  }

  InsertMovementProduct = (e: any) => {
    e.preventDefault();
    this.productBill.idMovementBill = this.idMovement;
    if (this.productBill.id == 0)
    {
      this.movementProductService.InsertMovementProduct(this.productBill).subscribe((data: any) => {
        if (data) {
          this.getMovementProduct();
          this.getBill();
          this.message = "Producto adicionado con exito.";
          this.type = "success";
          this.isVisible = true;
          this.productBill = new MovementProductDTO;
        } else {
          this.message = "Error al adicionar producto";
          this.type = "error";
          this.isVisible = true;
        }
        this.bill = true;
       });
    }else{
      this.movementProductService.UpdateMovementProduct(this.productBill).subscribe((data:any) =>{
        if (data){
          this.getMovementProduct();
          this.getBill();
           this.message = "Producto modificado correctamente.";
           this.type = "success";
           this.isVisible = true;
           this.productBill = new MovementProductDTO;
         }else{
           this.message = "Error en la modificación del Producto";
           this.type = "error";
           this.isVisible = true;
         }
       } )
    }
    
  }
  getMovementProduct(){
    this.movementProductService.GetMovemetProduct(this.idMovement).subscribe((response:any)=>
    {
     this.selectProducts=response;
     })
  }
  
  getBill(){
     this.billService.GetBillByNumber().subscribe((response:any)=>{
      this.infobill=response;
      this.idMovement = this.infobill.id;
     
    } )
    
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

  editMovementProduct(data:CreateMovementProductDTO){
      this.productBill = data;
  }

  deleteMovementProduct(id : number) {
    this.movementProductService.DeleteMovementProduct(id).subscribe(data => {
      if (data){
        this.getMovementProduct();
        this.getBill();
        this.message = "Producto elimando correctamente.";
        this.type = "success";
        this.isVisible = true;
      }else{
        this.message = "Error en la eliminacion del Producto";
        this.type = "error";
        this.isVisible = true;
      }
     
    })

}

  FinishBill(event:any){
  
  }
}
