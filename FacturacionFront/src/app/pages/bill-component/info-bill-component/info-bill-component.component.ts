import { Component, Input, OnInit } from '@angular/core';
import { infobillDTO } from 'src/app/models/infobillDTO';
import { BillServiceService } from 'src/app/services/bill-service.service';

@Component({
  selector: 'app-info-bill-component',
  templateUrl: './info-bill-component.component.html',
  styleUrls: ['./info-bill-component.component.css']
})
export class InfoBillComponentComponent implements OnInit {
  infobill: infobillDTO = new infobillDTO();
  FechaRegistro: Date = new Date;
  @Input() billing: infobillDTO = new infobillDTO();
  idMovement : number = 0;
  constructor(private billService : BillServiceService) { 
    this.infobill.flagIva=this.billing.flagIva;
  }

  ngOnInit(): void {
    this.getBill();
    console.log(this.idMovement);
  }
  getBill(){
     this.billService.GetBillByNumber().subscribe((response:any)=>{
      this.infobill=response;
      this.idMovement = this.infobill.id;
      if (this.infobill.state){
        this.infobill.flagstate = 'Activo';
      }else{
        this.infobill.flagstate = 'Inactivo' ;
      }
      if (this.billing.flagIva){
        this.infobill.flagIva = 'SI';
      }else{
        this.infobill.flagIva = 'NO' ;
      }
    } )
    
  }

}
