// file javascript
// This file is part of the js-biglietto-treno project.
document.getElementById('ticket-form').addEventListener('submit', function (e) {
      e.preventDefault(); // blocca il refresh della pagina

      const priceKm = 0.21;
      let km = prompt("quanti km vuoi percorrere?");
      let age = prompt("quanti anni hai?");
      //prezzo al km 
      // quanti anni ha il passeggero

      let price = km * priceKm;
      // prezzo totale del biglietto

      if (age < 18) {
            const discountUnder18 = price * 0.2;
            // aggiorno direttamente price!
            price = price - discountUnder18
      } else if (age > 65) {
            const discountOver65 = price * 0.4;
            // aggiorno direttamente price!
            price = price - discountOver65;
      }




      else if (message === "no")

            price = price.toFixed(2);
      console.log("Il prezzo del biglietto è: " + price + " euro");


// prezzo finale del biglietto, arrotondato a due decimali

// messaggio di prompt per l'annullamento dell'acquisto del biglietto