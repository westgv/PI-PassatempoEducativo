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