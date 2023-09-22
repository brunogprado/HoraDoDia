function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning.png'
        document.body.style.background = '#F1E2CF'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon.png'
        document.body.style.background = '#C83108'
        document.getElementById('h1').style.color = 'white'
        document.getElementById('footer').style.color = 'white'
    } else {
        img.src = 'img/night.png'
        document.body.style.background = '#101920'
        document.getElementById('h1').style.color = 'white'
        document.getElementById('footer').style.color = 'white'

    }

    document.getElementById('btn').style.display = 'none'
    document.getElementById('refresh').style.display = 'inline-block'
}

var refresh = document.querySelector('#refresh')
        refresh.addEventListener('click', function refresh() {
            location.reload()
})