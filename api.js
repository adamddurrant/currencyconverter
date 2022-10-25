//After complete load
document.addEventListener('DOMContentLoaded', function () {

  //Form submission
  document.querySelector('form').onsubmit = function () {
    //API fetch and response
    fetch('https://api.exchangerate.host/latest?base=GBP')
      //Take response a provide data in JSON
      .then(response => response.json())
      //Then use it in the following way
      .then(data => {
        const currency = document.querySelector('#currency').value.toUpperCase();
        const rate = data.rates[currency];
        if (rate !== undefined) {
          document.querySelector('#result').innerHTML = `One British Pound is equal to ${rate.toFixed(1)} ${currency}.`;
        } else {
          document.querySelector('#result').innerHTML = 'Invalid currency.';
        };

      });
    // Prevents form from taking users to new page
    return false;
  }

})

  .catch(error => {
    console.log('Error:', error);

});