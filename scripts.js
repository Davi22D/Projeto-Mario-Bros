/* console.log("Funcionou")

const conta = 20 + 60
const pera = "OI, eu sou uma pera"
const numero1 = 100
const numero2 = 100

console.log(pera)
console.log(conta)
function soma() {
    const somatória = numero1 + numero2
    console.log(somatória)
}
console.log(pera)

soma() 
*/
 const form = document.querySelector(".formulario-fale-conosco")
 const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueiNaMascara(){
    form.style.transform = "translateX(0)"
    form.style.left = "-300PX"
    mascara.style.visibility = "hidden"
}



