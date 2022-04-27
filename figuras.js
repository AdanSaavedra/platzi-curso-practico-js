// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    const sum = (lado1+lado2+base);
    return sum;
}

function areaTriangulo(base,altura){
    return (base*altura)/2;
}


console.groupEnd();

/**Codigo del Circulo */
console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio*2;
}

//PI
const PI = Math.PI;
console.log("PI es: "+ PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio*radio)*PI;
} 

console.groupEnd();

//Aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resp = document.getElementById("respuestaCuadrado");

    const perimetro = perimetroCuadrado(value);
    resp.innerText= `El perimetro es ${perimetro}`
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resp = document.getElementById("respuestaCuadrado");

    const area = areaCuadrado(value);
    resp.innerText= `El area es ${area}`
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("inputTrianguloLado2");
    const value2 = parseFloat(input2.value);
    const inputB = document.getElementById("inputTrianguloBase");
    const valueB = parseFloat(inputB.value);
    const resp = document.getElementById("respuestaTriangulo");

    const perimetro =perimetroTriangulo(value1,value2,valueB);
    resp.innerText= `El perimetro es ${perimetro}`
}

function calcularAreaTriangulo(){
    const inputB = document.getElementById("inputTrianguloBase");
    const valueB = inputB.value;
    const inputH = document.getElementById("inputTrianguloAltura");
    const valueH = inputH.value
    const resp = document.getElementById("respuestaTriangulo");

    const area = areaTriangulo(valueB,valueH);
    resp.innerText= `El area es ${area}`
}

function calcularPerimetroCirculo(){
    const inputR = document.getElementById("inputCirculo");
    const valueR = inputR.value;
    const resp = document.getElementById("respuestaCirculo");

    const perimetro = perimetroCirculo(valueR);
    resp.innerText= `El perimetro es ${perimetro.toFixed(2)}`
}

function calcularAreaCirculo(){
    const inputR = document.getElementById("inputCirculo");
    const valueR = inputR.value;
    const resp = document.getElementById("respuestaCirculo");

    const area = areaCirculo(valueR);
    resp.innerText= `El area es ${area.toFixed(2)}`
}

function alturaTriangulo(lado,base){
    const cuadrado = Math.sqrt;
    const op = (lado*lado)-((base*base)/4)
    const altura = cuadrado(op)
    console.log(altura);
    return altura;
}
function trianguloIsoceles(lado1,lado2,lado3){
    if ((lado1 = lado2) && lado1 != lado3){
        alturaTriangulo(lado1,lado2);
    }
    else if((lado2 = lado3) && lado2 != lado1){
        alturaTriangulo(lado2,lado3);
    }
    else if((lado3=lado1)&&lado3!=lado2){
        alturaTriangulo(lado3,lado1);
    }
    else{
        console.log("No es triangulo isoceles");
    }
}