---
layout: default
title: "Common issue"
permalink: /commonissues
---

## Common issues

### Scheduled sync not starting
* **Battery optimization:** Most common issue is that the Android OS is battery optimizing the FolderSync process so it cant run scheduled sync. To ensure sync can occur in background, disable any battery optimization for FolderSync in Android settings.

* **WiFi SSID not detected:** Scheduled sync can be broken if Wifi SSID is not detected on Android 10 and you configured SSID filter on folderPair connection settings - if you need FolderSync to detect SSID, please allow it background access to location. If you already gave permission to only allow while app is in use, you have to go to Android app settings for FolderSync and give location permission again for background use.

* **Wifi doesn't turn on:** Unfortunately Android no longer allows turning on WiFi for apps targeting Android 10.

* **Instant sync issues:** On Android 6.x/7.x instant sync functionality will not work for most devices for external SD card. This is an Android bug or perhaps a new undocumented limitation by Google. Nothing we can do about it unfortunately.

### Google Drive issues
* **Exisisting account not working:** Please try to re-authenticate account or if that fails re-add Google Drive account and update FolderPairs to use newly added account. Some old API keys used by FolderSync can no longer be used, so adding a new account can unfortunately be required.

* **Browser authentication issue:** If you have issues authenticating, please ensure Chrome browser is installed and it is the default browser. If issue persist try clearing data for Chrome browser in Android App settings. Firefox has also been reported by some users to work. Simple browsers on app store that use an internal standard WebView with not be able to work with the security measures Google is enforcing.

* **Syncing to a shared folder:** If you want to sync to a folder somebody has shared with you, you need to add it it your drive. This can be done in the Google Drive browser interface. 

    1. Open the "Shared with me" section. 
    2. Click a folder or files to be added to another location. (it will be highlighted) 
    3. Press down "Shift + Z" 
    4. Choose a location in a dialog box.

### FTP issues
* **TLS session resumption for FTP:** FolderSync doesn't support this, so if using a server like FileZilla you have to disable it in server settings to use Foldersync.

### WebDAV issues

* **2FA access for NextCloud:** If you have 2FA enabled on Nextcloud and want to use FolderSync, see this article: https://help.nextcloud.com/t/how-to-connect-to-webdav-using-totp/7036/2

* **Non-https server connection:** Cleartext http communication is disabled in latest releases of apps. Because of security concerns, it will not be re-enabled. FolderSync supports self-signed certificates so with minimum hassle you can enable SSL support on your home server.

* **Upload fails with java.io.IOException: Stream Closed or similar:** Some servers has a very low request time out setting. If you are using Apache webserver, many NAS like Synology or MyCloud are, you can remove usage of LoadModule reqtimeout_module modules/mod_reqtimeout.so in apache conf file.

* **OwnCloud connection issues:** May be caused by streamlining of the configuration into two account types for ownCloud 6/7 and 8 respectively. Please reconfigure your accounts accordingly. If you get something like "refused stream" error for HTTP/2 you need to upgrade to latest nginx web server and version 2.9.4, where this is fixed.

### Amazon Cloud Drive issues
* **Amazon Cloud Drive unavailable:** Amazon has without warning closed access for 3rd party apps, so this integration is no longer working and has been removed.

### Other issues

* **Sync failing because of file conflicts:** If a file that has not been synced before, exists both locally and remote when syncing, and the two corresponding files do not have an identical modified timestamp, you will get a conflict. The same conflict will happen for a file that has been previously synced, if both the local and remote file changes since last sync (gets updated with a new timestamp and perhaps new content, by other applications or you). You can configure the folderpair to use the overwrite oldest file in such a case using the conflict setting under FolderPair->Advanced. The remote and local file may be identical, other than the timestamp, but FolderSync can not verify this without overwriting one of them with the other, since a file-hash of the remote file is often not available. 

* **Bad request errors or failing folderpairs:** Please try to re-authenticate account. In some cases you also need to re-select to remote folder for folderpairs, since the path structure on the remote end has changed because of usages of new API versions. Just re-select the folder you are already using, so the remote folder info can be refreshed.

* **HTTPS connection errors:** This can happen on newer Android devices, since deprecated encryption ciphers are no longer enabled by default with OkHttp/Android to increase security. This means, if you are connecting to an insecure web server using WebDAV or ownCloud, the connection may fail. You can either upgrade your server or try to enable self-signed certificates for you WebDAV/ownCloud account. See here which protocols/ciphers are supported on which Android versions: https://developer.android.com/reference/javax/net/ssl/SSLEngine.htm