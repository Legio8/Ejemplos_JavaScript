function saludar(){
    alert('Hola');
}

function saludar2(){
    document.write('Hola Documento')
}

var boton = document.getElementById('btn_saluda')
boton.onclick = saludar

var boton2 = document.getElementById('btn_saluda2')

boton2.addEventListener('click', saludar)
boton2.addEventListener('click', saludar2)