let listas = [];

function pushData(){
    var inputNumber = document.getElementById("inputList").value;

    listas.push(parseInt(inputNumber));

    var pval ="";

    for(var i =0; i<listas.length;i++){
        pval+=listas[i]+ ",  ";
    }

    document.getElementById("pList").innerHTML=pval;
    
    document.getElementById("inputList").value='';
}

function multiplicacion(){
    const mult = listas.reduce( (a, b) => a * b );
    return mult;
}
function calc(){
    var num = multiplicacion();
    var longitud = listas.length;

    const raiz = Math.pow(num, 1 / longitud);
    return document.getElementById("pResult").innerText =`La media geometrica es ${raiz.toFixed(2)}`;
}
