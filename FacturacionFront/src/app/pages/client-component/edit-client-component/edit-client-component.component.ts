import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { TypeCustomerDTO } from 'src/app/models/TypeCustomerDTO';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-edit-client-component',
  templateUrl: './edit-client-component.component.html',
  styleUrls: ['./edit-client-component.component.css']
})
export class EditClientComponentComponent implements OnInit {
  typeStatus:any=[{id:1,nombre:'Activo'},
 {id:2,nombre:'Inactivo'}];
  @Output() closePopupM: EventEmitter<boolean> = new EventEmitter();
  @Input() client :ClientDTO = new ClientDTO ;
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";
  typeClient: TypeCustomerDTO [] =[]; 
  
  constructor(private clientService : ClientsServiceService ) { }

  ngOnInit(): void {
    this.getTypeCustomer();
  }
  Close(){
    this.closePopupM.emit(false);
  }
  updateCustomer = (event:any) =>{
    event.preventDefault();
    this.clientService.UpdateCustomer(this.client).subscribe((data:any) =>{
     if (data){
       
        this.message = "Cliente modificado correctamente.";
        this.type = "success";
        this.isVisible = true;
      }else{
        this.message = "Error en la modificación del Cliente";
        this.type = "error";
        this.isVisible = true;
      }
      this.Close();
    } )
  }
  getTypeCustomer(){
    this.clientService.GetTypeCustomer().subscribe((response:any)=>{
      this.typeClient=response;
    } )
  }
}
