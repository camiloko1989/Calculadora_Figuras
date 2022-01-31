//codigo para cuadrado
console.group("Cuadrado");

function perimetroCuadrado (ladoCuadrado){
    return ladoCuadrado * 4;
} 

function areaCuadrado (ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

//codigo para triangulo
console.group("Triangulo")

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1+ladoTriangulo2+baseTriangulo;
}

function areaTriangulo (baseTriangulo , alturaTriangulo) {
    return (baseTriangulo*alturaTriangulo)*2
}


console.groupEnd();

//codigo para circulo
console.group("Cuadrado");

function diametroCirculo (radioCirculo) {
    return radioCirculo * 2;
}

function perimetroCirculo (radioCirculo){
    return (Math.PI * radioCirculo) * 2;
} 

function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo) * Math.PI;
}   

console.groupEnd();

//Aqui se interactura con el html

//Funciones para Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Funciones para Triangulo
function calcularPerimetroTriangulo(){
    const ladoUnoTriangulo = document.getElementById("LadoUnoTriangulo");
    const value1 = parseInt(ladoUnoTriangulo.value);
    const ladoDosTriangulo = document.getElementById("LadoDosTriangulo");
    const value2 = parseInt(ladoDosTriangulo.value);
    const baseTriangulo = document.getElementById("BaseTriangulo");
    const value3 = parseInt(baseTriangulo.value);
    const perimetroT = perimetroTriangulo(value1,value2,value3);
    alert(perimetroT); 

}

function calcularAreaTriangulo(){
    const baseTriangulo = document.getElementById("BaseTriangulo");
    const value1 = baseTriangulo.value;
    const alturaTriangulo = document.getElementById("AlturaTriangulo");
    const value2 = alturaTriangulo.value;
    const areaT = areaTriangulo(value1,value2);
    alert(areaT); 

}

//Funciones para Circulo
function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("RadioCirculo");
    const value1 = radioCirculo.value;
    const perimetroDeCirculo = perimetroCirculo(value1);
    alert(perimetroDeCirculo);
}

function calcularDiametroCirculo(){
    const radioCirculo = document.getElementById("RadioCirculo");
    const value1 = radioCirculo.value;
    const diametroDelCirculo = diametroCirculo(value1);
    alert(diametroDelCirculo);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("RadioCirculo");
    const value1 = radioCirculo.value;
    const areaDelCirculo = areaCirculo(value1);
    alert(areaDelCirculo);
}