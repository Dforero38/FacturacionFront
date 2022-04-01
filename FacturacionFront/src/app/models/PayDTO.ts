export class PayDTO {
   id: number;
   IdCustomer: number;
   numberBill: number;
   DateTime: Date;
   Value: number;
   idBill: number;
   TypePay: number;

    constructor(){
        this.id = 0,
        this.numberBill=0,
        this.IdCustomer=0,
        this.DateTime = new Date,
        this.Value = 0,
        this.idBill = 0,
        this.TypePay = 0
    }
}