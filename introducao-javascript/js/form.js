
const btnHendleForm = document.querySelector('#adicionarPaciente');
btnHendleForm.addEventListener('click', function (Event) {
    Event.preventDefault();

    const dataForm = document.querySelector("#formAdiciona");
    const paciente = getDadosPaciente(dataForm);

    const table = document.querySelector("table")
    const tr = montaTr(paciente)

    table.appendChild(tr)

    dataForm.reset()
    removeMensagemError()
});

const removoPacientes = document.querySelectorAll('table');

removoPacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function (Event) {
        let paiAlvo = Event.target.parentNode; // TR -que sera removida 
        paiAlvo.classList.add("fadeOut")

        setTimeout(() => {
            paiAlvo.remove();
        }, 500)

    })
})


function getDadosPaciente(dataForm) {
    paciente = {
        nome: dataForm.nome.value,
        peso: dataForm.peso.value,
        altura: dataForm.altura.value,
        gordura: dataForm.gordura.value,
        imc: calculaImc(dataForm.peso.value, dataForm.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    const tr = document.createElement("tr");
    const errors = pacienteEhValido(paciente)

    if (errors.length > 0) {
        console.log('paciente invalido');
        return;
    }

    tr.appendChild(montaTd(paciente.nome, "info-nome"));
    tr.appendChild(montaTd(paciente.peso, "info-peso"));
    tr.appendChild(montaTd(paciente.altura, "info-altura"));
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    tr.appendChild(montaTd(paciente.imc, "info-imc"));

    return tr;
}

function montaTd(data, Class) {
    const td = document.createElement("td");
    td.textContent = data;
    td.classList.add(Class);
    return td;

}

function pacienteEhValido(paciente) {
    let error = []

    if (paciente.peso == "" || paciente.altura == "") {
        error.push("Informe os campos peso e altura")
        exibeMensagemError(error)
        return fal;
    }

    if (!validaPeso(paciente.peso)) {
        error.push('o peso informado é invalido');
        exibeMensagemError(error)
    }

    if (!validaAltura(paciente.altura)) {
        error.push('a altura informada é invalida')
        exibeMensagemError(error)
    }
    return error

}

function exibeMensagemError(msg) {
    const ul = document.querySelector('#msg-errors')
    ul.innerHTML = ""; // controla o html interno do elelmento
    if (msg.length > 0) {
        msg.forEach((msg, i) => {
            let li = document.createElement('li')
            li.textContent = msg
            li.classList.add('msgPacienteInvalido')
            ul.appendChild(li)
        });
    }

}
function removeMensagemError() {
    const ul = document.querySelector('#msg-errors')
    ul.innerHTML = ""; // controla o html interno do elelmento
}

//Busca de Paciente
const filter = document.querySelector("#filtrarTabela");
filter.addEventListener("input", function () {

    const pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        pacientes.forEach(paciente => {

            const pacienteFiltrado = paciente.querySelector(".info-nome");

            if (filter.value != pacienteFiltrado.textContent) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        })
    } else {
        pacientes.forEach(paciente => {
            console.log(paciente);
            paciente.classList.remove('invisivel')
        })
    }
})
