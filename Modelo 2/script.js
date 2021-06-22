function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca.m.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'adolec.m.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'adulto.m.png')
            }else {
                img.setAttribute('src', 'idoso.m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'crianca.f.png')
            }else if (idade < 21) {
                img.setAttribute('src', 'adolec.f.png')
            }else if (idade < 50) {
                img.setAttribute('src', 'adulto.f.png')
            }else {
                img.setAttribute('src', 'idoso.f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}
