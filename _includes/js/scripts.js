const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('code');
document.getElementById("myworkaround").innerHTML = "OAuth code is: <b>" + myParam + "</b><br/><br/>";