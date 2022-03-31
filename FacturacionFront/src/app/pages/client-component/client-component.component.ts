import { Component, Input, OnInit } from '@angular/core';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent implements OnInit {
 
  clients : ClientDTO[] =[]; 
  closePopup : boolean = false;
  closePopupM : boolean = false;
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";
  client : ClientDTO = new ClientDTO;
  
  constructor(private clientService : ClientsServiceService ) { }

  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer(){
    this.clientService.GetCustomer().subscribe((response:any)=>{
      this.clients=response;
    } )
  }
  deleteCustomer(id : number) {
    this.clientService.DeleteCustomer(id).subscribe(data => {
      if (data){
        this.message = "Cliente elimando correctamente.";
        this.type = "success";
        this.isVisible = true;
      }else{
        this.message = "Error en la eliminacion del Cliente";
        this.type = "error";
        this.isVisible = true;
      }
      this.getCustomer();
    })
  }
  editClient(data:ClientDTO){
    this.client = data;
    this.closePopupM = true;
  }

  processClient(event: any){
    this.closePopupM = false;
   this.closePopup = false;
   this.getCustomer();
 }
}
