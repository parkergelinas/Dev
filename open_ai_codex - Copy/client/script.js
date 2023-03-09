const endpoint = "/stock-data/";

const form = document.getElementById("stock-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const symbol = document.getElementById("stock-symbol").value;

  const url = `${endpoint}${symbol}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      stockPrice.textContent = data.price;
      stockChange.textContent = data.change;
      stockPercentChange.textContent = data.percentChange;
    })
    .catch((error) => console.error(error));
});
