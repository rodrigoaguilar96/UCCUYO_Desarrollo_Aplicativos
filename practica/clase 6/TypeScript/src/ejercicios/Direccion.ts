export class Direccion {
    calle:string;
    ciudad:string;
    constructor(calle:string, ciudad:string) {
        this.calle = calle;
        this.ciudad = ciudad;
    }
}

export class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    private direccion?:Direccion;
    getDireccion():string {
        return this.direccion.ciudad;
    }
    imprimirNombre():void {
        console.log("Mi nombre es: " + this.nombre)
    }
    imprimirPoder():void {
        console.log("No tengo poder")
    }

    constructor(nombre:string, apellido:string, direccion?:Direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
}

export class Heroe extends Persona {
    private nombreHeroe:string;
    private nivelPoder: number;
    imprimirNombre():void {
        console.log("Mi nombre real es: " + this.nombre + " Mi nombre de heroe es: " + this.nombreHeroe);
    }
    imprimirPoder():void {
        console.log("Mi poder es: " + this.nivelPoder)
    }
    setPoder(nivelPoder:number):void {
        this.nivelPoder = nivelPoder;
    }
    constructor(nombreHeroe:string, apellido:string,edad:number, nombreReal:string, dire:Direccion) {
        super(nombreReal,apellido,dire)
        this.nombreHeroe = nombreHeroe;
    }
}