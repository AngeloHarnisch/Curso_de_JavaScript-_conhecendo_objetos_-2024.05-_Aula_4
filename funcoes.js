const estudante = {
  nome: 'Ângelo Harnisch',
  idade: 22,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  media: 7.5,
  estaAprovado: function(mediaBase) {
    return this.media >= mediaBase ? true : false
  }
}

console.log('oi');
console.log(estudante.estaAprovado(7));