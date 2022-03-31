import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { CreateClientDTO } from 'src/app/models/CreateClientDTO';
import { TypeCustomerDTO } from 'src/app/models/TypeCustomerDTO';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-create-client-component',
  templateUrl: './create-client-component.component.html',
  styleUrls: ['./create-client-component.component.css']
})
export class CreateClientComponentComponent implements OnInit {
  client: CreateClientDTO =  new CreateClientDTO;
  typeClient: TypeCustomerDTO [] =[]; 
  typeStatus:any=[{id:true,nombre:'Activo'},
                  {id:false,nombre:'Inactivo'}];
  isVisible: boolean = false;
  message: string ="message";
  type: string = "error";
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();


  constructor(private clientService : ClientsServiceService ){}

  ngOnInit(): void {
    this.getTypeCustomer();
  }
  Close(){
    this.closePopup.emit(false);
  }
  getTypeCustomer(){
    this.clientService.GetTypeCustomer().subscribe((response:any)=>{
      this.typeClient=response;
    } )
  }
  insertCustomer = (event:any) =>{
    event.preventDefault();
    this.clientService.InsertCustomer(this.client).subscribe((data:any) =>{
     if (data){
        this.message = "Cliente creado correctamente.";
        this.type = "success";
        this.isVisible = true;
        this.client = new CreateClientDTO;
      }else{
        this.message = "Error en la creación del Cliente";
        this.type = "error";
        this.isVisible = true;
      }
      this.Close();  
    } )
  }
}
