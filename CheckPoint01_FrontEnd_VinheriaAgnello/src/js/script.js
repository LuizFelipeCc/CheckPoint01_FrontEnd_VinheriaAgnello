var nome = prompt("Digite o nome do vinho(Merlot, Santa Florentina, Miraval): ");
var tipo = prompt("Informe o tipo de vinho(Tinto, Branco, Rosé): ");
var safra = prompt("Informe a safra(ano) do vinho: ");
var estoque = prompt("Informe a quantidade em estoque: ");

alert("Cadastro realizado! Veja os detalhes no console.");
alert("A seguir, veja os detalhes do vinho no console.");

console.log("CADASTRO DO VINHO");
console.log("Nome do vinho: " + nome);
console.log("Tipo do vinho: " + tipo);
console.log("Safra(ano): " + safra);
console.log("Quantidade em estoque: " + estoque);

document.getElementById("vinho-selecionado").innerText = "Voce selecionou o vinho: " + nome;
document.getElementById("tipo-vinho").innerText = "O tipo de vinho escolhido é: " + tipo;
document.getElementById("safra").innerText = "A safra(ano do vinho) é: " + safra;
document.getElementById("estoque").innerText = "A quantidade em estoque informada é: " + estoque;