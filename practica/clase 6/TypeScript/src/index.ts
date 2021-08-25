import {Direccion, Persona, Heroe} from "./ejercicios/Direccion";

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

function sumar (a: number, b: number): number {
    return a+b;
}

console.log(sumar(2,2))

const sumarArrow = (a:number, b:number) :number => {
    return a + b;
}

console.log(sumarArrow(2,3))

function multiplicar (numero1: number, numero2?:number, numero3:number= 2):number {
    return numero1 *numero3;
}

console.log(multiplicar(1,0, 5))



let arreglosPersona: Persona[] = [];

function agregarPersonas (persona:Persona):void {
    arreglosPersona.push(persona);
}

const personajes: string[] = ["batman", "superman", "flash"]

const [ ,  ,flash1234] = personajes;

console.log(flash1234)

interface Producto {
    desc: string;
    precio: number;
}

const  telefono: Producto = {
    desc: "Iphone",
    precio: 1000
}

const notebook: Producto = {
    desc:"Dell",
    precio: 1500
}

let arrProductos: Producto[] = [telefono, notebook];

function calculaIntereses(productos: Producto[]): number {
    let total = 0;
    productos.forEach((productos) => {
        console.log(productos.desc)
        total += productos.precio
    })
    return total * 0.15;
}

function calculaInteresesConPrecio(productos: Producto[]): number {
    let total = 0;
    productos.map(({precio, desc}) => {
        console.log(desc)
        total += precio;
    })
    return total * 0.15;
}

console.log(calculaIntereses(arrProductos) + "con parametros:" + calculaInteresesConPrecio(arrProductos));

let dire = new Direccion("San martin", "San Juan");
let IronMan: Heroe = new Heroe("Iron Man", "Stark", 30, "Tony", new Direccion("",""))
IronMan.setPoder(100);

let personas: Persona[] = [];

personas.push(IronMan);
personas.push(new Persona("Rodrigo", "Aguilar",dire))
IronMan.imprimirNombre();

personas.map(persona => {
    persona.imprimirNombre();
    persona.imprimirPoder()
    console.log(persona.getDireccion());
})