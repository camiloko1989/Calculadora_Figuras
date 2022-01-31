//codigo para cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areCuadrado + " cm2");

console.groupEnd();

//codigo para triangulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + ", " 
    + ladoTriangulo2 
    + " y " + baseTriangulo 
    + " cm"
    );

console.log("La altura del triangulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//codigo para circulo
console.group("Circulo");
const radioCirculo = 4;
const pi = 3.14;
console.log("El radio del circulo mide: " + radioCirculo + " cm");

const diametroCirculo = 2 * radioCirculo;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");

const perimetroCirculo = (pi * radioCirculo) * 2;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El area del circulo es: " + areaCirculo + " cm2");

console.groupEnd();