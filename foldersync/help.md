---
layout: default
title: "FolderSync Help"
permalink: /foldersync/help/
---

# Help
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

# General info

FolderSync is as the name suggest a folder syncing application. It is not a backup application, although it can be used as such. Its primary purpose is to sync folders between your devices and remote cloud provider or server.

## Permissions
For FolderSync to function correctly, it must have the required permissions granted to it. On the welcome wizard on first run of the app you should se a permissions screen with a overview of these permissions and how to grant them. The permissions screen can always be accessed directly from the about menu page (the about page is the right-most option on the bottom menu).

There are different permissions needed, depending on Android OS version. Not all permissions are strictly needed, depending on your use case, but "Write to device storage" and "Manage all files" permissions are required for a sync to run correctly. "Manage all files" permission is only available on Android 11 and newer.

Android 10 - Example with External SD card   | Android 11 - With Manage all files permission
--------|------
![Test](/assets/img/3.0.0/permissions_sdk29.png)   | ![Test](/assets/img/3.0.0/permissions_sdk30.png)

## Add an account
The first thing you probably want to do is to add an account to use for sync with cloud storage or a server. You will be required to provide your login credentials, either directly in FolderSync or on the provider webpage for those using OAuth authentication. If you do not already have an account you can create one at the applicable vendor website.

You can add an account directly from the dashboard by pressing [Add] button on Account card.

Dashboard    | Add account
--------|------
![Test](/assets/img/3.0.0/01_Dashboard.png)   | ![Test](/assets/img/3.0.0/02_Add_account.png)


For this example we will add our Google Drive account, so FolderSync can access our files there.

Depending on the account type, this process may be different. Some cloud providers does not support OAuth authentication. For those provider types where FolderSync need to store credentials, they are stored in encrypted form.

If you want to use SMB, FTP, SFTP or WebDAV (HTTPS only), you have to set it up on a NAS, server or your home PC, or have access to an existing account. Explaining how to setup this is not in the scope of this help text. Use Google. :-)

Lets continue configuring our Google Drive account. 

Press the [Authenticate account] button to authenticate access in a browser. When done, you should be returned to FolderSync and see the Login succeeded dialog. Now press [Save] to save your added account.

Account    | Add account
--------|------
![Test](/assets/img/3.0.0/03_Account.png)   | ![Test](/assets/img/3.0.0/04_Account_authenticated.png)


When not using OAuth, FolderSync provides an option to test your entered account settings using a [Test] button, to see if it can connect to the selected provider with the server address and credentials you have entered.

See examples below:

WebDAV | FTP | SMB2
--------|------|------
![Test](/assets/img/3.0.0/foldersync_webdav.png)  | ![Test](/assets/img/3.0.0/foldersync_ftp.png) | ![Test](/assets/img/3.0.0/foldersync_smb2.png)

## Account configuration options

### Cloud services with OAuth authentication
For cloud services like Box, Dropbox Google Drive, Hubic, OneDrive and pCloud you can initiate the browser based authentication flow by pressing [Authenticate Account] button. After you have authenticated in the browser it should redirect you  back to the app and you can save the account. 

If you are instead redirect back to a webpage, you can copy the fallback OAuth code, press back until you see the account screen in FolderSync and again and use the [Enter OAuth code] button to enter the code.

### Login based cloud providers
For login based cloud providers like CloudMe, HiDrive, Livedrive, MEGA, MyDrive.ch, MyKolab.com, NetDocuments, Storegate, SugarSync, WEB.DE and Yandex Disk you will need to enter your credentials to the service to connect.

### Amazon S3
* **Access key ID:** The access key ID.
* **Secret access key:** The secret access key.
* **Custom endpoint:** If targeting custom S3 endpoint enter it here.
* **Use reduced redundancy:** If you want to use reduced redunancy for buckets created.
* **Region:** The region with which to use this account entry.

### MinIO
Note: MinIO account can be used to target S3-compatible servers other than MinIO.
* **Access key ID:** The access key ID.
* **Secret access key:** The secret access key.
* **Server adress:** The IP adress or hostname of the MinIO server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.

