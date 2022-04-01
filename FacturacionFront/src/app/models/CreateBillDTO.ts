export class CreateBillDTO {
    idCustomer: number;
    idTransactionType: number;
    numberBill:number;
    date: Date;
    total: number;
    subTotal: number;
    flagIva: boolean;
    iva: number;


    constructor(){
        this.idCustomer =0;
        this.idTransactionType =1;
        this.numberBill=0;
        this.date= new Date;
        this.total =0;
        this.subTotal=0;
        this.iva=0;
        this.flagIva=false;
    }
}