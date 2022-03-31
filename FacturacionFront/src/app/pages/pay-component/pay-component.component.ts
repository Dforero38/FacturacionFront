import { Component, OnInit } from '@angular/core';

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
  clients : any = [{id:1,name:'Paula S.A.S',Tip:'Manufactura',state:'Activo'},
                  {id:2,name:'Deisy S.A.S.',Tip:'Ventas',state:'Activo'}];             
  typePay: any =[{id:1, name:'Efectivo'},{id:2, name:'Tarjeta'}]  
  pay:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  
    }
  
  SaveForm= (e:any) => {
    e.preventDefault();
    this.pay=true;
   }
}
