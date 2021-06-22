function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`

        if (hora >= 0 && hora < 12 ) {
            img.scr = 'manha.png'
            document.body.style.background = '#fb9494'

        } else if (hora >= 12 && hora <= 18) {
            img.src = 'tarde.png'
            document.body.style.background = '#fdecb8'

        } else { 
        img.src = 'noite.png'
        document.body.style.background = '#6c615b'
     }
}