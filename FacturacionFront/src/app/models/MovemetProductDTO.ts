
export class MovementProductDTO {
    id: number;
    idMovementBill: number;
    idProduct: number;
    productName: string;
    date: Date;
    quantity: number;
    unitValue: number;
    totalValue:number;

constructor(){
    this.id=0,
    this.idMovementBill=2,
    this.idProduct=0,
    this.productName = '',
    this.date= new Date;
    this.quantity=0,
    this.unitValue=0,
    this.totalValue=0
    }
}