### FTP
Note: For your own safety please do not use FTP or implicit FTPS.
* **Login name:** Your username for the server.
* **Password:** Your password for the server.
* **Server adress:** The IP adress or hostname of the server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.
* **Path (optional):** Optional path on the server that the connection should open on connection.
* **Connection type:** Choose plain FTP, explicit FTPS (recommend) or implicit FTPS (not recommended).
* **Allow self-signed cert:** Enable if you use a self-signed SSL certicate on the server.
* **Active mode:** To enable FTP active mode.
* **Disable compression:** To disable stream compression.
* **Force usage of MLSD command:** Force listing of FTP folders to use MLSD command, this can be useful for servers that support this command but doesn't let the client know.
* **Use legacy FTP library:** Use legacy FTP library for compatibility with some FTP servers and special character encoding.
* **Charset:** The charset that the server uses to return with.

### SFTP
* **Login name:** Your username for the server.
* **Password:** Your password for the server.
* **Server adress:** The IP adress or hostname of the server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.
* **Path (optional):** Optional path on the server that the connection should open on connection.
* **Host key fingerprint:** The host key fingerprint, this will be pre-filled when you test account. If the host key changed connection will fail until you update the fingerprint again.
* **Known hosts file:** Known host file - supply this if you want to ensure connection can only be made to the specified servers in the file.
* **Private key-file:** A private key file used for authentication in addition to or instead of username/password.
* **Key-file password:** The password to access the private key file.
* **Disable compression:** To disable stream compression.
* **Charset:** The charset that the server uses to return with.

### SMB1
Note: Please use SMB2 if possible.
* **Login name:** Your username for the server.
* **Password:** Your password for the server.
* **Server adress:** The IP adress or hostname of the server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.
* **Path (optional):** Optional path on the server that the connection should open on connection.
* **NTLM domain (optional):** Some Windows SMB servers may require this.

### SMB2
* **Login name:** Your username for the server.
* **Password:** Your password for the server.
* **Server adress:** The IP adress or hostname of the server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.
* **SMB share name:** The name of the SMB share you wish to connect to, this must be entered. For SMB2 FolderSync has no browse shares functionality.
* **NTLM domain (optional):** Some Windows SMB servers may require this.

### WebDAV/NextCloud/OwnCloud
Note: FolderSync only support WebDAV connection to servers with SSL encryption.
The NextCloud/OwnCloud account types automatically adds the WebDAV compatible path on the server to the configuration. If it doesn't work for your server, please try to create a plain WebDAV account using configuration guide found in the NextCloud/OwnCloud documentation.
* **Login name:** Your username for the server.
* **Password:** Your password for the server.
* **Server adress:** The IP adress or hostname of the server (without protocol or path), so like "192.34.243.2" or "my.server.com".
* **Port:** The port to use.
* **Path (optional):** Optional path on the server that the connection should open on connection.
* **NTLM domain (optional):** Some Windows WebDAV servers may require this.
* **Allow self-signed cert:** Enable if you use a self-signed SSL certicate on the server.
* **Allow insecure Cipher suites:** Some old servers have insecure ciphers for SSL encryption which you can choose to support.
* **Use expect-continue:** Some WebDAV servers doesn't like this to be enabled.
* **Use HTTP 1.1 only:** Some WebDAV server has issues with HTTP/2 hence why you can force the connection to use HTTP 1.1.
* **Authentication type:** Use this to explicitly set the authentication type to use against the server.

## Create a folderpair
From the dashboard you can create a folderPair. A folderPair is a definition of a sync that you want FolderSync to perform. It defines a sync between a local folder on your device and a remote folder for your chosen provider type. A sync can sync files to remote cloud storage, to your local storage or both ways. 

Create a new folderPair by pressing [Create] on folderPair card and select an account to use. SD CARD account is a built-in account type to use to sync between folders on SD card only. 

For this example we will use our Google Drive account we added earlier.

