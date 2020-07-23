function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("myCode");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the code: " + copyText.value);
  }


const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('code');
document.getElementById("myworkaround").innerHTML = "OAuth code is <<input readonly type=\"text\" value=\""+ myParam + "\" id=\"myCode\"><br/>";
document.getElementById("myworkaround-copy").innerHTML = "<button onclick=\"copyToClipboard()\">Copy code to clipboard</button>";