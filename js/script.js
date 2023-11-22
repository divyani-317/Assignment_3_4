// Author: DIVYANI - 895317

// Functionality: toggles the placeholder on the text inputs
function TogglePlaceholders(type){
    let selectedVal = document.getElementById(type + "-select").value;
    if(selectedVal == "cad") {
        document.getElementById( type +"-inp").placeholder="$10.000.000 CAD";
    }
    if(selectedVal == "usd") {
        document.getElementById(type + "-inp").placeholder="$10.000.000 USD";
    }
}

// Functionality: Pass parameters to the main function
function ConvertAmount() {
   let fromCurrency = document.getElementById("from-select").value;
   let toCurrency = document.getElementById("to-select").value;
   document.getElementById("to-inp").value = ConvertedAmount(fromCurrency, toCurrency) ;
}

// Functionality: main calculation
// Return: value as a result
let ConvertedAmount =  function(fromCurrency, toCurrency){
   let fromVal = document.getElementById("from-inp").value;
   const currencyRate = 0.73;
   let result = 0;

   if(fromVal != "") {
    if(!(fromCurrency == "cad" && toCurrency == "cad") && !(fromCurrency == "usd" && toCurrency == "usd")) {
        if(fromCurrency == "cad" && toCurrency == "usd") {
                result = fromVal * currencyRate;
           }
           else if(fromCurrency == "usd" && toCurrency == "cad") {
                result = fromVal / currencyRate;
           }
        }
   }
   return result.toFixed(2);
}

// Functionality: arrow click functionality
function swapSelection() {
   let fromCurrency = document.getElementById("from-select").value;
   let toCurrency = document.getElementById("to-select").value;

   if(fromCurrency == "cad") {
        document.getElementById("from-select").value = "usd";
        TogglePlaceholders("from");
   }
   else {
       document.getElementById("from-select").value = "cad";
       TogglePlaceholders("from");
  }

  if(toCurrency == "cad") {
      document.getElementById("to-select").value = "usd";
      TogglePlaceholders("to");
  }
  else {
     document.getElementById("to-select").value = "cad";
     TogglePlaceholders("to");
  }
}