Folderpairs screen    | Folderpair screen
--------|------
![Test](/assets/img/3.0.0/05_Add_folderPair.png)   | ![Test](/assets/img/3.0.0/06_FolderPair.png)

You can now configure your folderPair:

1. Edit the name if you wish
2. Select the sync type - one-way (to remote provider or device) or two-way sync.
3. Select the remote and local folder for the folderpair - when pressed a selection screen comes up where you can browse to the desired folder. 
7. Now you can either presse [Save] button or configure additional settings. See below for further details.

## Reset
There is a reset button if you want to do a clean sync. Resetting a folderpair will remove the stored sync status for all synced files, so for each file encountered in a sync it will be handled as it has never been synced before. This is equivalent to creating a new folderPair with the same settings. It will not delete sync history.

## Folderpair configuration options

### General
* **Name:** Unique name of your choice.
* **Sync type:** The type of sync.

    **To remote folder:** Files will be uploaded to remote cloud/server folder only. Files will not be downloaded to device folder.<br/>
    **To local folder:** Files will be downloaded to device folder only. Files will not be uploaded to remote folder.<br/>
    **Two-way:** Files will both be uploaded to remote server and downloaded to device folder.
* **Remote folder:** The remote folder to sync to/from. Can be selected after an account has been chosen.
* **Local folder:** The local folder on the device to sync to/from.

### Scheduling
* **Use scheduled sync:** Check this if you want to sync on a schedule (and not solely by manual start or Tasker).
* **Sync interval:** Choose how often you want to sync.
* **Sync days:** If sync interval is set to advanced, then this option is shown. Choose which days to sync.
* **Sync times:** If sync interval is set to advanced, then this option is shown. Choose which time of day to sync.

### Sync options
* **Sync sub-folders:** Check this if sub-folders are to be synced. Enabled by default.
* **Sync hidden files:** Check this if hidden files are to be synced. Enabled by default.
* **Sync deletions:** Check this if deletions are to be synced. Use with care! Disabled by default. 

### Sync options - Advanced
* **Overwrite old files:** Choose what to do if a file already exist at target. Default setting is to overwrite the old file, so the newest file is used, which would the setting for most to use if running a normal sync. Some people may only want a file to transfer once and then not be updated on changes, in that case set this to never.
* **If conflicting modifications:** Choose what to do if a conflicting modification is detected. A conflicting modification is one where both the source and target file has been changed since last recorded sync. Default is to skip file, which will result in sync warnings. 
* **Instant sync:** Select this for instant sync on change. Only detects changes on local device and may not work with external SD card on newer versions of Android. Can not be used with "Copy files to time-stamped folder" option or one-way sync to SD card.
* **Exclude from force sync:** Select if you want to exclude this folderpair from syncing when pressing [Sync all] button on Sync Status screen.
* **Delete source files after sync:** For one-way sync only. After syncing of files, the source files are deleted. Use with care! Disabled by default.
* **Retry sync if failed:** Enable to automatically retry a scheduled sync at a later time if the sync failed. Disabled by default.
* **Only resync source files if modified:** Only works with one-way sync. Enable this option if you want to be able to delete files in target folder without these files being synced from source again. For example if you sync pictures from your device to a cloud folder, and want to be able to keep them on device and delete them in the cloud folder without them being re-synced later by FolderSync from the device.
* **Rescan media library:** Check this if media library should be updated for deleted or added media files.
* **Use MD5 checksums:** Check this setting if MD5 checksum should be calculated for device files. May decrease sync speed and use extra battery, but can also result in less download and upload traffic. Does not have any effect in regards to remote files for cloud providers/protocols where MD5 checksum is not supplied. Disabled by default.
* **Use temp-file scheme:** Check this setting, if you want to use temp-file scheme. Temp-file scheme means files are transferred using temporary name, and upon completion of transfer is renamed to the final filename. This may break the functionality of some cloud providers (proper revisions etc.). Enabled by default.
* **Disable file-size check:** Check this if transferred files should not be validated against source by comparing file-size. Some providers adds bytes to certain files when uploaded, so this setting can help in those cases. 
* **Only sync if charging:** Check this setting if FolderPair should only sync when charging.
* **Create local sync folder if missing:** If you want the local device folder selected for folderPair to be created if it is missing. If this option is not enabled the sync will throw an error if the local device sync folder is not found, which is the safer option, so you don't potentially risk deleting all cloud files if you have enabled deletions for folderPair and you accidentially rename the device folder etc.
* **Copy files to time-stamped folder:** With the corresponding naming pattern field this can be used to use FolderSync for backing up files. Each sync will backup all files to a new subfolder in the target folder named accordingly to the naming-pattern configured. This can thus only be used with one-way sync type. See this [link](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) for details on how to use a custom naming pattern. Note that FolderSync doesn't support free text in the format string, only pattern letters except for time zone and era, which are not supported. Only available for one-way sync.

