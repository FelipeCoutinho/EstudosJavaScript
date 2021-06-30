
const titulo = document.querySelector("#idTitulo");
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    
    const peso =   paciente.querySelector('.info-peso');
    const altura = paciente.querySelector('.info-altura');
    const tdImc = paciente.querySelector(".info-imc");
    const imc = calculaImc(peso,altura)
    
    let alturaEhValida = validaAltura(altura.textContent);
    let pesoEhValido = validaPeso(peso.textContent);
    
    if(!pesoEhValido){
        paciente.classList.add("pacienteInvalido");
        tdImc.textContent = "O Peso informado é invalido";
        return;
    }

    if(!alturaEhValida){
        paciente.classList.add("pacienteInvalido");
        tdImc.textContent = "A Altura informada é invalida";
        return;
    }   

    tdImc.textContent = imc
})

function calculaImc( peso, altura ) {
   const imc  = Number(peso.textContent)/Math.pow(Number(altura.textContent),2);
   return imc.toFixed(2);
}

function validaPeso(peso){
    console.log(peso);
    if(peso >=0 && peso <=270){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=5){
        return true;
    }else{
        return false;
    }
}