// Listas de palabras para construir el nombre de dominio
let pronoun = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Lista de extensiones de dominio
let extensions = ['.com', '.net', '.us', '.io'];

// Generar todas las combinaciones de dominios
for (let p of pronoun) {
  for (let a of adjectives) {
    for (let n of nouns) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }
    }
  }
}

// Ejemplo de "domain hack"
// 

let word = "puedes";
if (word.endsWith("s")) {
  // Eliminamos la última letra y agregamos la extensión hack
  let domainHack = word.slice(0, -1) + ".es";
  console.log("Domain hack: " + domainHack);
}
