export class CreateClientDTO {
    idTypeCustomer: number;
    businessName: string;
    nit: number;
    address: string;
    phone: string;
    state: boolean;
    registrationDate: Date;
 
     constructor(){
         this.idTypeCustomer = 0,
         this.businessName ='',
         this.nit = 0,
         this.address = '',
         this.phone = '',
         this.state = true,
         this.registrationDate =new Date
     }
 }