const d = document;

export function darCambio(dinero, cambio, res) {
    
    let total = res,
      counter = 0;
    if (dinero < total) {
      let rescien = dinero,
      a = 0;
      //Dar cambio de billetes $100
      for (
        let i = 1;
        i <= cambio.cien[0] && cambio.cien[1] <= rescien;
        i++, rescien -= cambio.cien[1]
      ) {
        let rescien = (dinero -= cambio.cien[1]);

        counter = i;
        console.log(`${i} billetes de $100  $${rescien}`);
      }
      if(counter===0){
          a = 1
      } else {
          var messageCien = `${counter} Billetes de $100`
          
      }
      //Dar cambio de billetes $50
      let rescincuenta = rescien;
      for (
        let i = 1;
        i <= cambio.cincuenta[0] && cambio.cincuenta[1] <= rescincuenta;
        i++, rescincuenta -= cambio.cincuenta[1]
      ) {
        let rescincuenta = (rescien -= cambio.cincuenta[1]);

        counter = i;
        var validationCincuenta = 1;
        console.log(`${i} billetes de $50  $${rescincuenta}`);
      }
      if(validationCincuenta === 1){
        var messageCincuenta = `${counter} Billetes de $50`
      } 
      
     
      //Dar cambio de billetes $20
      let resveinte = rescincuenta;
      for (
        let i = 1;
        i <= cambio.veinte[0] && cambio.veinte[1] <= resveinte;
        i++, resveinte -= cambio.veinte[1]
      ) {
        let resveinte = (rescincuenta -= cambio.veinte[1]);

        counter = i;
        var validationVeinte = 1;
        console.log(`${i} billetes de $20  $${resveinte}`);
      }
      
      if(validationVeinte === 1){
        var messageVeinte = `${counter} Billetes de $20`
      } 
 
      //Dar cambio de Monedas $10
      let resdiez = resveinte;
      for (
        let i = 1;
        i <= cambio.diez[0] && cambio.diez[1] <= resdiez;
        i++, resdiez -= cambio.diez[1]
      ) {
        let resdiez = (resveinte -= cambio.diez[1]);

        counter = i;
        var validationDiez = 1;
        console.log(`${i} Monedas de $10  $${resdiez}`);
      }

      if(validationDiez === 1){
        var messageDiez = `${counter} Monedas de $10`
      } 
      //Dar cambio de Monedas $5
      let rescinco = resdiez;
      for (
        let i = 1;
        i <= cambio.cinco[0] && cambio.cinco[1] <= rescinco;
        i++, rescinco -= cambio.cinco[1]
      ) {
        let rescinco = (resdiez -= cambio.cinco[1]);

        counter = i;
        var validationCinco = 1;
        console.log(`${i} Monedas de $5  $${rescinco}`);
      }
      if(validationCinco === 1){
        var messageCinco = `${counter} Monedas de $5`
      } 

      //Dar cambio de Monedas $1
      let respeso = rescinco;
      for (
        let i = 1;
        i <= cambio.peso[0] && cambio.peso[1] <= respeso;
        i++, respeso -= cambio.peso[1]
      ) {
        let respeso = (rescinco -= cambio.peso[1]);

        counter = i;
        var validationPeso = 1;
        console.log(`${i} Monedas de $1  $${respeso}`);
      }
      if(validationPeso === 1){
        var messagePeso = `${counter} Monedas de $1`
      } 
      let $info = d.getElementById('info'),
      $ul = d.createElement("ul");
      
      $info.appendChild($ul);

      

      let li =
      [`${(a===1)?'':messageCien}`,
      `${(validationCincuenta != 1)?'':messageCincuenta}`,
      `${(validationVeinte != 1)?'':messageVeinte}`,
      `${(validationDiez != 1)?'':messageDiez}`,
      `${(validationCinco != 1)?'':messageCinco}`,
      `${(validationPeso != 1)?'':messagePeso}`]
      
      

      li.forEach((el) =>{
        setTimeout(() => {
          let $li = d.createElement("li");
          $li.textContent = el;
          $ul.appendChild($li);
        }, 2000);
      })
      
    } else {
      
       let messageE = `Lamentamos no poder hacer su transacción,
        la cantidad que ingreso: $${dinero}, 
        Es superior al total que tenemos en cambio que es : $${total},
        Nos faltan $${dinero - total} para hacer su transacción, 
        vuelva pronto!!!`
      
    }
  }
