import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillComponentComponent implements OnInit {

  billing: any={
    numFactura:1,
    fechaRegistro: new Date,
    idCliente:null,
    iva:false,
    nombre:null,
    nit:null,
    direccion:null,
    telefono:null,
    tipocliente:null,
    estado:null
   };
   
  clients : any = [{id:1,name:'Paula S.A.S',Tip:'Manufactura',state:'Activo'},
                  {id:2,name:'Deisy S.A.S.',Tip:'Ventas',state:'Activo'}];             
    
  bill:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  
    }
  
  SaveForm= (e:any) => {
    e.preventDefault();
    this.bill=true;
    console.log(this.bill);
   }
}
