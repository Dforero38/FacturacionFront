import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { CreateBillDTO } from 'src/app/models/CreateBillDTO';
import { BillServiceService } from 'src/app/services/bill-service.service';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillComponentComponent implements OnInit {

  billing: CreateBillDTO = new CreateBillDTO;
  clients :  ClientDTO = new ClientDTO;         
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";  
  bill:boolean = false;
  constructor(private billService : BillServiceService, private clientService : ClientsServiceService ) 
  { }
  
  ngOnInit(): void {
    this.getCustomer();
    }

    getCustomer(){
      this.clientService.GetCustomer().subscribe((response:any)=>{
        this.clients=response;
      } )
    }
    SaveForm = (e: any) => {
      e.preventDefault();
      this.billService.InsertBill(this.billing).subscribe((data: any) => {
        if (data) {
          this.message = "Generando Factura.";
          this.type = "success";
          this.isVisible = true;
          this.billing = new CreateBillDTO;
        } else {
          this.message = "Error Generando Factura";
          this.type = "error";
          this.isVisible = true;
        }
        this.bill = true;
       });
    }
}
