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
    })
})


async function crearPersona(nombre, apellido, direccion, titulo, avatar, edad) {
    await fetch("https://610f5d459b698d0017175310.mockapi.io/api/v1/Personas", {
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
        console.log("falle porque " + error);
    })
}
