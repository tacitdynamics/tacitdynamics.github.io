---
layout: default
title: "FolderSync Help"
permalink: /foldersync/help/3.0.0/
---

# Help
{:.no_toc}

Revision 3.0.0

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

# General info

FolderSync is as the name suggest a folder syncing application. It is not a backup application, although it can be used as such. Its primary purpose is to sync folders between your devices and remote cloud provider or server.

## Add an account
The first thing you probably want to do is to add an account to use for sync with cloud storage or a server. You will be required to provide your login credentials, either directly in FolderSync or on the provider webpage for those using OAuth authentication. If you do not already have an account you can create one at the applicable vendor website.

You can add an account directly from the dashboard by pressing [Add] button on Account card.

Dashboard    | Add account
--------|------
![Test](/assets/img/3.0.0/01_Dashboard.png)   | ![Test](/assets/img/3.0.0/02_Add_account.png)


For this example we will add our Google Drive account, so FolderSync can access our files there.

Depending on the account type, this process may be different. Some cloud providers does not support OAuth authentication. For those provider types where FolderSync need to store credentials, they are stored in encrypted form.

If you want to use SMB, FTP, SFTP or WebDAV, you have to set it up on a NAS, server or your home PC, or have access to an existing account. Explaining how to setup this is not in the scope of this help text. Use Google. :-)

Lets continue configuring our Google Drive account. 

Press the [Authenticate account] button to authenticate access in a browser. When done, you should be returned to FolderSync and see the Login succeeded dialog. Now press [Save] to save your added account.

Account    | Add account
--------|------
![Test](/assets/img/3.0.0/03_Account.png)   | ![Test](/assets/img/3.0.0/04_Account_authenticated.png)


When not using OAuth, FolderSync provides an option to test your entered account settings using a [Test] button, to see if it can connect to the selected provider with the server address and credentials you have entered.

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

## Folderpair configuration options

### General
* **Name:** Unique name of your choice.
* **Sync type:** The type of sync - one-way to local or remote folder or two-way sync. 
* **Remote folder:** The remote folder to sync to or from. Can be selected after an account has been chosen.
* **Local folder:** The local folder on the device to sync to or from.

### Scheduling
* **Use scheduled sync:** Check this if you want to sync on a schedule (and not solely by manual start or Tasker).
* **Sync interval:** Choose how often you want to sync.
* **Sync days:** If sync interval is set to advanced, then this option is shown. Choose which days to sync.
* **Sync times:** If sync interval is set to advanced, then this option is shown. Choose which time of day to sync.

### Sync options
* **Sync sub-folders:** Check this if sub-folders are to be synced. Enabled by default.
* **Sync hidden files:** Check this if hidden files are to be synced. Enabled by default.
* **Sync deletions:** Check this if deletions are to be mirrored. Use with care! Disabled by default. 

### Sync options - Advanced
* **Overwrite old files:** Choose what to do if a file already exist at target. Default setting is to overwrite the old file, so the newest file is used.
* **If conflicting modifications:** Choose what to do if a conflicting modification is detected. A conflicting modification is one where both the source and target file has been changed since last recorded sync. Default is to skip file, which will result in sync warnings. 
* **Instant sync:** Select this for instant sync on change. Only detects changes on local device and may not work with external SD card on newer versions of Android. Use with care!
* **Exclude from force sync:** Select if you want to exclude this folderpair from syncing when pressing [Sync all] button on Sync Status screen.
* **Delete source files after sync:** For one-way sync only. After syncing of files, the source files are deleted. Use with care! Disabled by default.
* **Retry sync if failed:** Enable to automatically retry a scheduled sync at a later time if the sync failed. Disabled by default.
* **Only resync source files if modified:** Only works with one-way sync. Enable this option if you want to be able to delete files in target folder without these files being synced from source again. For example if you sync pictures from your device to a cloud folder, and want to be able to keep them on device and delete them in the cloud folder without them being re-synced later by FolderSync from the device.
* **Rescan media library:** Check this if media library should be updated for deleted or added media files.
* **Use MD5 checksums:** Check this setting if MD5 checksum should be calculated for files. May decrease sync speed and use extra battery, but can also result in less download and upload traffic. Enabled by default.
* **Use temp-file scheme:** Check this setting, if you want to use temp-file scheme. Temp-file scheme means files are transferred using temporary name, and upon completion of transfer is renamed to the final filename. This may break the functionality of some cloud providers (proper revisions etc.). Enabled by default.
* **Disable file-size check:** Check this if transferred files should not be validated against source by comparing file-size. Some providers adds bytes to certain files when uploaded, so this setting can help in those cases. 
* **Copy files to time-stamped folder:** With the corresponding naming pattern field this can be used to use FolderSync for backing up files. Each sync will backup all files to a new subfolder in the target folder named accordingly to the naming-pattern configured. This can thus only be used with one-way sync type. See this [link](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) for details on how to use a custom naming pattern. Note that FolderSync doesn't support free text in the format string, only pattern letters except for time zone and era, which are not supported.

