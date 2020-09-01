---
layout: default
title: "FolderSync Changelog"
permalink: /foldersync/changelog/
---

## FolderSync Changelog

### Version 3.0.15 (01-09-2020)
* Fix Hubic listing issue. 
* Removed client side encryption support for AmazonS3.

### Version 3.0.14 (25-08-2020)
* Fix Root

### Version 3.0.13 (23-08-2020)
* Fix Box nested folder issue. 
* Fix sporadic Dropbox upload issue.

### Version 3.0.12 (21-08-2020)
* Fix filters.
* Fix sharing multiple files to FolderSync.

### Version 3.0.11 (19-08-2020)
* Fix scheduling of sync on some devices.

### Version 3.0.10 (18-08-2020)
* Fix file size/modified time filters. 
* Fix upload to Synology using SMB2.

### Version 3.0.9 (15-08-2020)
* Google Shared drive support (experimental). 
* Fix folder filters.
* More info on history list.
* Trigger backup from Tasker.
* Make opened file in file manager editablel.
* Remove setting permission for SFTP uploaded files.

### Version 3.0.8 (29-07-2020)
* Fix symlink issue.
* Fix empty folder issue with AmazonS3.
* Fix upload issue for Google Drive if file exists.
* Tasker plugin options to toggle scheduling syncing.

### Version 3.0.7 (26-07-2020)
* Fix sporadic Dropbox/Google Drive upload issue.

### Version 3.0.6 (24-07-2020)
* Fallback for OAuth login.
* Fix folder deletion.
* Fix backup folder creation bug.
* Show selected count.

### Version 3.0.5 (17-07-2020)
* Reordering of FolderPairs.
* Fix RTL display.
* UI Color fixes.
* Added launcher shortcut to sync all.
* SFTP nested symbolic folder link fix.

### Version 3.0.4 (13-07-2020)
* Fix relative symlinks for SFTP.
* Collapsible log sections.
* Copy folderpair option.
* Fix encoding bug if space in WebDAV path.
* UI fixes.

### Version 3.0.3 (10-07-2020)
* SFTP optimizations.
* SMB2 fix for Synology NAS.

### Version 3.0.2 (08-07-2020)
* Fix root access.
* Multi select logs.

### Version 3.0.1 (06-07-2020)
* Crash fixes

### Version 3.0.0 (05-07-2020)
* UI update.
* Bottom navigation.
* Dashboard with sync history and status.
* Support for day/night theme.
* Support for deeplinks to trigger actions. 
* Lots of other minor fixes.

### Version 2.10.3 (04-06-2020)
* Fix for pCloud.

### Version 2.10.2 (16-05-2020)
* Fix for SMB2 sync to root of share. 
* Trigger fingerprint scanner immediately.

### Version 2.10.1 (13-05-2020)
* Support for MEGA 2FA login. 
* Fixed SMB2 sync issue with some configurations.

### Version 2.10.0 (10-05-2020)
* Added experimental SMB2 support. 
* Re-added MEGA support. 
* Fixed SSID issue on Android 10.

### Version 2.9.19 (03-05-2020)
* Fix ads showing in premium version.

### Version 2.9.18 (02-05-2020)
* Updated 3rd party libraries.
* Removed non-supported or defunct cloud providers. 
* Removed support for MEGA because of crash/compatability issues using their SDK.
* Because of security measures when targeting latest Android SDK's non-SSL http communication will no longer be allowed. You can try enabling SSL on your server (FolderSync support self-signed certificates).
* Enabled all Pro features in free version, but showing some more ads.
* Contact us and request the previous version if you need non-SSL support for WebDAV.

### Version 2.9.16 (16-05-2018)
* Bugfix: Fix to issues with SD card and speed.

### Version 2.9.15 (13-05-2018)
* Bugfix: Fixed OneDrive uploads of larger files.

### Version 2.9.14 (29-04-2018)
* Bugfix: Now asking for Location permission to be able to see WiFi SSID on Android 8.1 and newer.
* Bugfix: When creating Google Drive account there no longer be security warning.
* Bugfix: fixed OneDrive Business.

### Version 2.9.12 (31-05-2017)
* Bugfix: fixed issue with root file handling.

### Version 2.9.11 (28-05-2017)
* Bugfix: fixed MEGA issues in lite version.

