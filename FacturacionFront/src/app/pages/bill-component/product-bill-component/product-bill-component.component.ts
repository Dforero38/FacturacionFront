import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-bill-component',
  templateUrl: './product-bill-component.component.html',
  styleUrls: ['./product-bill-component.component.css']
})
export class ProductBillComponentComponent implements OnInit {
  bill: []=[];
  products : any = [{id:1,description:'Router',make:'Cisco',price:'150.000'},
                    {id:2,description:'cable RG6',make:'N/A',price:'50.000'},
                    {id:3,description:'cable RG11',make:'N/A',price:'80.000'},
                    {id:4,description:'Plato 1.2',make:'Sky',price:'2.350.000'}];
  
  selectProducts : any = [{id:1,product:'Router',quantity:5,price:'150.000',total:'750.000'},
                          {id:2,product:'cable RG6',quantity:2,price:'50.000',total:'100.000'},
                          {id:3,product:'cable RG11',quantity:10,price:'50.000' ,total:'800.000'},
                          {id:4,product:'Plato 1.2',quantity:8,price:'2.350.000', total:'18.800.000'}];                 
  constructor() { }

  ngOnInit(): void {
  }

}
