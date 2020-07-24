---
layout: default
title: "FolderSync Help"
permalink: /foldersync/help/2.9.14
---

# Help

Revision 2.9.14

# General info

FolderSync contains 5 main screens, namely the Home, File Manager, Sync Status, Accounts and Folderpairs screens. To change between them press the burger icon in the top left drawer, or swipe out from the left, and the drawer menu that enables switching between screens will show.
As well as the main screens you can also access settings, help and about screens.

Home screen    | Drawer menu
--------|------
![Test](/assets/img/2.9.14/foldersync_screenshot_home.png)   | ![Test](/assets/img/2.9.14/foldersync_screenshot_drawer_menu.png)

With the default configuration, FolderSync starts up on the Home screen. This can be changed on the settings screen.

# Add an account
The first thing you probably want to is to add an account to use for sync with cloud storage. You will be required to provide your login credentials, either directly in FolderSync or on the provider webpage for providers using OAuth authentication. If you do not already have an account you can create one at the applicable vendor website.

Accounts screen    | Account screen
--------|------
![Test](/assets/img/2.9.14/foldersync_screenshot_accounts.png)   | ![Test](/assets/img/2.9.14/foldersync_screenshot_account.png)

For Google Drive and other OAuth supported providers do the following:

1. Select the Account option the drawer menu. You will then be presented with the Account window. Then go ahead an add an account.
2. Tap the plus icon in the bottom right and select the applicable account type in the dialog, eg. Google Drive.
3. You should now be on the account configuration screen where you can add a name for the account.
4. Tap the [Authenticate account] button to be redirected to the provider login page in an external browser window.
5. Enter your login credentials and accept any dialogs that ask if you want to grant FolderSync access, you should then be returned to the app. Note: FolderSync will not know your password, it will only receive an auth token to access the service you are using.
6. When back in FolderSync tap the [Save] button. Your account has now beed added.

Depending on the account type, this process may be different. Some cloud providers does not support OAuth authentication. For those provider types where FolderSync need to store credentials, they are stored in encrypted form.

If you want to use Samba/Windows shares, FTP, SFTP or WebDAV, you have to set it up on a NAS, server or your home PC, or have access to an existing account. Explaining how setup this is not in the scope of this help text. 

When not using OAuth, FolderSync provides an option to test your entered account settings using the [Test] button, to see if it can connect to the selected provider with the server address and credentials you have entered.

# Create a folderpair
A FolderPair is a definition of a sync that you want FolderSync to perform. A folderpair defines a sync between a local folder on your device and a remote folder for your chosen provider type. A sync can sync files to remote cloud storage, to your local storage or both ways. 

Folderpairs screen    | Folderpair screen
--------|------
![Test](/assets/img/2.9.14/foldersync_screenshot_folderpairs.png)   | ![Test](/assets/img/2.9.14/foldersync_screenshot_folderpair.png)

To create a FolderPair do the following:

1. Select the FolderPairs option in the drawer menu to be able to create a FolderPair.
2. Tap the plus icon in the bottom right to got the FolderPair creation screen.
3. On the FolderPair configuration screen enter a name for the folderpair.
4. Select the account this folderpair should be configured for. For syncing to SD card locations there is a default SDCARD account type. Configure any accounts on the account screen as explained in previous chapter.
5. Select the sync type - one-way (to remote provider or device) or two-way sync.
6. Select the remote and local folder for the folderpair - when pressed a selection screen comes up where you can browse to the desired folder(s). Use the actionbar + icon to add a new subfolder at your current location.
7. Now you can either presse [Save] button or configure additional settings. See below for further details.

## Folderpair configuration options

### General
* **Name:** Unique name of your choice.
* **Account:** The account to sync to or from (must be configured first on account page).
* **Remote folder:** The remote folder to sync to or from. Can be selected after an account has been chosen.
* **Local folder:** The local folder on the device to sync to or from.
* **Sync type:** The type of sync - one-way to local or remote folder or two-way sync. 

### Scheduling
* **Use scheduled sync:** Check this if you want to sync on a schedule (and not solely by manual start or Tasker).
* **Sync interval:** Choose how often you want to sync.
* **Sync days:** If sync interval is set to advanced, then this option is shown. Choose which days to sync.
* **Sync times:** If sync interval is set to advanced, then this option is shown. Choose which time of day to sync.

