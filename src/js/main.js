document.getElementById("mix").onclick  = () => {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("SUCCESS");
          var xhttpJSON = JSON.parse(this.responseText);
          console.log(xhttpJSON);
      }
  };

  xhttp.open("POST", "https://console.echoAR.xyz/post?key=blue-dawn-7175&entry=1d4b3709-99c3-4c97-b96a-fbfa9b95df22&data=yAngle&value=90", true);
  xhttp.send();

  console.log("MIXING");

}
