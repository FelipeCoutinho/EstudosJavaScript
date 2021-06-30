const fs = require('fs')

//lendo um file

fs.readFile('./files/teste.txt','utf-8',(err, dados) => {
    
    if(err){
        console.log(err);
    }

    console.log(dados);
})

// escreveno
fs.writeFile('./files/teste.txt','teste\n',{encoding:'utf8', flag:'a'},(err) => {
    if(err) throw err;
        console.log(err);
})