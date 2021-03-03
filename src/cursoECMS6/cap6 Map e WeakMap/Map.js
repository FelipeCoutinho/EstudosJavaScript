
const map = new Map()


function funcao() { }
const objeto = {}

map.set("string", "sou uma string")
map.set(funcao, "sou uma função")
map.set(objeto, "sou um objeto")


// Recuperando os valores com o metodo GET
console.log(map.get(funcao));
console.log(map.get(objeto));
console.log(map.size);


//deletando um item com o delete
map.delete("string")

console.log(map.size);

//* verifica se existe uma chave especifica dentro de Map
console.log(map.has("string"));

// Clear elimina todos os itens do map
map.clear()
console.log(map.size);


console.log("====map2====");

let map2 = new Map()

map2.set("um", 1)
map2.set("dois", 2)
map2.set("três", 3)

console.log(map2.get("um"));

//listando tods os valores

console.log("listando todas as chaves");
for (chave of map2.keys()) {
    console.log(chave);
}

console.log("listando todos os valores");
for (values of map2.values()) {
    console.log(values);
}

console.log("LIstando todas as entradas");
for (entrada of map2.entries()) {
    console.log(entrada);
}
console.log("feipe \n priscila juliana");
console.log(`feipe 
priscila 
juliana`);
