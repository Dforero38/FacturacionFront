import { Component, OnInit } from '@angular/core';
import { BillingForPayDTO } from 'src/app/models/BillingForPaydto';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { BillServiceService } from 'src/app/services/bill-service.service';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-pay-component',
  templateUrl: './pay-component.component.html',
  styleUrls: ['./pay-component.component.css']
})
export class PayComponentComponent implements OnInit {

  pays: any={
    numPago:1,
    fechaRegistro: new Date,
    idCliente:null,
    tipoPago:null,
    nombre:null,
    nit:null,
    direccion:null,
    telefono:null,
    tipocliente:null,
    estado:null
   };
   
  NumFactura: number=1;
  FechaRegistro: Date = new Date;
  bills : BillingForPayDTO[] =[];             
  constructor(private billService : BillServiceService) { }
  
  ngOnInit(): void {
    this.ConsultMovementBills();
    }
    ConsultMovementBills(){
      this.billService.ConsultMovementBills().subscribe((response:any)=>{
        this.bills=response;
      } )
    }
  SaveForm= (e:any) => {
    e.preventDefault();
   }
}