### Version 2.9.10 (24-05-2017)
* Bugfix: fixed various minor issues.
* Feature: removed some limitations of free version.
* Feature: lite users can now upgrade existing app to Pro version.

### Version 2.9.9 (17-05-2017)
* Bugfix: fixed issues with Amazon S3 sync.
* Bugfix: force use of Chrome tab for Google Drive auth.

### Version 2.9.8 (01-05-2017)
* Bugfix: refactored database encryption of credentials which broke on Android 7.0. You may need to re-authenticate or re-enter password (again).
* Bugfix: fixed restore backup on Android 7.x.
* Bugfix: fixed issue with PCloud parsing error.

### Version 2.9.7 (16-12-2016)
* Bugfix: fixed Amazon Cloud Drive login issue.
* Bugfix: added option to ignore network type if it cannot be detected correctly.

### Version 2.9.6 (19-07-2016)
* Bugfix: fixed erroneous sync conflicts.

### Version 2.9.5 (14-07-2016)
Bugfix: fixed timestamps for Hubic/Amazon Cloud Drive. Can cause sync conflicts, so beware.
* Bugfix: various bug fixes.

### Version 2.9.4 (10-07-2016)
* Bugfix: sync speeds improvements.
* Bugfix: support for TLSv1.2 on Andriod 4.1-4.4.

### Version 2.9.3 (07-07-2016)
* Bugfix: various bugfixes.

### Version 2.9.2 (03-07-2016)
* Bugfix: fixed issues in regards to Dropbox/SFTP/Google Drive syncing.

### Version 2.9.1 (01-07-2016)
* Notice: Dropbox users must re-authenticate accounts because of migration to V2 API which uses OAuth2. In some cases you also need to reselect remote folder for FolderPair.
* Bugfix: fixed issues regarding Box sync and display of sync log.

### Version 2.9.0 (29-06-2016)
* Notice: Dropbox users must re-authenticate accounts because of migration to V2 API which uses OAuth2.
* Provider: support for new OneDrive API and OneDrive Business, Hubic and PCloud.
* Feature: support for Nexus Imprint to unlock if using pin code.
* Feature: support for Marshmallow runtime permissions.
* Bugfix: fixed issue with waiting for Wifi for SD card sync.
* Bugfix: fixed domain name not being saved on account screen.
* Bugfix: fixed other minor issues.

### Version 2.8.5 (07-02-2016)
* Bugfix: minor bugfixes.

### Version 2.8.4 (05-02-2016)
* Bugfix: fix for external SD card on Marshmallow.

### Version 2.8.3 (19-10-2015)
* Provider: updated SFTP library.
* Bugfix: fixed issue with semicolon in filenames for FTP.
* Bugfix: fixed various minor bugs.

### Version 2.8.2 (12-10-2015)
* Bugfix: fixed dark text on dark background in menu.
* Bugfix: fixed issue with conflict for local SD card folderpairs.
* Bugfix: fixed folder filters not working properly.

### Version 2.8.1 (11-10-2015)
* Bugfix: fixed some bugs related to startup wizard.

### Version 2.8.0 (08-10-2015)
* Feature: startup wizard added.
* Bugfix: fixed crashes on Marshmallow.
* Bugfix: lots of smaller bugfixes.

### Version 2.7.9 (08-02-2015)
* Provider: updated Amazon S3 with new endpoints.
* Bugfix: fixed issue with MEGA.
* Bugfix: fixed issue with FTP legacy download.
* Bugfix: other minor bugfixes.

### Version 2.7.8 (26-01-2015)
* Bugfix: fixed connection issue with MEGA.
* Bugfix: readded option for legacy FTP.

### Version 2.7.7 (24-01-2015)
* Provider: added support for MEGA.

### Version 2.7.6 (13-01-2015)
* Bugfix: fixes to Copy provider when checking if folder exists.

### Version 2.7.5 (11-01-2015)
* Feature: unreadable SD card folders are now ignored when syncing.
* Feature: added option to treat remote/local files as identical in case of conflict. Use at your own risk.
* Feature: added more detail to sync log - total files counter will be 0 for old log entries.
* Bugfix: several minor bugfixes.

### Version 2.7.4 (08-01-2015)
* Bugfix: fix to root copy method.
* Bugfix: fixed sync engine issue in regards to disconnection.

### Version 2.7.3 (06-01-2015)
* Bugfix: fixes to FTP connection and null errors.

