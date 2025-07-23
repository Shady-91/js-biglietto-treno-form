// file javascript


document.getElementById('ticket-form').addEventListener('submit', function (e) {
      e.preventDefault(); // blocca il refresh della pagina

      const priceKm = 0.21;
      const km = parseFloat(document.getElementById('distance').value);
      const age = parseInt(document.getElementById('age').value);
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
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



      // prezzo finale del biglietto, arrotondato a due decimali

      // Mostra il risultato nella pagina
      // ...existing code...
      let resultDiv = document.getElementById('result');
      resultDiv.textContent = `Ecco a te ${firstName} ${lastName}: questo è il prezzo del tuo biglietto (${price} euro) e questi sono i km percorsi ${km}`;
});