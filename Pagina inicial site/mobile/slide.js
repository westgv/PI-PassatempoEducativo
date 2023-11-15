
var cont = 1


setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++
    if(cont > 4){
        cont = 1
    }


}