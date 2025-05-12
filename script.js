function getPrice() {
  const crypto = document.getElementById('crypto').value.toUpperCase();
  if (!crypto) return alert('Please enter a crypto symbol.');

  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto.toLowerCase()}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
      if (data[crypto.toLowerCase()]) {
        document.getElementById('result').innerHTML = `Current Price of ${crypto}: $${data[crypto.toLowerCase()].usd}`;
      } else {
        document.getElementById('result').innerHTML = 'Crypto not found or invalid symbol.';
      }
    })
    .catch(() => {
      document.getElementById('result').innerHTML = 'Error fetching price.';
    });
}
