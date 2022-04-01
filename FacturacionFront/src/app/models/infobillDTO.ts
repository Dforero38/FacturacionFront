export class infobillDTO {
    id: number;
    numBill:number;
    registrationDate: Date;
    idCostumer?:number;
    flagIva:string;
    businessName:string;
    nit:number;
    address:string;
    phone:number;
    TypeCustomer:string;
    state:string;
    flagstate :string;

    constructor(){
        this.id = 0;
        this.numBill=1,
        this.registrationDate=new Date,
        this.idCostumer=0,
        this.flagIva='',
        this.businessName='',
        this.nit=0,
        this.address='',
        this.phone=0,
        this.TypeCustomer='',
        this.state='',
        this.flagstate = ''
    }
}

