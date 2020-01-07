//note: AJAX, XMLHttpRequest constructor only works if the data is stored in same server as the website.

window.onload = function() {
   var url = "http://localhost/sales.json";
   var request = new XMLHttpRequest();
   request.open("GET", url);
   request.onload = function() {
     if (request.status == 200) {
      alert(request.responseText);
      }
   };
   request.send(null);
}

function updateSales(responseText) {
   var salesDiv = document.getElementById("sales");
   salesDiv.innerHTML = ResponseText;
}
