let elemento = document.getElementById('enviar')
elemento.addEventListener('click', verificar)

function verificar(){
    //pega a data atual
    let data = new Date();
    let ano =  data.getFullYear(); // pega o ano atual FullYear(pega com 4 digitos)
    let fAno = document.getElementById('idNascimento')
    let divResult =  document.querySelector('div#result')
    
    if(fAno.value.length === 0 || Number(fAno.value) > ano){
        alert('O ano digitado é invalido')
    }else{
        let fgenero = document.getElementsByName('nmGenero')
        let idade = Number(ano) - Number(fAno.value)
        
        //cria um elemento html
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        //verifica o genero da pesso
        let genero = ''

        if(fgenero[0].checked){
            if (idade >=0 && idade <= 4) {
                genero="Homem"
                console.log('teste');
                //labe
                img.setAttribute('src',"../imagens/bebe-negro-menino.jpg")
            } 

        }else{
            genero="Mulher"

        }

        divResult.style.textAlign = 'center'
        divResult.innerHTML = `Detectamos ${genero} com ${idade} anos`
        divResult.appendChild(img)

    }

    
}