### Sync options - Connection
* **Use WiFi:** Check this setting, if this Folderpair is allowed to sync on WiFi.
* **Turn on WiFi:** Check this if WiFi can be turned on automatically when starting folderpair sync.
* **Use 3G/4G:**  Check this setting, if this FolderPair is allowed to sync on mobile 3G or 4G networks.
* **Use Edge/2G:**  Check this setting, if this FolderPair is allowed to sync on Edge/2G mobile networks.
* **Sync when roaming:** Allow syncing while roaming. Use with caution!
* **Use other connections:** Enable this if other connection types should be allowed (Bluetooth, USB, etc.).
* **Ignore network state:** Ignore any detected network state and attempt syncing of files regardless.
* **Allowed WiFi SSID's:** Enter a list of allowed WiFi SSID's to sync on. If empty, all WiFi networks are allowed.
* **Disallowed Wifi SSID's:** Enter a list of disallowed WiFi SSID's. 

### Sync options - Notifications
* **Show notification when syncing:** Show persistent notification while syncing folderpair.
* **Show notification on sync success:** Show dismiss-able notification on sync success .
* **Show notification when changes occur:** Show dismiss-able notification if transfers/deletions happened.
* **Show notification on sync error:**  Show dismiss-able notification if syncs fail for any reason.

### Sync filters
You can add filters where your can configure to include or exclude files and folders based on file type, name, size, file age and modification date. Regular expression filtering is also supported if that is something you are into. Sync filters are specific to the folderpair for which you configure them.

Some notes:

* Filter value should match the local folder path when using path in filter. Filters with path will not be compared to remote folder path.
* All filters case-insensitive. 
* File extension filters can be for example "jpg" or "doc". Don't include leading period.
* If filter value for the folder filters "contains", "equals", "startsWith" and "endsWith" contains a forward slash "/" then the filter is applied to the device path of the folder else only the folder name.
* Regex filters are only applied to filename or foldername, not the full path. See more info for [regex](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html).
* All folders in the tree will be matched against folder filters, so if a folder matches an include filter the files in the folder will be synced, but its subfolders are not synced unless they also matches an include filter.

**Examples**

**Include or exclude a file abc.txt**<br/>
Use filter of type "File name equals" with value "abc.txt".

**Include or exclude all files of type avi**<br/>
Use filter of type "File extension" with value "avi".

**Include or exclude a specific folder xyz and all its sub folders**<br/>
Use filter of type "Folder name starts with" with value "/mnt/sdcard/rootfolder/xyz". 

**Include a specific folder xyz and all files in this folder, but not its subfolders**<br/>
Use filter of type "Folder name equals" with value "/mnt/sdcard/rootfolder/xyz". 

**Include any folder named xyz and all files in those folders, but not their subfolders**<br/>
Use filter of type "Folder name equals" with value "xyz". 


## Syncing
Syncing occurs according to the schedule you have defined for each folderpair. If a schedule is not defined the folderpair will only be synced if you manually initiate it or if initiated by apps like Tasker. If no network connection is set to be allowed for a folderpair it will never sync, not even if you manually initiate it. This is to ensure you are not accidentally charged for expensive network traffic. Files are compared using their last modification date and optionally using MD5 hashes (for local files and remote providers that offers this information).

