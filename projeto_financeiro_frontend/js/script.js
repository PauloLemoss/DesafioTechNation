const notasFiscais = [
  { nomePagador: 'Empresa A', numeroNota: 1, dataEmissao: '2023-01-10', dataCobranca: '2023-01-15', status: 'paga', valorNota: 1324 },
  { nomePagador: 'Empresa B', numeroNota: 2, dataEmissao: '2023-01-11', dataCobranca: '2023-01-16', status: 'pendente', valorNota: 2516 },
  { nomePagador: 'Empresa C', numeroNota: 3, dataEmissao: '2023-02-01', dataCobranca: '2023-02-06', status: 'vencida', valorNota: 2130 },
  { nomePagador: 'Empresa A', numeroNota: 4, dataEmissao: '2023-02-10', dataCobranca: '2023-02-10', status: 'paga', valorNota: 3624 },
  { nomePagador: 'Empresa Y', numeroNota: 5, dataEmissao: '2023-03-15', dataCobranca: '2023-03-20', status: 'pendente', valorNota: 4812 },
  { nomePagador: 'Empresa Z', numeroNota: 6, dataEmissao: '2023-03-20', dataCobranca: '2023-03-25', status: 'vencida', valorNota: 693.05 },
  { nomePagador: 'Empresa A', numeroNota: 7, dataEmissao: '2023-04-23', dataCobranca: '2023-04-28', status: 'paga', valorNota: 1625 },
  { nomePagador: 'Empresa A', numeroNota: 8, dataEmissao: '2023-04-25', dataCobranca: '2023-10-30', status: 'pendente', valorNota: 2190 },
  { nomePagador: 'Empresa C', numeroNota: 9, dataEmissao: '2023-05-20', dataCobranca: '2023-05-25', status: 'vencida', valorNota: 1000 },
  { nomePagador: 'Empresa D', numeroNota: 10, dataEmissao: '2023-06-25', dataCobranca: '2023-06-30', status: 'paga', valorNota: 2516 },
  { nomePagador: 'Empresa E', numeroNota: 11, dataEmissao: '2023-07-25', dataCobranca: '2023-07-30', status: 'pendente', valorNota: 852 },
  { nomePagador: 'Empresa F', numeroNota: 12, dataEmissao: '2023-08-02', dataCobranca: '2023-08-07', status: 'vencida', valorNota: 300 },
  { nomePagador: 'Empresa A', numeroNota: 13, dataEmissao: '2023-08-08', dataCobranca: '2023-08-13', status: 'paga', valorNota: 1980 },
  { nomePagador: 'Empresa H', numeroNota: 14, dataEmissao: '2023-09-20', dataCobranca: '2023-09-25', status: 'pendente', valorNota: 2648 },
  { nomePagador: 'Empresa I', numeroNota: 15, dataEmissao: '2023-10-10', dataCobranca: '2023-10-15', status: 'vencida', valorNota: 2060 },
  { nomePagador: 'Empresa A', numeroNota: 16, dataEmissao: '2023-11-10', dataCobranca: '2023-11-15', status: 'paga', valorNota: 3000 },
  { nomePagador: 'Empresa K', numeroNota: 17, dataEmissao: '2023-11-15', dataCobranca: '2023-11-20', status: 'pendente', valorNota: 800 },
  { nomePagador: 'Empresa L', numeroNota: 18, dataEmissao: '2023-12-20', dataCobranca: '2024-12-25', status: 'pendente', valorNota: 2250 }
  // Adicione mais notas fiscais conforme necessário
]

function filtrarNotas(){
  filtrarNotasFiscais()
}

let dataInicialFiltragem = "";
let dataFinalFiltragem = "";

let valorTotalEmitidas = 0;
let valorTotalNaoCobradas = 0;
let valorTotalVencidas = 0;
let valorTotalAVencer = 0;
let valorTotalPagas = 0;

let inadimplencia = [];
let recebimento = [];
let testeNotas = [];
let notasFiltradas = [];
const notasMesJaneiro = [];
const notasMesFevereiro = [];
const notasMesMarco = [];
const notasMesAbril = [];
const notasMesMaio = [];
const notasMesJunho = [];
const notasMesJulho = [];
const notasMesAgosto = [];
const notasMesSetembro = [];
const notasMesOutubro = [];
const notasMesNovembro = [];
const notasMesDezembro = [];

function limparDados(){
  valorTotalEmitidas = 0;
  valorTotalNaoCobradas = 0;
  valorTotalVencidas = 0;
  valorTotalAVencer = 0;
  valorTotalPagas = 0;
}

