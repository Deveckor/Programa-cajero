import { darCambio } from "./dar_cambio.js";
import { multiplicarValores} from "./multiplicar.js";

const d = document,
  $monto = d.getElementById('monto');
  
  
  







let cambio = {
  cien: [5, 100],
  cincuenta: [5, 50],
  veinte: [3, 20],
  diez: [4, 10],
  cinco: [2, 5],
  peso: [4, 1],
};

 


let mul = 0,
res=0;

multiplicarValores(mul,res, cambio, $monto);

let residuo = parseInt($monto.textContent.replace('$', ''))


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
  if (e.target.matches(".btn-cambiar")) {

    
    let $coinOne = d.getElementById('coinOne'),
    $cointwo = d.getElementById('coinTwo'),
    $cointhree = d.getElementById('coinThree'),
    $coinfour = d.getElementById('coinFour'),
    $coinfive = d.getElementById('coinFive'),
    $coin = [$coinOne, $cointwo, $cointhree, $coinfour, $coinfive],
    $pot = d.getElementById('pot');
    
    
    $pot.classList.toggle("none");
    $pot.classList.add("anipot");

    
    for (let i = 0; i < $coin.length; i++) {
      setTimeout(() => {
        $coin[i].classList.toggle('none');
        $coin[i].classList.add('ani')
      }, Math.random() *2000);
      
    } 
    
    
        
    
    
    
    

    setTimeout(() => {
      for (let i = 0; i < $coin.length; i++) {
          $coin[i].classList.toggle('none');
          $coin[i].classList.remove('ani'); 
      } 
      $pot.classList.toggle("none");
      $pot.classList.remove("anipot");
    }, 5000);
    let res = parseInt($monto.textContent.replace('$', ''))
    let dinero = document.getElementById('input').value;
    
      
      darCambio(dinero,cambio,res,$monto);
    

    e.preventDefault();
    
    
    
    
    
  }
})

 