### Two-way sync
Two-way sync copies files in both directions, overwriting older files if duplicate files are found. It will also detect cases where modifications have happened on both local and cloud storage. If this happens, the latest modified file will be used or the file will be skipped, according to what you specify in for the folderpair.

### Instant sync
This feature is experimental and can be enabled for a folderpair that syncs local files. When enabled, local file changes will be detected in the device folder, and a immediate partial sync will be attempted. It is recommended that a scheduled sync is still configured, as some change events are not detected properly - fx. on some custom ROMs etc. Newer version of Android may not support this feature on external SD cards.

### Sync of deletions
If the "Sync deletions" option is enabled deletions will also be synced for all types of sync. FolderSync has an internal database of synced files. If a previously synced file is deleted at either end, the deletion will also happen at the opposite end (if the file at the opposite end has not changed or been added since last sync). One-way sync will only delete files at target, while two-way sync will delete both local and remote files if needed. Use this option only if you are sure what you are doing, and at your own risk!

## Sync status
The sync status on the dashboard provides you with the opportunity to see whats going on when syncing, and to view a history of past syncs that have occurred. It also informs you when the next sync check will run. 

Sync status   | Sync Log
--------|------|---------
![Test](/assets/img/3.0.0/09_Sync_in_progress.png)   |   ![Test](/assets/img/3.0.0/10_Sync_log.png)

Successful syncs will have a green icon, either containing a check mark or plus character. The latter is present when a sync has transferred actual files. A yellow/red icon indicates a sync has errors. 

If you click on an item in the sync history, you will be able to see a detailed log of events for the sync.

## Settings
The settings panel allow you to backup/restore the underlying database. The backup is saved to the default folder /[SDCARD]/Foldersync/backup/ (or another folder which you can select). You can also disable all notifications, if you do not want to be bothered with these when syncs occur. 

You also have the option to disable scheduled syncs completely. If you do this, no scheduled syncs will run. Only disable this, if you use manual sync only or syncs initiated from Tasker or Locale. 

## Notifications
If you click About->Settings->Notifications you will be taken to Android OS notification settings for FolderSync.
Here you can configure the different notification FolderSync show, if they should muted or hidden etc.

FolderSync has 3 configured notification channels (on Android 8.0 or newer).

* FolderSync service - notification shown when background sync is running
* FolderSync File Manager - notifications shown by the file manager
* FolderSync Sync - Notification shown as configured on folderPair notifications screen

Notification settings   | Notification channel settings
--------|------|---------
![Test](/assets/img/notification_settings.png)   |   ![Test](/assets/img/notification_channel_settings.png)
## Tasker or similar automation apps
FolderSync works as Tasker plugin and supports deeplinks when triggered from other automation apps. This means one or more folderpair syncs can be initiated or cancelled when a condition or rule you configured in automation app occurs. Configuring automation apps is out of the scope of this help text, but FolderSync is found in the the Plugin section for Tasker. Note that syncs will run no matter what settings they are configured with, when initiated from automation app, except if the allowed connection requirement(s) are not met.

As mentioned FolderSync also supports triggering actions via deeplinks. To trigger a deeplink from Tasker use "Browse URL" action.
For deeplinks to work automation must be enabled in Foldersync settings. Opening deeplinks by copy/pasting directly to browser will not work.

## Logging
FolderSync incorporates its own log collection functionality, to help the developers fix bugs that might exist.
To create a log file with useful data, enable [Debug logging] on FolderSync about screen. Redo that function/action that fails (previous errors will not be logged, so its important to recreate the error). After that, go back to the about screen and export the log.

## Notes
### Amazon S3
Amazon endpoint configuration is only used in regards to creating a bucket in this application - all other operations are targeted to a specific bucket you specify, no matter with which endpoint it was created. Using Amazon S3 can incur costs on your part. 
### Box
Box has various upload size limitations based on account type.

