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

function calcModa(){
    const listaCount ={};

    listas.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento]+= 1;
            }else{
                listaCount[elemento]= 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1]-nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length -1];
    
    return document.getElementById("pResult").innerText =`La moda es ${moda[0]} y se repite ${moda[1]} veces`;
}






