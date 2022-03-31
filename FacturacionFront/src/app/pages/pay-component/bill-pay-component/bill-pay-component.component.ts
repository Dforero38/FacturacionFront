import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-pay-component',
  templateUrl: './bill-pay-component.component.html',
  styleUrls: ['./bill-pay-component.component.css']
})
export class BillPayComponentComponent implements OnInit {

  billpayF: any;
  billing: any = [{id:1,numero:1,fecha:new Date,saldoCartera:1500000,abonoCartera:0},
                  {id:2,numero:2,fecha:new Date,saldoCartera:3800000,abonoCartera:0}];

  constructor() { }

  ngOnInit(): void {
  }

}
