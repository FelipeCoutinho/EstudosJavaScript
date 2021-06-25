const titulo = document.querySelector("#idTitulo");
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    
    const peso =   paciente.querySelector('.info-peso');
    const altura = paciente.querySelector('.info-altura');

    
    const imc = Number(peso.textContent)/Math.pow(Number(altura.textContent),2);
    
    let alturaEhValida = true;
    let pesoEhValido = true;
    
    //verifica se a altura é valida
    if(Number(altura.textContent) < 0 || Number(altura.textContent) >5){
        alturaEhValida = false
        altura.textContent = "A Altura informada é invalida"
    } 
    
    //verifica se o peso é valida
    if(peso.textContent < 0 || peso.textContent >500){
        peso.textContent = "O Peso informado é invalido"
        pesoEhValido = false
    }
    
    if(alturaEhValida == true && pesoEhValido == true){
        const tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2)
    }

})