### Version 2.7.2 (05-01-2015)
* Bugfix: fixed root folder not found when syncing.
* Bugfix: theme color usage updated.
* Bugfix: now remembers scroll position on FolderPair list.

### Version 2.7.1 (04-01-2015)
* Bugfix: external SD card access on Lollipop corrections. Please re-request permission in settings.
* Bugfix: null text in log.
* Bugfix: issue with Amazon S3.
* Bugfix: various other crashes.

### Version 2.7.0 (28-12-2014)
* Provider: added support for Amazon Cloud Drive.
* GUI: support for Android 5.0 Material style and multiple themes.
* GUI: use right drawer menu to access cloud and favorites in file manager (buttons in actionbar removed).
* Feature: support for external SD card on Android Lollipop (use external storage permission in settings).
* Feature: support for uploading large files to OneDrive.
* Feature: root write support (experimental).
* Feature: added wizard to help create folderpair sync.

### Version 2.6.4 (01-10-2014)
* Bugfix: fixed OneDrive sign-in error (sorry for delay).
* Bugfix: fixed Box upload errors.
* Bugfix: fixed Copy.com upload size error.

### Version 2.6.3 (21-04-2014) 
* Bugfix: fixed some crashes on Android 2.x. 

### Version 2.6.2 (21-04-2014) 
* Bugfix: fixed issue with Tasker and opening app from notification.

### Version 2.6.1 (06-04-2014)
* Bugfix: fixed issue with FolderSync locking up when choosing sync all.
* Bugfix: fixed issue with custom Amazon S3 endpoint.

### Version 2.6.0 (18-03-2014)
* Bugfix: fixed UbuntuOne account creation.
* Bugfix: fixed bug related to Wifi wakeup.
* Bugfix: changed upload limit for Copy.com to 5GB.
* Bugfix: fixed bug related to using remote/local file for conflict handling

### Version 2.5.9 (13-02-2014)
* Bugfix: fixed Bitcasa bugs.

### Version 2.5.8 (11-02-2014)
Provider: added support for Bitcasa.
Feature: added option to only sync changed files since last sync.
Feature: added option to reset FolderPair.
Feature: added option for Amazon S3 custom endpoint and reduced redundancy.
Feature: added WebDAV SNI support on Android 4.2 and newer.
Translation: added Czech and Traditional Chinese.
Bugfix: fixed various minor bugs.

### Version 2.5.6 (16-12-2013)
Bugfix: fixed error when trying to sync Dropbox root folder.
Bugfix: fixed connection issue with some WebDAV servers.

### Version 2.5.5 (10-12-2013)
GUI: update look of sync log.
Translation:add Korean.
Bugfix: fixed issue with trailing space in folder name for Samba.
Bugfix: filters now copied when copying folderpair.
Bugfix: lots of other bugfixes...

### Version 2.5.4 (20-10-2013)
Feature: added right drawer menu with file manager shortcuts to folders, accounts and favorites.
Bugfix: fixed issue with syncing changes in root files, which didn't always happen in case of conflict.

### Version 2.5.3 (17-10-2013)
Translation: added Simplified Chinese.
Bugfix: fixed encryption issue on some 4.x devices.
Bugfix: fixed various crashes.
Bugfix: removed need for SUPER_USER permission.
Bugfix: fixed yet other root issues.

### Version 2.5.2 (12-10-2013)
Feature: option to disable stack notifications.
Bugfix: fixed various crashes.
Bugfix: fixed issue with account/folderpair selection.
Bugfix: fixed obscure issue with root access.

### Version 2.5.1 (07-10-2013)
Bugfix: fixed legacy Google Docs support. Please re-authenticate accounts.
Bugfix: fixed issue with overlapping check box text.
Bugfix: fixed crash when saving sync filter in portrait mode.

### Version 2.5.0 (07-10-2013)
GUI: using drawer pattern for main navigation.
GUI: new layout for most activities.
Feature: added new sync engine. To try it out enable it in settings under beta features.
Feature: root access now has to be enabled in beta settings (read only). Enable if you need to sync root files.
Feature: using stack notification feature on device that supports it.
Feature: some SMB and WebDAV servers now searchable using Bonjour protocol.
Provider: added Copy.com.
Provider: added various WebDAV supported providers as selectable account types.
Bugfix: Fixed broken Google Drive. Please re-authenticate account.
Bugfix: totally removed AdMob references from full ### Version and many more...

