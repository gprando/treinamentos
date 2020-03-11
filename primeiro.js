const x=10
let y
var z

/**
 * cd .. -Sair da pasta
 * cd NomePasta -Para Entrar na pasta
 * ls -Para listar arquivos da pasta
 * clear - limpar terminal
 */

z=12
y=12.1
// = - * / %


const aluno = {
  nota: 10,
  nome:"joao"
}

let vet = [10,13, 30, "joao"]

let turmaA = [
  {
    nome: "ninguem",
    nota: 7
  },
  {
    nome: "Tavares",
    nota: 6
  },
  {
    nome: "joao",
    nota: 6
  }
]

let turmaB = [
  {
    nome: "luan",
    nota: 2
  },
  {
    nome: "alceu",
    nota: 5
  },
  {
    nome: "irineu",
    nota: 4
  }
]

function calculaMedia(alunos){
  return (alunos[0].nota+alunos[1].nota+alunos[2].nota)/3
}

function calculaMediaFor(alunos){
  let soma =0;
  for(let i=0; i< alunos.length; i++){
    soma += alunos[i].nota
  }
  return soma/alunos.length
}

const mediaA = calculaMediaFor(turmaA)
const mediaB = calculaMediaFor(turmaB)



function enviaMensagem(media, turma){
  if(media>=6){
    console.log(`A Média da turma ${turma} foi de ${media}`)
  } 
  else if(media<6) {
    console.log(`A Média da turma ${turma} foi de abaixo de 6, media igual a ${media}`)
  }
}

function marcarReprovado(alunos){
  for(let aluno of alunos){
    aluno.reprovado = false 
    if(aluno.nota < 5 ){
      aluno.reprovado = true
    }
  }
  console.table(alunos)
}

marcarReprovado(turmaA)

// enviaMensagem(mediaA, 'turma A')
// enviaMensagem(mediaB, 'turma B')


