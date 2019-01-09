function getName() {
  let name = document.getElementById('name').value;
  localStorage.setItem('nombredeusuario', name);
  //document.getElementById("obtenerNombre").innerHTML = `Bienvenido ${name} preparate para el reto`;
// now redirect the page.
  window.location.href = "welcome.html";
}
function printName(){
   document.getElementById('obtenerNombre').innerHTML = localStorage.getItem("nombredeusuario");
}



function getResults() {
  let amountCorrect = 0;
  let questions = document.getElementsByName("question");

  for (let i = 0; i < questions.length; i++) {
    let question = document.getElementsByName('answer' + i);
    for (let j = 0; j < question.length; j++) {
      if (question[j].value == "correct" && question[j].checked) {
        amountCorrect++;
      }
    }
  }
  localStorage.setItem('result', `Resultados: Correctos: ${amountCorrect} Incorrectos: ${questions.length - amountCorrect}`);
  window.location.href = "end.html";
  //sirve para que al hacer cambio de paguina se guarde la informacion de una y se pase a la siguienta para mostrarse//
}

function printResult(){
   document.getElementById('resultToPrint').innerHTML = localStorage.getItem("result");
}