### Version 2.4.8 (07-03-2013)
Bugfix: fixed issue with local changes not being synced (again).
Bugfix: fixed issue with detecting Wimax as 4G.

### Version 2.4.7 (12-02-2013)
Bugfix: fixed issue with local changes not being detected on some devices.
Bugfix: instant sync causes instability for some, when watching many folders for changes. New option on setting page must be enabled, if instant sync should watch subfolders.
Provider: added Dump Truck.

### Version 2.4.6 (30-01-2013)
Bugfix: fixed issue with SFTP corrupted transfers.
Bugfix: fixed more issues with Box.
Bugfix: fixed issue with syncing changes when md5 check enabled.
Bugfix: fixed "share to" support, so it works for folders.

### Version 2.4.5 (26-01-2013)
Bugfix: fixed Box bad request error.

### Version 2.4.4 (24-01-2013)
Bugfix: fixed adding shortcuts which was broken on some devices.

### Version 2.4.3 (24-01-2013)
Improvement: "quick sync" button in folderpair list.
Improvement: select file/account/log items by clicking on left icon.
Feature: shortcut options for favorites and windows.
Bugfix: pincode issues resolved (hopefully).
Bugfix: old SFTP library back, since new one didn't work for all.
Bugfix: fixed SSL/limit error on upload to Box.

### Version 2.4.2 (23-01-2013)
Bugfix: unset pincode setting because of upgrade issues. Please reconfigure it.

### Version 2.4.1 (22-01-2013)
Bugfix: issue with listing files on some FTP servers fixed.

### Version 2.4.0 (21-01-2013)
Improvement: using new Box V2 API. Please re-authenticate your Box accounts
Improvement: revamped help section.
Improvement: sync type icon on folderpair list.
Feature: new options for FolderPair: retry on fail, 2G.
Feature: new general settings: pin code timeout, sync log retention count, free space threshold.
Feature: experimental option to stream remote media files to player of your choice. VLC recommended for video.
Feature: FolderSync can now be used as a file picker for other apps.
Bugfix: reading some root folders fixed.
Bugfix: issue with large file upload to Dropbox fixed.
Bugfix: db backup/restore on 4.2 with multi-user enabled fixed.

### Version 2.3.1 (19-12-2012)
Support for zip archives in file manager.
Auto-purge of logs when more than 250.
Option to disable sync when roaming (default: disabled).
Notifications can now be configured for each folderpair (default: none).
Fixed issue with Box login.
No longer warning when leaving edit screens when no changes have been made.
Fixed issues with instant sync triggering.
Other minor bug fixes and optimizations.

### Version 2.3.0 (01-12-2012)
Fixed issues on some devices with new sync log view.

### Version 2.2.9 (01-12-2012)
Fixed issue with wifi SSID name on Jelly Bean 4.2.
WebDAV uploads to IIS fixed.
Files/folders excluded by filters no longer trigger instant sync.
Updated Dropbox to use OAuth1.0.
Splash screen and minor GUI optimizations.
Sync log screen redesigned.

### Version 2.2.8 (15-11-2012)
Now works on Jelly Bean 4.2. Please recreate account if you still have problems.
Fixed issue with upload on some WebDAV servers.

### Version 2.2.7 (04-11-2012)
Fixed issue with pausing in uploads when using WebDAV.
Fixed issue with empty folders.
Fixed SugarSync issue.

### Version 2.2.6 (25-10-2012)
Fixed share to function.

### Version 2.2.5 (24-10-2012)
Fixed shortcuts not working.
Fixed issue with HTTPS upload on Android 2.3.3 and older.
Fixed other minor issues.

### Version 2.2.4 (21-10-2012)
Experimental read-only support for protected file system - requires root.
Fixed issue with uploading empty files to Dropbox.
Fixed issue with single quotes in Google Drive file names.
Increased timeout for Google Drive file listings.

### Version 2.2.3 (07-10-2012)
Fixed issue with Google Drive timestamps.
Fixed FTP upload issues.
Enabled upload of large files to Dropbox.
Fixed issue with detecting battery state.

### Version 2.2.2 (02-10-2012)
Added fix to alleviate problems with reaching Google Drive quota limit.
Fixed so more than 100 files can be shown in Google Drive folder.
Added fast scroll to listviews.
Added Japanese translation.

### Version 2.2.1 (01-10-2012)
Fixes some issues with Google Drive.

