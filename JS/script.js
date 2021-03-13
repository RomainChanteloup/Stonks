//fonction qui retourne la valeur d'une cryptomonaie
async function getData(crypto,currency) {
    let url= 'https://api.coingecko.com/api/v3/simple/price?ids='+crypto+'&vs_currencies='+currency;
    let response = await 
    fetch(url);
      //console.log(response);
      let data = await response.json();
      //console.log(data);
      return data[crypto][currency];
  }

  async function main() {
    while(1){
      
      document.getElementById("bitcoin").innerHTML = await getData("bitcoin","usd");
      document.getElementById("dogecoin").innerHTML = await getData("dogecoin","usd");
      
      date=new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      document.getElementById("heure").innerHTML = date;

      await new Promise(r => setTimeout(r, 1000));
    }
    
  }
  
  main();