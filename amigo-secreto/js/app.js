//-------------------------------------------------------------
// inicialização do script.
//-------------------------------------------------------------
let listaSorteio = [];

//-------------------------------------------------------------
// função para adicionar um amigo na lista de sorteio
//-------------------------------------------------------------
function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo").value.trim();
  let listaAmigos = document.getElementById("lista-amigos");

  if (nomeAmigo === "") {
    alert("Campo vazio! Digite um nome.");
    limpar();
    return;
  } else {
    if (listaSorteio.includes(nomeAmigo)) {
      alert("Nome já cadastrado!");
      limpar();
      return;
    } else {
      listaSorteio.push(nomeAmigo);
      if (listaAmigos.textContent === "") {
        listaAmigos.textContent = nomeAmigo;
      } else {
        listaAmigos.textContent += ", " + nomeAmigo;
      }
    }
  }

  //console.log(listaSorteio);
  limpar();
}

//-------------------------------------------------------------
// função para sortear o amigo secreto
//-------------------------------------------------------------
function sortear() {
  embaralha(listaSorteio);
  let resultado = document.getElementById("lista-sorteio");

  for (let i = 0; i < listaSorteio.length; i++) {
    if (i == listaSorteio.length - 1) {
      resultado.innerHTML =
        resultado.innerHTML +
        listaSorteio[i] +
        " --> " +
        listaSorteio[0] +
        "<br>";
    } else {
      resultado.innerHTML =
        resultado.innerHTML +
        listaSorteio[i] +
        " --> " +
        listaSorteio[i + 1] +
        "<br>";
    }
  }

  //console.log(listaSorteio.length);
}

//-------------------------------------------------------------
// função para reiniciar o sorteio
//-------------------------------------------------------------
function reiniciar() {
  listaSorteio = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

//-------------------------------------------------------------
// função para limpar o campo de texto
//-------------------------------------------------------------
function limpar() {
  document.getElementById("nome-amigo").value = "";
  document.getElementById("lista-sorteio").textContent = "";
}

//-------------------------------------------------------------
// função para embaralhar a lista de amigos - Fisher-Yates
//-------------------------------------------------------------
function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    const elemento = lista[indice - 1];
    lista[indice - 1] = lista[indiceAleatorio];
    lista[indiceAleatorio] = elemento;
  }
}

//-------------------------------------------------------------
// função
//-------------------------------------------------------------

//-------------------------------------------------------------

/**
 * 
 * Desafios complementares:
 * 
Criar uma funcionalidade no Projeto Amigo Secreto que permita 
ao usuário clicar em um amigo na lista e removê-lo. Atualizar
a visualização da lista após a remoção.

Adicione os números 1,2,3 em uma variável chamada minhaLista e 
armazene os números 4, 5 e 6 separadamente em outra variável. 
Use o método concat() para combinar as sequências de valores em 
uma nova lista chamadanovaLista. Imprima novaLista no console.

Remova o último elemento de novaLista. Imprima novaLista após a 
remoção.

Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth 
Shuffle) para embaralhar os elementos em novaLista. Pesquise e 
adapte o código para realizar o embaralhamento.

Crie uma função chamada removerDuplicatas que aceita um array como 
parâmetro e retorna um novo array sem elementos duplicados. Teste a 
função com novaLista e imprima o array resultante.
 * 
 */
