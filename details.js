const loadDetails = async () => {
    console.log("details loaded");
    const currentPath = window.location.href;
    const urlObj = new URL(currentPath);
    const params = new URLSearchParams(urlObj.search);
    if (!params.has("id")) {
      window.location.href = "./CryptoCurrency.html";
    }
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/${params.get(
        "id"
      )}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const res = await data.json();
    renderDetails(res)
  };
  
  const renderDetails = (coin) => {
      console.log(coin);
      const name = `${coin.name} (${coin.symbol.toUpperCase()})`
      console.log(name);
      const desc = coin.description.en
      console.log(desc);
      const logo = coin.image.large
      console.log(logo);
  
      const inr  = coin.market_data.current_price.inr
      const usd  = coin.market_data.current_price.usd
      const eur  = coin.market_data.current_price.eur
      const gbp  = coin.market_data.current_price.gbp
      console.log(inr, usd, eur, gbp);
  
      const card = document.createElement("div")
      card.classList.add("card");
      const logoImg = document.createElement("img")
      logoImg.src = logo
      logoImg.classList.add("logo");
      const descDiv = document.createElement("p")
      descDiv.innerText = desc
      descDiv.classList.add("para");
      const priceContainer = document.createElement("div")
      priceContainer.classList.add("containerPrice");
      const inrPrice = document.createElement("h3")
      inrPrice.innerText = inr;
      inrPrice.classList.add("inr");
      const usdPrice = document.createElement("h3")
      usdPrice.innerText = usd;
      usdPrice.classList.add("usd");
      const eurPrice = document.createElement("h3")
      eurPrice.innerText = eur;
      eurPrice.classList.add("eur");
      const gbpPrice = document.createElement("h3")
      gbpPrice.innerText = gbp;
      gbpPrice.classList.add("gbp");
      priceContainer.appendChild(inrPrice)
      priceContainer.appendChild(usdPrice)
      priceContainer.appendChild(eurPrice)
      priceContainer.appendChild(gbpPrice)
  
      card.appendChild(logoImg)
      card.appendChild(descDiv)
      card.appendChild(priceContainer)
  
      document.getElementById("searchSectionMainContainer33").appendChild(card)
  }
  ;
  
  window.onload = function () {
    loadDetails();
  };