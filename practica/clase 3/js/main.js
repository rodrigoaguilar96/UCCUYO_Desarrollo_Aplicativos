document.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".refresh").addEventListener("click", ()=> {
        let img = document.querySelector("#image");
        let character = document.querySelector("#character-name");
        let quote = document.querySelector("#quote");

        simpson(img,character,quote);
    })
})

let personajes = [];

async function simpson(image, character, quote) {
    character.innerHTML = "";
    image.src = "https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999";
    quote.innerHTML = "";
    await fetch('https://simpsons-quotes-api.herokuapp.com/quotes').then(response => {
        response.json().then(resp => {
            setTimeout(() => {
                resp.map(personaje => {
                    personajes.push(personaje);
                    console.table(personajes)
                    character.innerHTML = personaje.character;
                    quote.innerHTML = personaje.quote;
                    image.src = personaje.image;
                    image.style.textAlign = personaje.characterDirection;
                    document.querySelector(".refresh").style.display = "inline"
                })
            }, 300)
        })
    })
}