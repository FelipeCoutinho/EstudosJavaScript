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
        alturaEhValida = false;
        tdImc.textContent = "A Altura informada é invalida";
    } 
    
    //verifica se o peso é valida
    if(peso.textContent < 0 || peso.textContent >200){
        tdImc.textContent = "O Peso informado é invalido";
        paciente.classList.add("pacienteInvalido");
    }
    
    if(alturaEhValida == true && pesoEhValido == true){;
        tdImc.textContent = imc.toFixed(2);
    }

    localStorage.setItem("_PACIENTE",'TETE');
})


const btnHendleForm = document.querySelector('#adicionarPaciente');
btnHendleForm.addEventListener('click',function (Event) {
    Event.preventDefault();

    const dataForm = document.querySelector("#formAdiciona")
    const nome  = dataForm.nome.value;
    const peso  = dataForm.peso.value;
    const altura  = dataForm.altura.value;
    const gordura  = dataForm.gordura.value;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    const table =  document.querySelector("table")
    const tr = document.createElement("tr");

    const tdNome = document.createElement("td");
    const tdPeso = document.createElement("td");
    const tdAltura = document.createElement("td");
    const tdGordura = document.createElement("td");
    
    tdNome.classList.add("info-nome");
    tdPeso.classList.add("info-peso");
    tdAltura.classList.add("info-altura");
    tdGordura.classList.add("info-gordura");
    
    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdGordura);
    
    table.appendChild(tr)

});