

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalle;
}
interface Detalle {
    autor: string;
    anio?: number;
}
const reproductor: Reproductor = {
    volumen: 90,
    segundo: 30,
    cancion: "Loca",
    detalle: {
        autor: "Duki"
    }
};
const {volumen, segundo, detalle } = reproductor;
const {autor: autorDetalle} = detalle
//O
//const {volumen, segundo, detalle:{autor} } = reproductor;
console.log(reproductor.volumen);
console.log(volumen + segundo + autorDetalle);

const personajes: string[] = ["batman", "superman", "flash"];
const [p1, superman, flash] = personajes;
const [ , , p3] = personajes;
console.log("Personaje 1" + personajes[0]);
console.log("Personaje 1" + p1 );
console.log("Personaje 3" + p3 + "es igual a" + flash +"==" + personajes[3]);

export interface Producto {
    desc: string;
    precio: number;
}

const tel: Producto = {
    desc: "Samsung S21",
    precio: 1000
}

const tablet: Producto = {
    desc: "iPad",
    precio: 1000
}
const articulos: Producto[] = [tel,tablet];

function calculaIntereses(productos: Producto[]): number {
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio
    })
    return total * 0.15;
}
function calculaInteresesDesestructurados(productos: Producto[]): number {
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio
    })
    return total * 0.15;
}

console.log(calculaIntereses(articulos));
console.log(calculaInteresesDesestructurados(articulos));

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion?: string
    ) {}
}

class Heroe extends PersonaNormal{
    constructor(
        public alterEgo: string,
        public edad: number,
        nombre) {
        super(nombre);
    }
    imprimirNombre() {
        return this.alterEgo + '' + this.nombre;
    }
}

const ironMan = new Heroe("Iron Man", 30, "Tony Stark");
console.log(ironMan.imprimirNombre())
console.log(ironMan)

function queTipoSoy<T>(argument: T) {
    return argument
}
let soyString = queTipoSoy("Hola Mundo")
let soyNumero = queTipoSoy(200)
let soyArreglo = queTipoSoy([1, 2, 3, 4])
let soyExplicito = queTipoSoy<number>(200);

class MiSuperClase {
    public miPropiedad: string = "ABC1234";
    imprimir() {
        console.log("Hola mundo")
    }
}

