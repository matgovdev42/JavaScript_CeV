function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)

    res.innerHTML = (`<p>Sua velocidade é de <strong>${vel} Km/h</strong></p>`)
    if (vel > 60){
        res.innerHTML += (`<p>Você está acima da velocidade permitida. <strong>Multado!</strong></p>`)
    }
    res.innerHTML += (`<p>Dirija com segurança!</p>`)
}