### Version 2.2.0 (30-09-2012)
SendTo feature - FolderSync can now be used as a send to target.
New Google Drive API - please re-authenticate accounts and reselect folderpair folders.
New dashboard + select default startup screen in settings.
SkyDrive limitations removed in regards to file types and image re-sizing.
New icons and other minor improvements to file manager. Favorites will have to be recreated - sorry.
Many other bug fixes.

### Version 2.1.9 (10-07-2012)
Fixed some crashes.
Fixed issue with Tasker.

### Version 2.1.8 (30-06-2012)
Should now work with Jelly Bean 4.1.
Fixed minor issues with Google Drive sync.

### Version 2.1.7 (24-06-2012)
Fixed issue some people had with creating new folders in sync.

### Version 2.1.6 (23-06-2012)
Bugfix release. 
Fixed import of old databases (for some).
Fixed some issues with canceling sync.
Other minor stuff fixed.
Dutch language added.

### Version 2.1.5 (19-06-2012)
Fix crashes. Sorry for all the updates.

### Version 2.1.4 (19-06-2012)
Fixes Amazon S3 sync.

### Version 2.1.3 (19-06-2012)
Fixes syncfilters.

### Version 2.1.2 (18-06-2012)
Bugfix release.
Option to disable filesize check.
Fixed Dropbox authentication for HTC devices.
Various FC errors fixed.
Fixed problem with connection to some WebDAV servers.
Remote thumbnails for SkyDrive and Google Drive.
Notification on completion of sync.

### Version 2.1.1 (12-06-2012)
Bugfix release.
Should fix various crashes and issue with synclog window.

### Version 2.1.0 (11-06-2012)
Totally new design - optimized for tablets. Hope you like it.
Lite ### Version now allows two accounts.
Favorites and transfer queuing in file manager.
Possible to share and mediascan files in file manager.
New sync option - create timestamped backup folder on each sync.
New languages: Hungarian, Italian and Swedish.
And lots of other new stuff and bugfixes...

### Version 2.0.4 (15-03-2012)
Fixed issue with lite ### Version on ICS devices.
Fixed upload problem to Ubuntu One.
Fixed issue with setting modification time when uploading files using FTP legacy option.

### Version 2.0.3 (12-03-2012)
Fixed issue with force close on sync.
You now get asked if you want to ignore connection state on manual sync of folderpair.

### Version 2.0.2 (10-03-2012)
Fixed issues with multiple syncs if instant sync turned on.
Instant sync service now only runs if it is enabled for a folderpair.
Sync log displays file names again.
Clicking notification will take you to synclog window.

### Version 2.0.1 (04-03-2012)
Fixed 2-step authentication for Google Docs account.
Added option to disable auto-backup of database.
Manual sync on single folderpair will now ignore network and charging state (so beware).
If sync is not allowed when instant sync change is detected, sync will start later (if scheduled sync is not disabled in FolderSync settings).

### Version 2.0.0 (03-03-2012)
Google Docs support (experimental).
Support for instant sync on local changes in full ### Version (experimental - use with care).
Added new Amazon S3 regions.
Added automated daily backup of FolderSync DB.
Added option to copy folderpair/syncfilter and edit as new.
Disabled statusbar notifications for transfers as they cause some devices to crash.
Fixed some issues with FTP/SFTP - please use new legacy option if you experience problems.
Fixed issues with flickering and creating folderpairs on some Android 4.0 devices.
French translation added.

### Version 1.9.8 (30-01-2012)
Fixed issue with SkyDrive.
Added alternative implementations for FTPS/FTPES for compatibility reasons.

### Version 1.9.7 (15-01-2012)
Fixed issue with Amazon S3 account creation.
Added option to use alternative FTP implementation (FTPv2).
Made all SkyDrive folders selectable in folderpair.

### Version 1.9.6 (10-01-2012)
Fixed setting modified time for SFTP/FTP (if supported).
Added option to use local or remote file in case of conflicting changes to a file.

### Version 1.9.5 (09-01-2012)
Fixed custom ports for SFTP/FTP.

### Version 1.9.4 (08-01-2012)
Allowed selection of a SugarSync shared folder in a folderpair.
Fixed detection of 4G WiMaX connection type.
Fixed error on creation of WebDAV folder.
Fixed uploading files with special names to BOX.
Fixed issues with FTP syncing.
New SFTP library with speed improvement.
Fixed retrieving large folders for SkyDrive.