### Sync options
* **Copy files to time-stamped folder:** With the corresponding naming pattern field this can be used to use FolderSync for backing up files. Each sync will backup all files to a new subfolder in the target folder named accordingly to the naming-pattern configured. This can thus only be used with one-way sync type. See this [link](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) for details on how to use a custom naming pattern.
* **Instant sync:** Select this for instant sync on change. Only detects changes on local device and may not work with external SD card on newer versions of Android. Use with care!
* **Exclude from force sync:** Select if you want to exclude this folderpair from syncing when pressing [Sync all] button on Sync Status screen.
* **Sync sub-folders:** Check this if sub-folders are to be synced. Enabled by default.
* **Sync hidden files:** Check this if hidden files are to be synced. Enabled by default.
* **Delete source files after sync:** For one-way sync only. After syncing of files, the source files are deleted. Use with care! Disabled by default.
* **Retry sync if failed:** Enable to automatically retry a scheduled sync at a later time if the sync failed. Disabled by default.
* **Only resync source files if modified:** Only works with one-way sync. Enable this option if you want to be able to delete files in target folder without these files being synced from source again. For example if you sync pictures from your device to a cloud folder, and want to be able to keep them on device and delete them in the cloud folder without them being re-synced later by FolderSync from the device.
* **Sync deletions:** Check this if deletions are to be mirrored. Use with care! Disabled by default. 
* **Overwrite old files:** Choose what to do if a file already exist at target. Default setting is to overwrite the old file, so the newest file is used.
* **If conflicting modifications:** Choose what to do if a conflicting modification is detected. A conflicting modification is one where both the source and target file has been changed since last recorded sync. Default is to skip file, which will result in sync warnings. 

### Connection
* **Use WiFi:** Check this setting, if this Folderpair is allowed to sync on WiFi.
* **Turn on WiFi:** Check this if WiFi can be turned on automatically when starting folderpair sync.
* **Allowed WiFi SSID's:** Enter a list of allowed WiFi SSID's to sync on. If empty, all WiFi networks are allowed.
* **Disallowed Wifi SSID's:** Enter a list of disallowed WiFi SSID's. 
* **Use 3G/4G:**  Check this setting, if this FolderPair is allowed to sync on mobile 3G or 4G networks.
* **Use Edge/2G:**  Check this setting, if this FolderPair is allowed to sync on Edge/2G mobile networks.
* **Sync when roaming:** Allow syncing while roaming. Use with caution!
* **Use other connections:** Enable this if other connection types should be allowed (Bluetooth, USB, etc.).
* **Ignore network state:** Ignore any detected network state and attempt syncing of files regardless.

### Notifications
* **Show notification when syncing:** Show persistent notification while syncing folderpair.
* **Show notification on sync success:** Show dismiss-able notification on sync success .
* **Show notification when changes occur:** Show dismiss-able notification if transfers/deletions happened.
* **Show notification on sync error:**  Show dismiss-able notification if syncs fail for any reason.

### Advanced
* **Only sync if charging:** Check this setting if FolderPair should only sync when charging.
* **Rescan media library:** Check this if media library should be updated for deleted or added media files.
* **Use MD5 checksums:** Check this setting if MD5 checksum should be calculated for files. May decrease sync speed and use extra battery, but can also result in less download and upload traffic. Enabled by default.
* **Use temp-file scheme:** Check this setting, if you want to use temp-file scheme. Temp-file scheme means files are transferred using temporary name, and upon completion of transfer is renamed to the final filename. This may break the functionality of some cloud providers (proper revisions etc.). Enabled by default.
* **Disable file-size check:** Check this if transferred files should not be validated against source by comparing file-size. Some providers adds bytes to certain files when uploaded, so this setting can help in those cases. 

### Sync filters
In the full version you have the ability to create sync filters, where your can include or exclude files and folders based on file type, name, size, file age and modification date. Regular expression filtering is also supported if that is something you are into. Sync filters are specific to the folderpair for which you configure them.

All filters are case-sensitive. 

For file type filters you should enter the file type of the file, for example "jpg" or "doc". Don't include leading period.

All folders will be matched against folder filters - that means if you want to exclude or include a specific folder with name matching "xyz" then all folders in the tree under the root folder configured for the folderpair will be filtered, if it has the name "xyz". 

To exclude or include only a specific "xyz" folder you have to include a forward slash ("/") in the name you specify. Then you can exclude a folder and all its sub folders with a folder filter of type "startswith" with value  "/mnt/sdcard/rootfolder/xyz". When using full path in a filter please only use the "startswith" type filter.

## Syncing
Syncing occurs according to the schedule you have defined for each folderpair. If a schedule is not defined the folderpair will only be synced if you manually initiate it or if initiated by apps like Tasker. If no network connection is set to be allowed for a folderpair it will never sync, not even if you manually initiate it. This is to ensure you are not accidentally charged for expensive network traffic. Files are compared using their last modification date and optionally using MD5 hashes (for local files and remote providers that offers this information).