function somarMeses(dados, tipo){
  let somaInadimplencia = 0
  let somaRecebimento = 0

  dados.forEach(nota => {
    if(tipo === 'inadimplencia' && nota.status == 'vencida'){
      somaInadimplencia = somaInadimplencia + nota.valorNota
      // console.log(nota)
    } else if(tipo === 'recebimento' && nota.status == 'paga') {
      somaRecebimento = somaRecebimento + nota.valorNota
    }
  })
  
  if(tipo === 'inadimplencia'){
    return somaInadimplencia
  } else {
    return somaRecebimento
  }
}


function carregarDados(periodo){
    let ano = "2023"
    if(periodo == 'ano'){
        dataInicialFiltragem = new Date(ano, 0, 1);
        dataFinalFiltragem = new Date(ano, 11 + 1, 0);
    } else if(periodo == '1t'){
        dataInicialFiltragem = new Date(ano, 0, 1);
        dataFinalFiltragem = new Date(ano, 2 + 1, 0);
    } else if(periodo == '2t'){
        dataInicialFiltragem = new Date(ano, 3, 1);
        dataFinalFiltragem = new Date(ano, 6, 0);
    } else if(periodo == '3t'){
        dataInicialFiltragem = new Date(ano, 6, 1);
        dataFinalFiltragem = new Date(ano, 9, 0);
    } else if(periodo == '4t'){
        dataInicialFiltragem = new Date(ano, 9, 1);
        dataFinalFiltragem = new Date(ano, 12, 0);
    } else {        
        dataInicialFiltragem = new Date(ano, parseInt(periodo), 1);
        dataFinalFiltragem = new Date(ano, parseInt(periodo) + 1, 0);
    }
    limparDados()
    inicializarPagina()
}

