function verificar () {
    var país = document.getElementById('txtpaís').value
    var an = document.getElementById('analisar')

    if (país == 'Brasil' || país == 'brazil') {
        an.innerHTML = 'Você é Brasileiro'
    } else {
        an.innerHTML = 'Você é Estranjeiro'
    }
        

}