export class ProductsDTO {
    id: number;
    idMark: number;
    nameMark:string;
    description: string;
    price: number;
   
 
     constructor(){
        this.id= 0,
        this.idMark= 0,
        this.nameMark = '',
        this.description= '',
        this.price= 0
 }
}