//const precioOriginal = 120;
//const descuento = 18;
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function discount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("result");
    resultP.innerText = "Total: $" + precioDescuento.toFixed(2);
}

function cuponTotal(){
    const inputPrice = document.getElementById("inputPrecio2");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;

    const precioCupon= descuentoCupon(cuponValue);
    const precioDescuento = calcularPrecioConDescuento(priceValue,precioCupon);

    const results = document.getElementById("respCupon");
    results.innerText="Total: "+precioDescuento.toFixed(2);
}

function descuentoCupon(cupon){

    let cuponPrecio = 0;

    switch(cupon){
        case "2022":
            cuponPrecio = 30;break;
        case "Adan":
            cuponPrecio = 50;break;
        case "Platzi":
            cuponPrecio = 25; break;
        case "Panama":
            cuponPrecio = 75; break;
        case "perro":
            cuponPrecio = 10; break;
        default: 0;
    }

    return cuponPrecio;
}



