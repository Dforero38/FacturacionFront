export class ClientDTO {
   id: number;
   idTypeCustomer: number;
   descriptionTypeCustomer: string;
   businessName: string;
   nit: number;
   address: string;
   phone: string;
   state: boolean;
   registrationDate: Date;

    constructor(){
        this.id = 0,
        this.idTypeCustomer = 0,
        this.descriptionTypeCustomer='',
        this.businessName ='',
        this.nit = 0,
        this.address = '',
        this.phone = '',
        this.state = true,
        this.registrationDate =new Date
    }
}