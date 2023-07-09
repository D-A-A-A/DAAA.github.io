let IMC = document.getElementById("IMC");
let resp = document.getElementById("resp");
let borrar = document.getElementById("borrar");
    borrar.addEventListener("click", clickBorrar);
let calcular = document.getElementById("calcular");
    calcular.addEventListener("click", clickCalcular);


function clickCalcular(){
    let m =  document.getElementById("Estatura").value;
    let kg =  document.getElementById("Peso").value;
    let imc = (kg / (m*m)) * 10000;

    IMC.innerHTML = Math.round(imc);

    if(m =="" || kg == ""){
        alert("Debes ingresar los datos completos");
        IMC.innerHTML = "";

        return;
    }
    if( imc >= 18.5 && imc <= 24.9){ resp.innerHTML = "Estas en un peso normal"}
    else if (imc >= 25 && imc <= 29.9){ resp.innerHTML = " Estas con sobre peso"}
    else if (imc >= 30 && imc <= 34.9){ resp.innerHTML = " Estas con Obesidad Grado 1"}
    else if (imc >= 35 && imc <= 39.9){ resp.innerHTML = " Estas con Obesidad Grado 2"}
    else if (imc > 40){ resp.innerHTML = " Estas con Obesidad Grado 3"}
    else if( imc < 18.5){ resp.innerHTML = "Estas en un peso por debajo de lo normal"}
    else {
        alert("Debes ingresar tus datos correctamente, revisa que sean numeros", IMC.innerHTML = "", resp.innerHTML = "");
    }
}
function clickBorrar(){
    IMC.innerHTML ='';
    resp.innerHTML='';
}