### Version 1.9.3 (04-01-2012)
UbuntuOne authentication for new accounts fixed.

### Version 1.9.2 (03-01-2012)
Fixed issue with SugarSync folders containing more than 500 items.
Fixed issue with refreshing Auth token for SkyDrive and added Auth workaround for 2.1 devices.
Fixed issue with FTP syncing.
If connection drops during a sync there is now a grace period for re-connection to occur.

### Version 1.9.1 (30-12-2011)
Fixed bug when syncing for FTP servers that doesn't return modification timestamp for files.
Fixed issue with editing sync filter.

### Version 1.9.0 (29-12-2011)
SkyDrive support. Refer to FAQ before using, because it has some API limitations.
Support for mirroring of folder deletions.
New/changed folderpair options for conflict handling in the case both a local and remote file has changed.
Allowed SSID's should now be separated by comma instead of space.
Sync will now abort if low free space on SD card.
Polish language added. German language updated

### Version 1.8.0 (12-12-2011)
Now using official Box.net API. Note: Users will have to re-authenticate Box.net accounts and reselect folderpair folders.
Fixed potential issues with slow wifi wakeup. Try disabling full wake-lock setting if you use that too see if sync works without it.
Support for anonymous mode for FTP/SMB and active mode for FTP.
Using new FTP library, FTPS unchanged (check your encoding setting - default is UTF-8).
Support for Amazon S3 Server Side Encryption.
Option to use MD5 checksum for local file comparison (use with care as it will use extra CPU).
Option to enter allowable WiFi SSID's for a folderpair.
Spanish language added.

### Version 1.7.4 (03-12-2011)
Added log collection feature for support purposes. 
Added monthly sync interval.
Fixed FC's on about screen and timeout issues with WebDAV.

### Version 1.7.3 (29-11-2011)
Fixed Dropbox authentication issue on some devices.

### Version 1.7.2 (28-11-2011)
Opening files bug fixed. 
Now also possible to create UbuntuOne account on tablets.
Incresed timeouts for WebDAV connections. 
Slovak/Czech language added. 

### Version 1.7.1 (21-11-2011)
Fixed issue with WakeLock and special characters in filenames (WebDAV). 
Added possibility to choose language. 
Russian language added.
Option to lock app with pin code on start/resume - experimental, so don't forget your code if you use this!

### Version 1.7.0 (17-11-2011)
Support for Ubuntu One (beta). 
Home screen shortcuts to folderpair syncs. 
Full wakelock option for devices that doesn't wake on scheduled syncs.
Fixed datetime showing to match device settings. 
Sorting options in file manager.
Language support added: German, Danish - more coming. 

### Version 1.6.6 (02-11-2011)
Fixed issue with Dropbox.

### Version 1.6.5 (02-11-2011)
Fixed selection of remote Dropbox folder in folderpair.

### Version 1.6.4 (02-11-2011)
Hotfix for Android 2.1/2.2 devices.

### Version 1.6.3 (01-11-2011)
Removed need for log data permission since that seemed unpopular. 
Hopefully fixed issues with connection type detection. 
Added new filter: file age. 
Added support for S3 Client Side Encryption (experimental).
Fixed issues with file manager on HoneyComb. 
Better performance in file manager. 
New WebDAV engine. 
Other small bugfixes.

### Version 1.6.2 (18-10-2011)
Fixed issues with synclog update, Dropbox authentication in lite ### Version and SMB syncing.

### Version 1.6.1  (released 17-10-2011)
Fixed issues with Tasker.
Fixed bug that occurred when syncing FTP/SFTP root folder.

### Version 1.6.0  (released 16-10-2011)
Added Tasker/Locale support (experimental). 
Added update notification on new version. 
Added Box.net support using WebDAV.
Now using new AmazonS3 API, and OAuth authentication for Dropbox. 
Fixed widget and status page updates and other minor issues.

### Version 1.5.1 (released 12-10-2011)
Seems like a couple of serious bugs made it's way into 1.5.0. This should hopefully fix them.  

### Version 1.5.0 (released 11-10-2011)
Added support for sync filters (beta). 
Fixed issue with SugarSync not working for some. 
Added Workspaces support to SugarSync so devices are viewable (note that some devicetypes can not be accessed using the public API).
Added option to rescan media library after sync. 
DateTime for files now being shown according to phone locale setting. Added support for NetDocuments.

