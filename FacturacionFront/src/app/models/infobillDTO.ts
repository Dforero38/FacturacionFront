export class infobillDTO {
    numFactura:number;
    fechaRegistro: Date;
    idCliente?:number;
    iva:boolean;
    nombre:string;
    nit:number;
    direccion:string;
    telefono:number;
    tipocliente:string;
    estado:string;

    constructor(){
        this.numFactura=1,
        this.fechaRegistro=new Date,
        this.idCliente=0,
        this.iva=false,
        this.nombre='',
        this.nit=0,
        this.direccion='',
        this.telefono=0,
        this.tipocliente='',
        this.estado=''
    }
}

