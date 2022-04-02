import { Component, OnInit } from '@angular/core';
import { BillingForPayDTO } from 'src/app/models/BillingForPayDTO';
import { PayDTO } from 'src/app/models/PayDTO';
import { BillServiceService } from 'src/app/services/bill-service.service';
import { PayServiceService } from 'src/app/services/pay-service.service';

@Component({
  selector: 'app-pay-component',
  templateUrl: './pay-component.component.html',
  styleUrls: ['./pay-component.component.css']
})
export class PayComponentComponent implements OnInit {

  pays: PayDTO = new PayDTO;
   isVisible: boolean = false;
   message: string ="message";
   type: string = "error";
   
  NumFactura: number=1;
  FechaRegistro: Date = new Date;
  bills : BillingForPayDTO[] =[];             
  constructor(private billService : BillServiceService, private payService : PayServiceService) { }
  
  ngOnInit(): void {
    this.ConsultMovementBills();
    }
    ConsultMovementBills(){
      this.billService.ConsultMovementBills().subscribe((response:any)=>{
        this.bills=response;
      } )
    }
  SaveForm= (e:any) => {
    debugger
    e.preventDefault();
    this.payService.InsertPay(this.pays).subscribe((data:any) =>{
      if (data){
         this.message = "Recaudo almacenado.";
         this.type = "success";
         this.isVisible = true;
         this.pays = new PayDTO;
       }else{
         this.message = "Error en almacenamiento de Recaudo";
         this.type = "error";
         this.isVisible = true;
       }
     } )
   }
}
