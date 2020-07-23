function copyToClipboard(copyText) {
    const el = document.createElement('textarea');
    el.value = copyText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  
    /* Alert the copied text */
    alert("Copied the code: " + copyText);
}


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('code');
document.getElementById("myworkaround").innerHTML = "OAuth code is: <b>" + myParam + "</b><br/><br/>";
document.getElementById("myworkaround-copy").innerHTML = "<button onclick=\"copyToClipboard(\"" + myParam + "\")\">Copy code to clipboard</button><br/><br/>";