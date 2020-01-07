//note: AJAX, XMLHttpRequest constructor only works if the data is stored in same server as the website.

var url = "http://someserver.com/data.json";
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = function() {
   if (request.status == 200) {
     alert("Data received!");
   }
 };
 request.send(null);
