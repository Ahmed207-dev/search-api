async function ajax() {
  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10",
    );
    let data = await response.json();
    console.log(data);

    let InputText = document.querySelector("#inp");
    let InputSubmit = document.querySelector("#sumbit");
    let resultDiv = document.querySelector(".result");

    InputSubmit.onclick = () => {
      let userValue = InputText.value.toLowerCase().trim();

      let coin = data.find((item) => item.id === userValue);

      if (coin) {
        resultDiv.innerHTML = `<h3> ${coin.name}  {${coin.symbol}}</h3> 
        <p> this price : ${coin.current_price} </P>
        <img src="${coin.image}" width="50px" >
        `;
      } else {
        resultDiv.innerHTML = `<p style="color: red;">Coin not found! Try "bitcoin" or "ethereum"</p>`;
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
ajax();
