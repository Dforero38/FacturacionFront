import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pay-component',
  templateUrl: './info-pay-component.component.html',
  styleUrls: ['./info-pay-component.component.css']
})
export class InfoPayComponentComponent implements OnInit {
  infopay: []=[];
  NumFactura: number=1;
  FechaRegistro: Date = new Date;
  clients : any = [{id:1,name:'Paula S.A.S',Tip:'Manufactura',state:'Activo'},
                  {id:2,name:'Deisy S.A.S.',Tip:'Ventas',state:'Activo'}]; 

  constructor() { }

  ngOnInit(): void {
  }

}
