var popup = document.getElementById('pop-up')

function aceito(){
    localStorage.lgpd = "sim"
    popup.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    popup.classList.remove('mostrar')
}else{
    popup.classList.add('mostrar')
}

function mostrarParte(pagina) {
    if (pagina === 1) {
        document.querySelector('.pop-up-txt:nth-child(1)').style.display = 'block';
        document.querySelector('.pop-up-txt:nth-child(2)').style.display = 'none';
    } else if (pagina === 2) {
        document.querySelector('.pop-up-txt:nth-child(1)').style.display = 'none';
        document.querySelector('.pop-up-txt:nth-child(2)').style.display = 'block';
    }
}
