function ajustarAltura() {
    var altura = $('.embed-responsive iframe')
        .contents()
        .find('body')
        .height();
    $('.embed-responsive')
        .closest('.row')
        .height(altura);
}