function letraMaiuscula(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatarData(data){  
  let dia = data.substring(8, 10)
  let mes = data.substring(5, 7)
  let ano = data.substring(0, 4)
  
  return dia + "/" + mes + "/" + ano;
  
}

function formatarValor(valor){
  valor = valor.toString()
  valor = valor.replace(" ", "")
  valor = valor.replace(".", ",")
  valor = parseFloat(valor).toFixed(2)

  return `R$ ${valor}`;
}


function classificarNotas(dataInicial, dataFinal){

  const dataInicio = new Date(dataInicial)
  const dataFim = new Date(dataFinal)

  notasFiscais.forEach(nota => {
    const dataEmissaoNota = new Date(nota.dataEmissao)

    const mes = dataEmissaoNota.getMonth() + 1; // +1 porque os meses são indexados a partir de 0

    testeNotas.splice(mes, 0, nota)
 

    if(mes === 1){
      notasMesJaneiro.push(nota)
    } else if(mes === 2){
      notasMesFevereiro.push(nota)
    } else if(mes === 3){
      notasMesMarco.push(nota)
    } else if(mes === 4){
      notasMesAbril.push(nota)
    } else if(mes === 5){
      notasMesMaio.push(nota)
    } else if(mes === 6){
      notasMesJunho.push(nota)
    } else if(mes === 7){
      notasMesJulho.push(nota)
    } else if(mes === 8){
      notasMesAgosto.push(nota)
    } else if(mes === 9){
      notasMesSetembro.push(nota)
    } else if(mes === 10){
      notasMesOutubro.push(nota)
    } else if(mes === 11){
      notasMesNovembro.push(nota)
    } else if(mes === 12){
      notasMesDezembro.push(nota)
    }
    // quero saber em cada mês o valor das inadimplências e quanto foi recebido

    if(dataEmissaoNota >= dataInicio && dataEmissaoNota <= dataFim){
      // console.log(nota.status)
      if(nota.status == 'paga'){
        valorTotalPagas = valorTotalPagas + nota.valorNota
      } else if(nota.status == 'vencida'){
        valorTotalVencidas = valorTotalVencidas + nota.valorNota
      } else if(nota.status == 'pendente'){

        // inadimplencia.push(nota.valorNota)
        valorTotalNaoCobradas = valorTotalNaoCobradas + nota.valorNota
  
        const dataVencimento = new Date(nota.dataCobranca)
        const dataHoje = new Date()
  
        if(dataVencimento >= dataHoje){
          valorTotalAVencer = valorTotalAVencer + nota.valorNota
        }
      }
      valorTotalEmitidas = valorTotalEmitidas + nota.valorNota
    }
  })

  inadimplencia.push(somarMeses(notasMesJaneiro, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesFevereiro, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesMarco, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesAbril, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesMaio, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesJunho, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesJulho, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesAgosto, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesSetembro, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesOutubro, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesNovembro, 'inadimplencia'))
  inadimplencia.push(somarMeses(notasMesDezembro, 'inadimplencia'))

  recebimento.push(somarMeses(notasMesJaneiro, 'recebimento'))
  recebimento.push(somarMeses(notasMesFevereiro, 'recebimento'))
  recebimento.push(somarMeses(notasMesMarco, 'recebimento'))
  recebimento.push(somarMeses(notasMesAbril, 'recebimento'))
  recebimento.push(somarMeses(notasMesMaio, 'recebimento'))
  recebimento.push(somarMeses(notasMesJunho, 'recebimento'))
  recebimento.push(somarMeses(notasMesJulho, 'recebimento'))
  recebimento.push(somarMeses(notasMesAgosto, 'recebimento'))
  recebimento.push(somarMeses(notasMesSetembro, 'recebimento'))
  recebimento.push(somarMeses(notasMesOutubro, 'recebimento'))
  recebimento.push(somarMeses(notasMesNovembro, 'recebimento'))
  recebimento.push(somarMeses(notasMesDezembro, 'recebimento'))

  // console.log(testeNotas)

}

function calcularIndicadores() {
  if(!dataInicialFiltragem){
    dataInicialFiltragem = "2023-01-01"
    dataFinalFiltragem = "2023-12-31"
  }

  classificarNotas(dataInicialFiltragem, dataFinalFiltragem);

  document.getElementById('valorTotalEmitidas').innerText = `R$ ${valorTotalEmitidas.toFixed(2)}`;
  document.getElementById('valorTotalNaoCobradas').innerText = `R$ ${valorTotalNaoCobradas.toFixed(2)}`;
  document.getElementById('valorTotalVencidas').innerText = `R$ ${valorTotalVencidas.toFixed(2)}`;
  document.getElementById('valorTotalAVencer').innerText = `R$ ${valorTotalAVencer.toFixed(2)}`;
  document.getElementById('valorTotalPagas').innerText = `R$ ${valorTotalPagas.toFixed(2)}`;

  // Retornar os valores para possível uso futuro
  return {
    valorTotalEmitidas,
    valorTotalNaoCobradas,
    valorTotalVencidas,
    valorTotalAVencer,
    valorTotalPagas
  };
}

// Função para filtrar e exibir as notas fiscais
function filtrarNotasFiscais() {
  const nomePagador = document.getElementById('inputNomePagador').value.trim().toLowerCase();
  const numeroNota = document.getElementById('inputNumeroNota').value.trim().toLowerCase();
  const dataInicio = document.getElementById('inputDataInicio').value;
  const dataFim = document.getElementById('inputDataFim').value;
  const status = document.getElementById('selectStatus').value;

  // Limpar a lista de notas fiscais atual
  // document.getElementById('listaNotas').innerHTML = '';
  const tabela = document.getElementById('tabelaNotas');
  var linhas = tabela.getElementsByTagName('tr');
  
  // Excluindo linhas, exceto a primeira (cabeçalho)
  while (linhas.length > 1) {
    tabela.deleteRow(1);
  }

  notasFiltradas = notasFiscais.filter(nota => {
    return (!nomePagador || nota.nomePagador.toLowerCase().includes(nomePagador)) &&
      (!numeroNota || nota.numeroNota.toString().includes(numeroNota)) &&
      (!dataInicio || nota.dataEmissao >= dataInicio) &&
      // (!dataInicialFiltragem || nota.dataEmissao >= dataInicialFiltragem) &&
      // (!dataFinalFiltragem || nota.dataEmissao <= dataFinalFiltragem) &&
      (!dataFim || nota.dataEmissao <= dataFim) &&
      (!status || nota.status === status);
  });


  // Iterando sobre as notas filtradas e populando a tabela
  notasFiltradas.forEach(nota => {
    const linha = tabela.insertRow();

    // Inserindo células na linha
    const celulaEmpresa = linha.insertCell();
    celulaEmpresa.textContent = letraMaiuscula(nota.nomePagador);

    const celulaNumeroNota = linha.insertCell();
    celulaNumeroNota.textContent = nota.numeroNota;

    const celulaDataEmissao = linha.insertCell();
    celulaDataEmissao.textContent = formatarData(nota.dataEmissao);

    const celulaDataCobranca = linha.insertCell();
    celulaDataCobranca.textContent = formatarData(nota.dataCobranca);

    const celulaStatus = linha.insertCell();
    celulaStatus.textContent = letraMaiuscula(nota.status);

    const celulaValorNota = linha.insertCell();
    celulaValorNota.textContent = formatarValor(nota.valorNota);

    
  });
}



function carregarGrafico(){
  const ctx = document.getElementById('myChart');
          
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [{
        label: 'Recebimentos',
        data: recebimento,
        borderWidth: 2
      },
      {
        label: 'Inadimplência',
        data: inadimplencia, //[1000, 8000, 9000, 2000, 4000, 10000, 1000, 0, 0, 2000, 4000, 10000],
        borderWidth: 2
      },]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


function inicializarPagina() {
  limparDados();
  calcularIndicadores();
  filtrarNotasFiscais();
  carregarGrafico();
}

// Chamada da função de inicialização ao carregar a página
window.addEventListener('load', inicializarPagina);



