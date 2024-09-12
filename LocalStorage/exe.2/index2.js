function armazenar(){
    const frase =  document.getElementById('Alguma_coisa').value
    
    localStorage.setItem('frase digitado', frase)

    alert('frase armazenada')
}

