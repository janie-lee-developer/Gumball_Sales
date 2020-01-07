//note: AJAX, XMLHttpRequest constructor only works if the data is stored in same server as the website.

window.onload = function() {
   var url = "http://localhost/gumball/mightygumball.html";
   var request = new XMLHttpRequest();
   request.open("GET", url);
   request.onload = function() {
     if (request.status == 200) {
         updateSales(request.responseText);
      }
   };
   request.send(null);
}

function updateSales(responseText) {
   var salesDiv = document.getElementById("sales");
      //calling DOM to get an Element with ID name "sales", so we can replace JSON data into this element.
   var sales = JSON.parse(responseText);
      // parsing the JSON data in string.
   for (var i = 0; i < sales.length; i++) {
      var sale = sales[i];
         //individualizing each sale by assigning integer to call each object inside the array.
      var div = document.createElement("div");
      div.setAttribute("class", "saleItem");
         //setting an attribute to the newly created div element, so that way we can give CSS effect later.
      div.innerHTML = sale.name + " sold " + sale.sales + "gumballs";
      salesDiv.appendChild(div);
         //placement of the 'div' element will be a child of 'salesDiv' element (the div element w ID="sales").
   }
}
