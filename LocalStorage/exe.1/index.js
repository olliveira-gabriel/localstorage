function armazenar(){
    const numero =  document.getElementById('Numero').value
   
    localStorage.setItem('numero digitado', numero)
    alert('número armazenado')
}


