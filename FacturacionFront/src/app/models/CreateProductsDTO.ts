export class CreateProductsDTO {
    idMark: number;
    description: string;
    price: number;
   
 
     constructor(){
        this.idMark= 0,
        this.description= '',
        this.price= 0
 }
}