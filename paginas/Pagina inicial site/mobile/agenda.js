const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

// Obtém o nome do mês atual
const mesAtual = new Date().getMonth();
const nomeMes = meses[mesAtual];

// Atualiza o conteúdo HTML com o nome do mês atual
document
    .getElementById('nome-mes')
    .textContent = nomeMes;
