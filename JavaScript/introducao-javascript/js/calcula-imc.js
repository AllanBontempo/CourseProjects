var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var pesoTd = paciente.querySelector(".info-peso");
  var peso = pesoTd.textContent;

  var alturaTd = paciente.querySelector(".info-altura");
  var altura = alturaTd.textContent;

  var imcTd = paciente.querySelector(".info-imc");

  var pesoEValido = validaPeso(peso);
  var alturaEValida = validaAltura(altura);

  if (!pesoEValido) {
    console.log("Peso inválido!");
    pesoEValido = false;
    imcTd.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEValida) {
    console.log("Altura inválida!");
    alturaEValida = false;
    imcTd.textContent = "Altura inválida!"
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEValido && alturaEValida) {
    var imc = calculaImc(peso,altura);
    imcTd.textContent = imc;
  }
}

  function validaPeso(peso){
    if (peso > 0 && peso < 1000) {
      return true;
    }else {
      return false;
    }
  }

  function validaAltura(altura){
    if (altura > 0 && altura < 3.00) {
      return true;
    }else {
      return false;
    }
  }

  function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
