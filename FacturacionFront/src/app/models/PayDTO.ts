export class PayDTO {
   id: number;
   idCustomer: number;
   numberBill: number;
   date: Date;
   value: number;
   idBill: number;
   typePay: number;

    constructor(){
        this.id = 0,
        this.numberBill=0,
        this.idCustomer=0,
        this.date = new Date,
        this.value = 0,
        this.idBill = 0,
        this.typePay = 2
    }
}