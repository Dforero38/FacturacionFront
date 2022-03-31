import { Component, Input, OnInit } from '@angular/core';
import { infobillDTO } from 'src/app/models/infobillDTO';

@Component({
  selector: 'app-info-bill-component',
  templateUrl: './info-bill-component.component.html',
  styleUrls: ['./info-bill-component.component.css']
})
export class InfoBillComponentComponent implements OnInit {
  infobill: []=[];
  FechaRegistro: Date = new Date;
  @Input() billing: infobillDTO = new infobillDTO();

    clients : any = [{id:1,name:'Paula S.A.S',Tip:'Manufactura',state:'Activo'},
                  {id:2,name:'Deisy S.A.S.',Tip:'Ventas',state:'Activo'}]; 
  constructor() { }

  ngOnInit(): void {
  }
}
