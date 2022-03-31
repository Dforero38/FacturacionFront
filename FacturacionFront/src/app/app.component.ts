import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FacturacionFront';
  tabs: any=[];
  tabContent: number=0;

  constructor(){
    this.tabs=[
      {
        id: 0,
        icon:"home",
        text: "",
        content: "0",
      },
      {
        id: 1,
        icon:"group",
        text: "Cliente",
        content: "1",
      },
      {
        id: 2,
        icon:"box",
        text: "Producto",
        content: "2",
      },
      {
        id: 3,
        icon:"textdocument",
        text: "Factura",
        content: "3",
      },
      {
        id: 4,
        icon:"money",
        text: "Recaudo",
        content: "4",
      }      
    ]
  }
  selectTab(e: any) {
    if (!e.itemData) return;
    this.tabContent = e.itemData.content;
  }
}
