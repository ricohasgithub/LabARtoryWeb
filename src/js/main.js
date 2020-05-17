document.getElementById("mix").onclick  = () => {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var xhttpJSON = JSON.parse(this.responseText);
          console.log(xhttpJSON);
      }
  };

  xhttp.open("POST", "https://console.echoAR.xyz/post?key=blue-dawn-7175&data=yAngle&value=10" + , true);

}
