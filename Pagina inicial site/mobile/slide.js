
var cont = 1


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++
    if(cont > 3){
        cont = 1
    }


}