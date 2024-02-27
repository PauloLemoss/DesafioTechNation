const notasFiscais = [
    { nomePagador: 'Empresa A', numeroNota: 1, dataEmissao: '2023-01-10', dataCobranca: '2023-01-15', status: 'paga', valorNota: 1324 },
    { nomePagador: 'Empresa B', numeroNota: 2, dataEmissao: '2023-02-01', dataCobranca: '2023-02-15', status: 'pendente', valorNota: 2516 },
    { nomePagador: 'Empresa C', numeroNota: 3, dataEmissao: '2023-03-01', dataCobranca: '2023-03-15', status: 'vencida', valorNota: 2130 },
    { nomePagador: 'Empresa A', numeroNota: 4, dataEmissao: '2023-05-10', dataCobranca: '2023-05-25', status: 'paga', valorNota: 3624 },
    { nomePagador: 'Empresa Y', numeroNota: 5, dataEmissao: '2023-06-15', dataCobranca: '2023-07-01', status: 'pendente', valorNota: 4812 },
    { nomePagador: 'Empresa Z', numeroNota: 6, dataEmissao: '2023-07-20', dataCobranca: '2023-08-05', status: 'vencida', valorNota: 693.05 },
    { nomePagador: 'Empresa A', numeroNota: 7, dataEmissao: '2023-08-25', dataCobranca: '2023-09-10', status: 'paga', valorNota: 1625 },
    { nomePagador: 'Empresa A', numeroNota: 8, dataEmissao: '2023-09-30', dataCobranca: '2023-10-15', status: 'pendente', valorNota: 2190 },
    { nomePagador: 'Empresa C', numeroNota: 9, dataEmissao: '2023-10-20', dataCobranca: '2023-11-05', status: 'vencida', valorNota: 3648 },
    { nomePagador: 'Empresa D', numeroNota: 10, dataEmissao: '2023-11-25', dataCobranca: '2023-12-10', status: 'paga', valorNota: 2516 },
    { nomePagador: 'Empresa E', numeroNota: 11, dataEmissao: '2023-12-30', dataCobranca: '2023-01-15', status: 'pendente', valorNota: 852 },
    { nomePagador: 'Empresa F', numeroNota: 12, dataEmissao: '2023-01-20', dataCobranca: '2023-02-05', status: 'vencida', valorNota: 300 },
    { nomePagador: 'Empresa A', numeroNota: 13, dataEmissao: '2023-02-25', dataCobranca: '2023-03-10', status: 'paga', valorNota: 1980 },
    { nomePagador: 'Empresa H', numeroNota: 14, dataEmissao: '2023-03-20', dataCobranca: '2023-04-05', status: 'pendente', valorNota: 2648 },
    { nomePagador: 'Empresa I', numeroNota: 15, dataEmissao: '2023-04-10', dataCobranca: '2023-04-25', status: 'vencida', valorNota: 2060 },
    { nomePagador: 'Empresa A', numeroNota: 16, dataEmissao: '2023-05-10', dataCobranca: '2023-05-25', status: 'paga', valorNota: 3000 },
    { nomePagador: 'Empresa K', numeroNota: 17, dataEmissao: '2023-06-15', dataCobranca: '2023-07-01', status: 'pendente', valorNota: 800 },
    { nomePagador: 'Empresa L', numeroNota: 18, dataEmissao: '2023-07-20', dataCobranca: '2024-08-05', status: 'pendente', valorNota: 2250 }
    // Adicione mais notas fiscais conforme necessário
  ]
  
  // Função para separar as receitas efetuadas das pendentes e agrupar por meses
  function separarPorMes(notas) {
    const registrosPorMes = {};
  
    notas.forEach(nota => {
      const dataEmissao = new Date(nota.dataEmissao);
      const mes = dataEmissao.getMonth() + 1; // +1 porque os meses são indexados a partir de 0
  
      if (!registrosPorMes[mes]) {
        registrosPorMes[mes] = { receitasEfetuadas: [], receitasPendentes: [] };
      }
  
      if (nota.status === 'paga') {
        registrosPorMes[mes].receitasEfetuadas.push(nota);
        // registrosPorMes[mes].receitasEfetuadas.push(nota);
      } else if (nota.status === 'pendente') {
        registrosPorMes[mes].receitasPendentes.push(nota);
        // registrosPorMes[mes].receitasPendentes.push(nota);
      }
    });
  
    return registrosPorMes;
  }
  
  const registrosPorMes = separarPorMes(notasFiscais);
//   console.log('Registros por Mês:', registrosPorMes[0].receitasPendentes.length);


  let totalRecebido = []
  let totalPendente = []

  /*
  console.log('Registros por Mês:', registrosPorMes[1].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[2].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[3].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[4].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[5].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[6].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[7].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[8].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[9].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[10].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[11].receitasPendentes[0]?.valorNota);
  console.log('Registros por Mês:', registrosPorMes[12].receitasPendentes[0]?.valorNota);
  */

  console.log(registrosPorMes.length)

  for (let index = 0; index < registrosPorMes.length; index++) {
    const element = registrosPorMes[index];
    console.log(element)
    
  }

  console.log('Registros efetuadas por Mês:', registrosPorMes[1].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[2].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[3].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[4].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[5].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[6].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[7].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[8].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[9].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[10].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[11].receitasEfetuadas[0]?.valorNota);
  console.log('Registros efetuadas por Mês:', registrosPorMes[12].receitasEfetuadas[0]?.valorNota);


  