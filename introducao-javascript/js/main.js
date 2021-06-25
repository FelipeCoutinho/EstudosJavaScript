const titulo = document.querySelector("#idTitulo");
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    
    const peso =   paciente.querySelector('.info-peso');
    const altura = paciente.querySelector('.info-altura');
    const tdImc = paciente.querySelector(".info-imc");

    
    const imc = Number(peso.textContent)/Math.pow(Number(altura.textContent),2);
    
    let alturaEhValida = true;
    let pesoEhValido = true;
    
    //verifica se a altura é valida
    if(Number(altura.textContent) < 0 || Number(altura.textContent) >5){
        alturaEhValida = false
        
        console.log(paciente);
        tdImc.textContent = "A Altura informada é invalida"
    } 
    
    //verifica se o peso é valida
    if(peso.textContent < 0 || peso.textContent >200){
        tdImc.textContent = "O Peso informado é invalido"
        paciente.classList.add("pacienteInvalido")
        console.log(paciente.classList);
    }
    
    if(alturaEhValida == true && pesoEhValido == true){
        tdImc.textContent = imc.toFixed(2)
    }

})
