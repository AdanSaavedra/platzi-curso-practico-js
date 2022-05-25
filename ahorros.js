//Variables
var salud = 0.20;
var educacion = 0.15;
var regalos = 0.10;
var diversion = 0.20;    
var inversiones = 0.25;
var gustosPersonales = 0.10;

//Realizando operaciones
function imp(){
    var inputValue =document.getElementById("sueldo");
    var total = parseInt(inputValue.value) ;
    
    let saludTotal = () => (salud*total);
    var imprimirSalud = saludTotal();
    document.getElementById("1-result").innerText=`Cantidad de dinero mensual para salud= ${imprimirSalud.toFixed(2)}`;

    let educacionTotal = () => (educacion*total);
    var imprimirEducacion = educacionTotal();
    document.getElementById("2-result").innerText=`Cantidad de dinero mensual para educacion= ${imprimirEducacion.toFixed(2)}`;

    let regalosTotal = () => (regalos*total);
    var imprimirRegalos = regalosTotal();
    document.getElementById("3-result").innerText=`Cantidad de dinero mensual para regalos= ${imprimirRegalos.toFixed(2)}`;

    let diversionTotal = () => (diversion*total);
    var imprimirDiversion = diversionTotal();
    document.getElementById("4-result").innerText=`Cantidad de dinero mensual para diversion= ${imprimirDiversion.toFixed(2)}`;

    let inversionesTotal = () => (inversiones*total);
    var imprimirInversiones = inversionesTotal();
    document.getElementById("5-result").innerText=`Cantidad de dinero mensual para inversiones= ${imprimirInversiones.toFixed(2)}`;

    let gustosTotal = () => (gustosPersonales*total);
    var imprimirGustos = gustosTotal();
    document.getElementById("6-result").innerText=`Cantidad de dinero mensual para gustos personales= ${imprimirGustos.toFixed(2)}`;
}
