const estudante = {
  nome: 'Ângelo Harnisch',
  idade: 22,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
  }]
}

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
  }
}