### Version 1.4.8 (released 28-09-2011)
Fixed issue with sync failing on some FTP and WebDAV servers. 
Made it possible to disable usage of temp-file scheme when transfering files, and to disable file size validation (caused problems for some WebDAV providers). 

### Version 1.4.7 (released 26-09-2011)
Minor bugfix release.
Issues with syncing to some WebDAV servers fixed. 
Problem with usage of self-signed certificate fixed. 

### Version 1.4.6 (released 25-09-2011)
Minor bugfix release.
Fixed issue with local files not syncing in some cases when changed and it is now possible to select windows share as sync folder. 

### Version 1.4.5  (released 22-09-2011) 
Bugfix release.
Lots of bugs fixed - too many to list here. 
Hopefully fixed issue with resyncing files. 
Temp-file scheme now used for transfers. 
Added support for SFTP keyfile password. 
Added some options to filemanager (hide hidden files, select all). 
Icon in synclog now different if sync has transferred files.

### Version 1.4.0  (released 16-08-2011) 
Added support for SugarSync (experimental) and fixed support for SFTP/FTPS and WebDAVs. SugarSync currently supports Magic Briefcase and Web Archive folders only.
Possible to select root folder for sync.
Support for private key authentication with SFTP. 
Hopefully fixed some FC issues. :-)

### Version 1.3.6 (03-08-2011)
Added support for FTPS. Fixed an error with validating SMB account. 
Added first draft a one-click sync widget - same functionality as Sync now button in app.

### Version 1.3.5 (released 02-08-2011)
Added mirroring of deletes for two-way sync and option to delete files at source after one-way sync (experimental - use with care).
Added support for FTP/STFP/WebDAV (experimental/possibly slow). 
Added new sync status screen with info about current sync. 
More detailed sync log now also viewable. 
Fixed issue with some people not being able to select SD card folder. 
Added options to sync every 5, 15 and 30 minutes. 
Added option to only sync while charging.
Lots of other minor bugfixes.

### Version 1.3.2 (released 05-07-2011)
Fixed some minor connectivity related issues.

### Version 1.3.1 (released 05-07-2011)
Fixed problem with database upgrade.

### Version 1.3.0 (released 04-07-2011) 
Added option to sync to and from windows shares (Samba/CIFS).
New advanced schedule for more fine grained control of sync times.
New settings panel with options for disabling notifications etc.
Fixed bug that could sometimes result in FolderSync using 3G connection if WiFi was disconnected.

### Version 1.2.3 (released 22-06-2011)
Lots of small bugfixes and GUI optimizations.
Fixed an issue regarding wifi lock - could potentially help some users that have experienced failed syncs while device was sleeping.
Fixed issue with copying single files in file manager - now also possible to select multiple files/folders for bulk operations.

### Version 1.2.2 (released 20-06-2011)
Minor bugfixes and GUI related corrections.

### Version 1.2.0 (released 19-06-2011)
FileManager added - still somewhat experimental. 
New dashboard GUI. 
Now possible to delete missing target files in one way sync instead of deleting entire target folder.
Sync optimized and lots of small bugfixes.

### Version 1.1.2 (released 08-06-2011) 
Fixed forceclose bug on FolderPair screen when selecting local folder before account was selected.

### Version 1.1.1 (released 08-06-2011)
Minor update. Added support for syncing to and from Amazon S3 bucket subfolders - still experimental. 
Added SD card shortcuts in local folder browser for alternative SD card locations if present (Cyanogenmod and Samsung Galaxy etc.).

### Version 1.1.0 (released 04-06-2011)
Support for Amazon S3 syncing - this is experimental at this stage, so use with care. 
Two-way sync now available. 
Fully reworked sync engine - the previous one was a bit buggy. 
Backup/restore of database now possible.
Fixed an error related to folderpairs if attached account had been deleted.

### Version 1.0.3 (released 01-06-2011)
Added dashboard to be shown at startup. 
Made it possible to view sync history log to check for errors.
Improved sync engine. Fixed some error that made file from Dropbox not sync properly - thank you Jacob.

### Version 1.0.2 (released 28-05-2011)
Fixed a bug that caused sync to Dropbox not to work for some people. 
Fixed it so it no longer possible to save an unvalidated account. 
Nicer looking icons.

### Version 1.0.1 (released 26-05-2011)
This is the first version of FolderSync. Enables simple syncing of folders between an Android phone and Dropbox.