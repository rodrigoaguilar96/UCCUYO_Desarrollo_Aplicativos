
const url = 'https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#crearPersona").addEventListener("click", () => {
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        let direccion = document.querySelector("#direccion").value;
        let titulo = document.querySelector("#titulo").value;
        let avatar = document.querySelector("#avatar").value;
        let edad = document.querySelector("#edad").value;
        console.log(document.querySelector("#apellido"));
        crearPersona(nombre,apellido,direccion,titulo,avatar,edad);
    });
    getPersonas();

})


async function crearPersona(nombre, apellido, direccion, titulo, avatar, edad) {
    await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": nombre,
            "apellido": apellido,
            "direccion": direccion,
            "titulo": titulo,
            "avatar": avatar,
            "edad": edad
        })
    }).then(response => {
        if (response.ok) {
            console.log("Yo aca podria tener una funcion para actualizar")
            console.log(response)
        } else {
            console.log("Si no funcione entro aca")
            throw new Error("no pude insertar")
        }
    }).catch((error) =>  {
        console.error("falle porque " + error);
    })
}

async function getPersonas() {
    await fetch(url)
        .then(response => {
        response.json().then(resp => {
            let tablePersona = document.querySelector("#personas");
            tablePersona.innerHTML = "";

            //Esto retorna el nombre de los campos
            //Para realizar esto añadir validaciones
            console.log(Object.keys(resp[0]));

            resp.map(persona => {
                console.log(persona);
                let tablerow = document.createElement("tr");
                let nombreColumna = document.createElement("td");
                let nombre = document.createTextNode(persona.nombre);
                nombreColumna.append(nombre);
                tablerow.append(nombreColumna);

                let apellido = document.createElement("td");
                apellido.append(document.createTextNode(persona.apellido))
                tablerow.append(apellido)

                let direccion = document.createElement("td")
                direccion.append(document.createTextNode(persona.direccion));
                tablerow.append(direccion)

                let eliminar = document.createElement("button");
                eliminar.setAttribute("value",persona.id);
                eliminar.append(document.createTextNode("Eliminar"));
                tablerow.append(eliminar);
                eliminar.addEventListener("click", ()=> {
                    eliminarPersona(eliminar.getAttribute("value"));
                })

                tablePersona.append(tablerow);
            })
        })
    })
}


async function eliminarPersona(id) {
    await fetch(url + "/" + id, {
        method: "DELETE"
    }).then( (response)=> {
        if (response.ok) {
            getPersonas();
        }
    })

}

