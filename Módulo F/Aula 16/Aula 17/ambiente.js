function parimp(n){
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimp(4)
console.log(res)

console.log(parimp(3))

/*Aqui eu coloco para somar os parâmetros*/ 

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2, 5))

/*Aqui acontece o NaN pois apenas o n1 foi um número
o n2 não teve informado o número*/

function somaa(n1, n2){
    return n1 + n2 
}

console.log(somaa(2))

/*Aqui se um dos parâmetros não forem adicionado então para 
não ficar NaN coloca =0 já para considerar */

function somaaa(n1=0, n2=0){
    return n1 + n2
}

console.log(somaaa(2))

/*Aqui eu consigo fazer uma variavel recebendo uma função 
então consigo mostrar a variavel calcular um parametro
e executar uma função*/

let v = function(x){
    return x*2
}

console.log(v(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120 (Cinco fatorial)

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//Aqui fazemos o fatorial de uma outra forma, seguindo uma lógica
/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n - 1)!
1! = 1

*/

function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n -1)
    }
        
} 

console.log(fatorial(5))
