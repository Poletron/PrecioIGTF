function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function CalcularPrecioSinIvaUSD(precioFinal) {
    let precioSinIvaUSD = precioFinal / 1.19;
    return precioSinIvaUSD;
}

function calcularIva(precioFinal) {
    let IVA = (CalcularPrecioSinIvaUSD(precioFinal) * 0.16);
    return IVA;
}

function calcularIGTF(precioFinal) {
    let IGTF = (CalcularPrecioSinIvaUSD(precioFinal) * 0.03);
    return IGTF;
}

function calcularTotalAIngresarUSD(precioFinal) {
    let totalAIngresarUSD = CalcularPrecioSinIvaUSD(precioFinal) + calcularIva(precioFinal);
    return totalAIngresarUSD;
}

function calcularTotalAIngresarBS(precioFinal,tasaDiaria) {
    let totalAIngresarBS = calcularTotalAIngresarUSD(precioFinal) * tasaDiaria;
    return totalAIngresarBS;
}

document.getElementById('boton-calcular').addEventListener('click',function () {
    let montoFinal = document.getElementById('monto-final').value;
    let tasaDiaria = document.getElementById('tasa-diaria').value;
    document.getElementById('total-a-ingresar').innerText = round(calcularTotalAIngresarBS(montoFinal,tasaDiaria));
    document.getElementById('resultado-igtf').innerText = round(calcularIGTF(montoFinal)*tasaDiaria);
    document.getElementById('resultado-iva').innerText = round(calcularIva(montoFinal)*tasaDiaria);
    document.getElementById('subtotal-bs').innerText = round(CalcularPrecioSinIvaUSD(montoFinal)*tasaDiaria);
    document.getElementById('total-bs').innerText = round(montoFinal*tasaDiaria);
})
