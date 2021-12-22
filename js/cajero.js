import { darCambio } from "./dar_cambio.js";
import { multiplicarValores } from "./multiplicar.js";

const d = document,
  $monto = d.getElementById('monto');


let cambio = {
  cien: [5, 100],
  cincuenta: [5, 50],
  veinte: [3, 20],
  diez: [4, 10],
  cinco: [2, 5],
  peso: [4, 1],
},
  dinero = parseInt("Ingresa cantidad que deseas cambiar: ");

let mul = 0,
  res = 0;

multiplicarValores(mul, res, cambio, $monto);

d.addEventListener('click', (e) => {
  if (e.target.matches("#btn-cien")) {
    cambio.cien[0]++
    multiplicarValores(mul, res, cambio, $monto);
    
  }
  if (e.target.matches("#btn-cincuenta")){
    cambio.cincuenta[0]++
    multiplicarValores(mul, res, cambio, $monto);
  }
  if (e.target.matches("#btn-veinte")){
    cambio.veinte[0]++
    multiplicarValores(mul, res, cambio, $monto);
  }
  if (e.target.matches("#btn-diez")){
    cambio.diez[0]++
    multiplicarValores(mul, res, cambio, $monto);
  }
  if (e.target.matches("#btn-cinco")){
    cambio.cinco[0]++
    multiplicarValores(mul, res, cambio, $monto);
  }
  if (e.target.matches("#btn-peso")){
    cambio.peso[0]++
    multiplicarValores(mul, res, cambio, $monto);
  }

})

 



