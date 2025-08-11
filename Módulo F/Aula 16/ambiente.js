let num = [5, 3, 6, 8, 2] //Aqui coloquei o conteúdo dos índices 0,1,2,3,4

console.log(`Nossos valores agora são ${num}`) //Aqui mostrando

num[5] = 1                //Aqui adicionei no  índice 5 o valor 1

console.log(`Nossos valores agora são ${num}`) //Aqui mostrando

num.push(7)               //Aqui adicioneu um conteúdo 7 e ele adiciona ao índice final

console.log(`Nossos valores agora são ${num}`) //Aqui mostrando

num[0] = 3                //Aqui troquei o valor do índice 0 que era o valor 5 para o valor 3

console.log(`Nossos valores agora são ${num}`)  //Aqui mostrando

console.log(`Nossos valores agora são ${num.length}`) //Aqui ele mostra quantos elementos temos nesse caso 7

console.log(`Nossos valores agora são ${num.sort()}`) //Aqui ele ordenou meus elementos em ordem do menor para maior


for (let pos = 0; pos<num.length; pos++){                     //Aqui fiz um for para mostrar todo conteúdo
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)  // e não precisar ficar digitando muito codigo
}

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //Aqui é igual o For de cima, porém mais simples e rápido
}

let poss = num.indexOf(4)           //Aqui coloquei o num.indexOf para encontrar um conteúdo e dar a mensagem
if (poss == -1) {
    console.log(`O valor não foi encontrado!`) //Aqui foi ativado pois não existe o 4 então retorna -1 no caso a mensagem
} else {
    console.log(`O valor 4 está na posição ${poss}`)
}