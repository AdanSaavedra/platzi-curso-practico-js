function calcularMediaAritmetica(lista) {
    let sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    let promedioLista = sumaLista / lista.length;
    return promedioLista;
};
  
let lista = [];

function pushData(){
    var inputNumber = document.getElementById("inputList").value;

    lista.push(parseInt(inputNumber));

    var pval ="";

    for(var i =0; i<lista.length;i++){
        pval+=lista[i]+ ",  ";
    }

    document.getElementById("pList").innerHTML=pval;
    
    document.getElementById("inputList").value='';
}
  
function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
};
function refresh(){
    document.location.reload(true);
}
  
function calcMediana(){
    lista.sort((a, b) => a - b);
    console.log(lista);
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        let elemento1 = lista[mitadLista - 1];
        let elemento2 = lista[mitadLista];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    };
    
    return mediana;
}

function imp(){
    const result =document.getElementById("pResult");
    result.innerText=calcMediana();
}





