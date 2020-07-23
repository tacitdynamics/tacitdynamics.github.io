---
layout: default
title: "Authenticating.."
permalink: /oauth-return/
jsarr:
- js/script.js
---

### Please stand by

Not being redirected back to the app and keep getting stuck on this page?

Make sure you have the latest version of Chrome for Android installed and it is the default browser. If it still doesn't work please try to clear defaults for Chrome app. 

<div id="myworkaround"></div>

{% for js in page.jsarr %}
    <script type="text/javascript">
        {% include {{ js }} %}
    </script>
{% endfor %}