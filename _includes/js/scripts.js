function copyToClipboard(copyText) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = copyText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  
    /* Alert the copied text */
    alert("Copied the code: " + copyText);
}


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('code');
document.getElementById("myworkaround").innerHTML = "OAuth code is: <b>" + myParam + "</b><br/><br/>";
document.getElementById("myworkaround-copy").innerHTML = "<button onclick=\"copyToClipboard(\"" + myParam + "\")\">Copy code to clipboard</button><br/><br/>";