botao.addEventListener('click',(event)=>{
  event.preventDefault();

  let form       = document.querySelector('#formulario');
  let tabPacient = document.querySelector("#tabela-pacientes");

  // Extrair informações do paciênte no formulário.
  let paciente   = pacienteForm(form);

  //Criando HTML do paciênte
let pacienteDados = pacienteHTML(paciente);

if(!validaPaciente(paciente)){
  console.log('Invalod');
  return;
}
//Adicionando os paciêntes a tabela
tabPacient.appendChild(pacienteDados);

//Limpando formulario
form.reset();
});

function pacienteForm(form) {
  let paciente = {
    nome    : form.nome.value,
    peso    : form.peso.value,
    altura  : form.altura.value,
    gordura : form.gordura.value,
    imc     : imcCalc(form.altura.value,form.peso.value)
  }
  return paciente;
}

function pacienteHTML(paciente){
  let tr      = document.createElement("tr");
  tr.classList.add("paciente");

  tr.appendChild(montaTd(paciente.nome,"info-nome"));
  tr.appendChild(montaTd(paciente.peso, "info-peso"));
  tr.appendChild(montaTd(paciente.altura, "info-altura"));
  tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  tr.appendChild(montaTd(paciente.imc, "info-imc"));

  return tr;
}

function validaPaciente(paciente) {
  if(validarPeso(paciente.peso)){
    return true;
  }else {
    return false;
  }
  if(validarAltura(paciente.altura)){
    return true;
  }else {
    return false;
  }
}

function montaTd (dado,classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