### Two-way sync
Two-way sync copies files in both directions, overwriting older files if duplicate files are found. It will also detect cases where modifications have happened on both local and cloud storage. If this happens, the latest modified file will be used or the file will be skipped, according to what you specify in for the folderpair.

### Instant sync
This feature is experimental and can be enabled for a folderpair that syncs local files. When enabled, local file changes will be detected in the device folder, and a immediate partial sync will be attempted. It is recommended that a scheduled sync is still configured, as some change events are not detected properly - fx. on some custom ROMs etc. Newer version of Android may not support this feature on external SD cards.

### Mirroring of deletions
If the "Sync deletions" option is enabled, deletions will also be synced, for all types of sync. FolderSync has an internal database of synced files. If a previously synced filed is deleted at either end, the deletion will also happen at the opposite end (if the file at the opposite end has not changed since last sync). Use this option only if you are sure what you are doing, and at your own risk!

# Sync status
The sync status windows provides you with the opportunity to see whats going on when syncing, and to view a history of past syncs that have occurred. It also informs you when the next sync check will run. 

Sync status   | Sync history   | Sync Log
--------|------|---------
![Test](/assets/img/2.9.14/foldersync_screenshot_sync_status.png)   |    ![Test](/assets/img/2.9.14/foldersync_screenshot_sync_history.png)  |    ![Test](/assets/img/2.9.14/foldersync_screenshot_sync_log.png)

Successful syncs will have a green icon, either containing a check mark or plus character. The latter is present when a sync has transferred actual files. A yellow/red icon indicates a sync has errors. 
If you click on an item in the sync history, you will be able to see a detailed log of events for the sync.

# File manager
The file manager allows you to copy/move files to and from your accounts from the local sdcard, as well as move/copy files in a remote storage space. You can also rename files and folders and create new folders. Copying from one remote account to another is not supported, as this is not possible without using the local sdcard as a temporary storage space.
Moving files locally on a cloud provider is not supported by all providers either.

To access other SD card location and configured account swipe out from right to access right drawer menu.

File manager screen    | File manager drawer menu
--------|------
![Test](/assets/img/2.9.14/foldersync_screenshot_file_manager.png)   | ![Test](/assets/img/2.9.14/foldersync_screenshot_file_manager_drawer.png)

To select a file or folder in the file manager long press it, or press the left icon. If you normal press a file it will be opened or, if its a remote file, a dialog will open asking if you want to download an open the file or just copy it. The opening will only succeed if you still have the file manager open when the download has finished. or else the file will be available in the temp folder.

When you press the overflow menu in the file manager you are provides with extra options which may not be immediately visible. The menu options are:

* Select all items
* Toogle view of hidden files
* Sort (with options to sort files on different criteria)
* Refresh (refreshes the files and folder view)
* See pending and completd file manager transfer jobs
* Manage favorites

When you have selected one or more files or folders you are presented with these options:

* Delete
* Copy
* Cut
* Rename (single selection only)
* Details (single selection only)
* Add favorite (single folder selection only)
* Open with (single file selection only)
* Media scan

To copy files manually from the SD card to a cloud provider or the other way around, selected the files you want to transfer, press the copy (or cut) icon, then browse to the folder where you want to paste the files (using a favorite shortcut for example). Then press the paste icon, that will have appeared on the actionbar. That will start the transfer of the files to the folder that are currently designated in the location bar.

# Settings
The settings panel allow you to backup/restore the underlying database. The backup is saved to the default folder /[SDCARD]/Foldersync/backup/ (or another folder which you can select). You can also disable all notifications, if you do not want to be bothered with these when syncs occur. 

You also have the option to disable scheduled syncs completely. If you do this, no scheduled syncs will run. Only disable this, if you use manual sync only or syncs initiated from Tasker or Locale. 

# Tasker
The full version of FolderSync works as Tasker plugin. This means one or more folderpair syncs can be initiated when a condition or rule you configured in Tasker occurs. Configuring Tasker is out of the scope of this help text, but FolderSync is found in the the Plugin section. Note that syncs will run no matter what settings they are configured with, when initiated from Tasker, except if the allowed connection type(s) is not met.

# Logging
FolderSync incorporates its own log collection functionality, to help the developers fix bugs that might exist.
To create a log file with useful data, enable [Collect logs] on FolderSync about screen. Redo that function/action that fails (previous errors will not be logged, so its important to recreate the error). After that, go back to the about screen and review the log. Then press [Send collected logs] to attach the log to a new e-mail. Add your description of the problem and press send. 

# Notes
## Amazon S3
Amazon endpoint configuration is only used in regards to creating a bucket in this application - all other operations are targeted to a specific bucket you specify, no matter with which endpoint it was created. Using Amazon S3 can incur costs on your part. 
## Box
Box has various upload size limitations based on account type.

