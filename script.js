var resposta1 = "";
var texto1 = "";
var resposta2 = "";

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("btnAns").click();
  }
});

function ansUser() {
  var entry1 = document.getElementById("nameUser").value;
  var entry2 = document.getElementById("ageUser").value;
  var entry3 = document.getElementById("lingUser").value;

  var paragrafoUm = document.getElementById("respostaUm");
  resposta1 =
    "<p>Olá " +
    entry1 +
    ", você tem " +
    entry2 +
    " anos e já está aprendendo " +
    entry3 +
    "!</p><br>";
  texto1 =
    "<p>Você gosta de estudar " +
    entry3 +
    "? Responda com o número 1 para SIM ou 2 para NÃO.</p><br>";
  paragrafoUm.innerHTML =
    resposta1 +
    texto1 +
    "<input type='number' id='studyUser' min='1' max='2' step='1'></input><br><button onclick='ansUser2()' id='btnAns2' class='button-answer'>Enviar</button>";
}

function ansUser2() {
  var paragrafoDois = document.getElementById("respostaDois");
  var querEstudar = document.getElementById("studyUser").value;

  if (querEstudar == 1) {
    resposta2 =
      "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>";
  } else {
    resposta2 = "<p>Ahh que pena... Já tentou aprender outras linguagens?</p>";
  }

  paragrafoDois.innerHTML = resposta2;
}