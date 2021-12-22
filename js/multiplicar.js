
export function multiplicarValores(mul, res, cambio, $monto) {
    
    for (const key in cambio) {
        if (Object.hasOwnProperty.call(cambio, key)) {
          const element = cambio[key];
          mul = element[0] * element[1];
          res += mul;
        }
    }
    
    $monto.textContent = `$${res}.00`;
    
}