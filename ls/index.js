function Salvar(){
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('carro').value;

    if(marca && modelo){

        obj = {
            marca: marca,
            modelo: modelo,
        };

        localStorage.setItem('cadastro', JSON.stringify(obj));

    }else{
        alert('Preencha todas as informações')
    }
}