### Sync options - Connection
* **Use WiFi:** Check this setting, if this Folderpair is allowed to sync on WiFi.
* **Turn on WiFi:** Check this if WiFi can be turned on automatically when starting folderpair sync.
* **Use 3G/4G:**  Check this setting, if this FolderPair is allowed to sync on mobile 3G or 4G networks.
* **Use Edge/2G:**  Check this setting, if this FolderPair is allowed to sync on Edge/2G mobile networks.
* **Sync when roaming:** Allow syncing while roaming. Use with caution!
* **Use other connections:** Enable this if other connection types should be allowed (Bluetooth, USB, etc.).
* **Ignore network state:** Ignore any detected network state and attempt syncing of files regardless.
* **Only sync if charging:** Check this setting if FolderPair should only sync when charging.
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

* All filters are case-sensitive. 
* File extension filters can be for example "jpg" or "doc". Don't include leading period.
* If filter value for the folder filters "contains", "equals", "startsWith" and "endsWith" contains a forward slash "/" then the filter is applied to the device path of the folder else only the folder name.
* Regex filters are only applied to filename or foldername, not the full path. See more info for [regex](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html).
* All folders in the tree will be matched against folder filters, so if a folder matches an include filter the files in the folder will be synced, but its subfolders are not synced unless they also matches an include filter.

**Examples**

**Include or exclude a folder xyz in rootfolder and all its sub folders**<br/>
Use folder filter of type "startswith" with value "/mnt/sdcard/rootfolder/xyz". 

**Include a folder xyz in rootfolder and all its files, but not its subfolders**<br/>
Use folder filter of type "equals" with value "/mnt/sdcard/rootfolder/xyz". 

**Include any folder named xyz and all files in those folders, but not their subfolders**<br/>
Use folder filter of type "equals" with value "xyz". 


## Syncing
Syncing occurs according to the schedule you have defined for each folderpair. If a schedule is not defined the folderpair will only be synced if you manually initiate it or if initiated by apps like Tasker. If no network connection is set to be allowed for a folderpair it will never sync, not even if you manually initiate it. This is to ensure you are not accidentally charged for expensive network traffic. Files are compared using their last modification date and optionally using MD5 hashes (for local files and remote providers that offers this information).

### Two-way sync
Two-way sync copies files in both directions, overwriting older files if duplicate files are found. It will also detect cases where modifications have happened on both local and cloud storage. If this happens, the latest modified file will be used or the file will be skipped, according to what you specify in for the folderpair.

### Instant sync
This feature is experimental and can be enabled for a folderpair that syncs local files. When enabled, local file changes will be detected in the device folder, and a immediate partial sync will be attempted. It is recommended that a scheduled sync is still configured, as some change events are not detected properly - fx. on some custom ROMs etc. Newer version of Android may not support this feature on external SD cards.

### Mirroring of deletions
If the "Sync deletions" option is enabled, deletions will also be synced, for all types of sync. FolderSync has an internal database of synced files. If a previously synced filed is deleted at either end, the deletion will also happen at the opposite end (if the file at the opposite end has not changed since last sync). Use this option only if you are sure what you are doing, and at your own risk!

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

## Tasker
FolderSync works as Tasker plugin. This means one or more folderpair syncs can be initiated or cancelled when a condition or rule you configured in Tasker occurs. Configuring Tasker is out of the scope of this help text, but FolderSync is found in the the Plugin section. Note that syncs will run no matter what settings they are configured with, when initiated from Tasker, except if the allowed connection requirement(s) are not met.

FolderSync also supports triggering actions via deeplinks. To trigger a deeplink from Tasker use "Browse URL" action.

## Logging
FolderSync incorporates its own log collection functionality, to help the developers fix bugs that might exist.
To create a log file with useful data, enable [Debug logging] on FolderSync about screen. Redo that function/action that fails (previous errors will not be logged, so its important to recreate the error). After that, go back to the about screen and export the log.

## Notes
### Amazon S3
Amazon endpoint configuration is only used in regards to creating a bucket in this application - all other operations are targeted to a specific bucket you specify, no matter with which endpoint it was created. Using Amazon S3 can incur costs on your part. 
### Box
Box has various upload size limitations based on account type.

