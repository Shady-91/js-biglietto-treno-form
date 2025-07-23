// file javascript


document.getElementById('ticket-form').addEventListener('submit', function (e) {
      e.preventDefault(); // blocca il refresh della pagina

      const priceKm = 0.21;
      const km = parseFloat(document.getElementById('distance').value);
      const age = parseInt(document.getElementById('age').value);
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



      price = price.toFixed(2);
      console.log("Il prezzo del biglietto è: " + price + " euro");


      // prezzo finale del biglietto, arrotondato a due decimali

      // Mostra il risultato nella pagina
      let resultDiv = document.getElementById('result');
      if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'result';
            document.body.appendChild(resultDiv);
      }
      resultDiv.textContent = "Il prezzo del biglietto è: " + price + " euro";
});

const table = document.createElement('flex-container');
table.className = 'flex-container';