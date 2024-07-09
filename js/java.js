var matriz = [
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
];
var matriz2 = [
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
];
console.table(matriz);

document.write("<h1  class='titulo'> 1° Matriz  : </h1>");

document.write("<table border=7>");
for (var i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (var x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);}


document.write("</table>");

document.write("<table border=7>");

document.write("<h1 class='titulo'> 2° Matriz  : </h1>");

for (var i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (var x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");


function SomadordeMatrizes(a,b) {
    let resultados = [];
    for (let i = 0; i < a.length; i++) {
        let linha = [];
        for (let j = 0; j < a[i].length; j++) {
            linha.push(a[i][j] + b[i][j]);
        }
        resultados.push(linha);
    }
    return resultados;}



function Multiplicadordematrizes(a,b) {

    let resultados = [];
    for (let i = 0; i < a.length; i++) {
        let linha = [];
        for (let j = 0; j < a[i].length; j++) {
            let soma = 0;
            for (let k = 0; k < a[i].length; k++) {
                soma += a[i][k] * b[k][j];
            }
            linha.push(soma.toFixed(0));
        }
        resultados.push(linha);
    }
    return resultados;}


let somadasMatriz = SomadordeMatrizes(matriz,matriz2);
let produtodasMatriz = Multiplicadordematrizes(matriz,matriz2);

document.write("<table border=7>");

document.write("<h1  class='titulo'>  Soma das matrizes : </h1>");

for (var i = 0; i < somadasMatriz.length; i++) {
    var linha = '<tr>';
    for (var x = 0; x < somadasMatriz[i].length; x++) {
        linha = linha + "<td>" + somadasMatriz[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);}


document.write("</table>");
document.write("<table border=7>");

document.write("<h1 class='titulo'> A multiplicaçao das Matrizes : </h1>");

for (var i = 0; i < produtodasMatriz.length; i++) {
    var linha = '<tr>';
    for (var x = 0; x < produtodasMatriz[i].length; x++) {
        linha = linha + "<td>" + produtodasMatriz[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);}

document.write("</table>");

console.log("Matrix: ", matriz);
console.log("Soma Matrix:", somadasMatriz);
console.log("Produto da Matrix:", produtodasMatriz);
