//note: AJAX, XMLHttpRequest constructor only works if the data is stored in same server as the website.

window.onload = function() {
  setInterval(handleRefresh, 3000);
    //the setInterval method will call the 'handleRefresh' function in every 3 seconds.
}

function handleRefresh() {
  var url = "http://gumball.wickedlysmart.com?callback=updateSales";
  
  var newScriptElement = document.createElement("script");
    //creating a new element <script> at DOM.
  newScriptElement.setAttribute("src", url);
    //adding an attribute on <script src="url"
  newScriptElement.setAttribute("id", "jsonp");
    //adding an ID attribute called "jsonp" to add CSS later.
  
  var oldScriptElement = document.getElementByID("jsonp");
    //declare a variable and assign an element with ID = "jsonp".
  var head = document.getElementByTagName("head")[0];
    //declare a variable and assign <head> tag with array number [0], meaning the first <head> tag in DOM.
  if (oldScriptElement == null) {
    head.appendChild(newScriptElement);
    // if there is no <script> element w/ id="jsonp", add the new <script> tag under <head>. 
    // This is to make sure, there are no duplicating <script> tags.
  } else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }
    // If there's already a <script> tag, replace the old <script> tag with the new <script> tag. 
    // This handleRefresh function is being repeated every 3 seconds.
}

function updateSales(sales) {
   var salesDiv = document.getElementById("sales");
      //calling DOM to get an Element with ID name "sales", so we can replace JSON data into this element.

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
