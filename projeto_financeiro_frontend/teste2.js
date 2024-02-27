// Obtendo o ano atual
var ano = new Date("2023-01-10").getFullYear();

// Array para armazenar os primeiros e últimos dias de todos os meses
var diasPorMes = [];

// Loop pelos meses do ano (de 0 a 11, onde 0 representa janeiro e 11 representa dezembro)
for (var mes = 0; mes < 12; mes++) {
    // Criar um objeto de data para o primeiro dia do mês atual
    var primeiroDia = new Date(ano, mes, 1);

    // Criar um objeto de data para o último dia do mês atual
    var ultimoDia = new Date(ano, mes + 1, 0);

    // Armazenar os primeiros e últimos dias no array
    diasPorMes.push({ primeiroDia, ultimoDia });
}

// Função para formatar a data no formato YYYY-MM-DD
function formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// Exemplo de como acessar os primeiros e últimos dias armazenados
for (var i = 0; i < diasPorMes.length; i++) {
    var mesInfo = diasPorMes[i];
    console.log("Mês: " + (i + 1));
    console.log("Primeiro dia: " + formatDate(mesInfo.primeiroDia));
    console.log("Último dia: " + formatDate(mesInfo.ultimoDia));
    console.log("-------------------");
}
