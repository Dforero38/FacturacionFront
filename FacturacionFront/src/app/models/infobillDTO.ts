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
    total: number;
    subTotal: number;
    iva: number;

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
        this.flagstate = '',
        this.total=0,
        this.subTotal=0,
        this.iva=0
    }
}

