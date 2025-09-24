function desc() {
    let idade = Number(document.getElementById("idade").value)
    let pass = 7.00
    let preco = document.getElementById("preco")

    if (idade == 0) {
        preco.innerHTML = "por favor coloque sua idade"
    }
    else if (idade < 5) {
        preco.innerHTML = "passageiro não paga"
    }
    else if (idade >= 5 && idade <= 24) {
        preco.innerHTML = `o passageiro pagará apenas ${pass * 0.50} Reais`
    }
    else if (idade > 59) {
        preco.innerHTML = `o passageiro pagará apenas ${pass * 0.25} Reais`
    }
    else {
        preco.innerHTML = `o passageiro pagará ${pass} Reais`
    }

    let res = document.getElementById("est")
    let promo=(pass * 0.55)
    let box = document.getElementById("cyes")

    if(box. checked){
        res.innerHTML = `Desconto para estudante é de ${promo}`
    }
    else{
        res.innerHTML = "Desconto Não incluido"
    }
}