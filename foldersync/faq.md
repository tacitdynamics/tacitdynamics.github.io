---
layout: default
title: "FolderSync FAQ"
permalink: /foldersync/faq
---

# Google Play
## Do I need to buy Premium/Pro version again on a new device?
No, the premium upgrade or pro purchase is tied to your Google account. Just use the same account on Google Play on the new device, and your previous purchase will be recognized. Buying Premium -in-app purchase in FolderSync doesn't give access to FolderSync Pro but unlocks it to be identical.

## How do I get a refund?
We can offer refund up to 72 hours after purchase or if your premium upgrade is not recognized and you want to cancel it or buy the pro version instead. We can also offer refund if you want to transfer license to new Google account, but some old purchases may for various reasons not be refundable in the Google Play console so we cannot guarantee this.

Please see this link for further details: https://goo.gl/forms/e21sKHBkVXaqBnE92

## Why can I not get Pro version when I have purchased premium upgrade?
The premium upgrade in the free version of FolderSync unlocks it to be identical to FolderSync Pro, but it doesn't enable download of pro version as its a different app on Google Play and the Pro version can only be downloaded if bought directly. If you have issues getting your premium purchase recognoized and want to cancel buy pro version instead, please request a refund.

## Why can I download the free version, but not be able to buy the pro version?
There can be many reasons for this. Some countries like China are not supported by Goggle Play. Another reason can be that the device is not valid, because it doesn't follow Google guidelines. Note that FolderSync is not restricted from any devices or countries by our doing. There are several steps you can take to try to remedy the situation.

Try using market enabler or similar tools:
https://market.android.com/details?id=ch.racic.android.marketenabler&feature=search_result

For people with MIUI rom (and possible others with custom roms):
http://miuiandroid.com/forums/showthread.php?7779-Protected-apps-in-the-market-shown-as-not-compatible

## Problems with your purchase on Google Play?
Sadly any problems with Google Play is outside our control. You will have to ask Google for support.
If you can't download a purchased app, try again a little later or try restarting your device, then it usually works. A few users simply can't purchase apps, and they continually get "Internal market error". 
If you think you have accidentally purchased the app twice, then please check the billing statements. One of them will probably say cancelled and that no charge has been performed, so there is no need to contact support for a refund. 

## Will your apps be available on the Amazon Appstore for Android?
The paid app has been submitted to the Amazon app store, and can be found here:
http://www.amazon.com/s?_encoding=UTF8&field-brandtextbin=Tacit%20Dynamics&node=2350149011 .

## How do I migrate settings from free to pro version?
Create a database backup in the free version in the settings menu. Then fire up the pro version and restore database to import settings - this will overwrite existing settings so beware. That's its. This might not work on a few devices, but currently there is no solution for this.

# Account
## How do I fix getting stuck on web page when trying to authenticate account?
When using external browser or custom Chrome tab to authenticate Google Drive or other OAuth supported cloud providers some can get stuck on the web page that gets redirected to. The cause of this is the app is not opened as it should when the https://www.tacit.dk/oauth-return url is loaded. To remedy this please ensure you are using Chrome as your default browser and it is the latest version. Also try to clear defaults for Chrome if still not working.

# File Manager
## How can I access external SD card on Android 5.0 and newer?
To make use of external SD card write access on Lollipop and later editions of Androids you have to give FolderSync (version 2.7.1 and later) the necessary permissions. You do this in filemanager using the External Storage permission option in left drawer menu (the shield icon). You will then have to select the SD card and press select "Allow access" or whatever the text is. Its important you select the root of the external SD card you want FolderSync to access or it won't work correctly. If you have selected a subfolder it may not work as expected. 

Its also important to note, that if you change your SD card, you must regrant permissions for that SD card to FolderSync or the new SD card won't have write access. You must do this everytime you change SD card, no matter if a SD card has been previously granted permissions. If you decided FolderSync should no longer have write access to external SD card, you can revoke its permissions in settings.

# Technical
## Why are my transfer speeds slow?
Transfer speeds can be slow for many reasons and can vary from device to device. FTPS/SFTP speeds can potentially be increased by disabling compression, since this limits how much data can be sent by how fast the CPU can compress the data. The speed of the memory card can also influence transfer speeds of course.
Transfer speeds have been compared to other popular file managers and they are comparable on the devices we test on, but we are aware that users on some device experience lower speeds.

## Why can't FolderSync be moved to the SD card?
Unfortunately this feature will not be enabled, since it can cause scheduled syncs not to work and then a lot of users will probably complain. :-) However, if you have a rooted phone you can use this tool to move any app to SD:
https://market.android.com/details?id=com.leinardi.setinstalllocation 

Just as long as you know that doing so may cause scheduled syncs not to work correctly.

## How do I use Tasker to run a sync in FolderSync?
First of all the full version is required. The full version works as a Tasker plugin - when you configure a new task in Tasker you are presented with a number of Action categories, one of these being "Plugin". Select this and then select "FolderSync" plugin action. Then press edit and select the folderpair you wish to start syncing with this task is executed by Tasker. Then save the task as you normally would in Tasker. For a more general introduction to tasker go here:
http://tasker.dinglisch.net/faq.html

## I get a "Received message is too long: 1416128878" error with SFTP. Why? 
This seems to be a problem with the server. It responds with something the FolderSync doesn't understand. See detailed answer below:

When I try to use sftp or scp2, I get a message like this: 
Received message too long (or "Bad packet length") 1416586337 
and the connection fails. What's wrong? 

"In order for this to work, the SSH session must be "clean" — that is, it must have on it only information transmitted by the programs at either end. What often happens, though, is that there are statements in either the system or per-user shell startup files on the server (.bashrc,.profile,/etc/csh.cshrc,.login, etc.) which output text messages on login, intended to be read by humans (likefortune,echo "Hi there!", etc.). Such code should only produce output on interactive logins, when there is a tty attached to standard input. If it does not make this test, it will insert these text messages where they don't belong: in this case, polluting the protocol stream between scp2/sftp and sftp-server. The first four bytes of the text gets interpreted as a 32-bit packet length, which will usually be a wildly large number, provoking the error message above"

Taken from here: http://www.snailbook.com/faq/sftp-corruption.auto.html

So you need to modify the SFTP server in some way, so that it doesn't send back plain text.

# Sync
## Why does instant sync not work?
This feature works only for local files device. When enabled, local file changes will be detected in the device folder, and a immediate partial sync will be attempted if other folderpair conditions allow this, such as network settings. Some custom ROMs may not support this. Newer versions of Android may not support this feature on external SD cards, since it appears folder/file change events are not propogated to apps properly.

## Why do I get sync errors when my Amazon S3 bucket name has a period in it?
Unfortunately bucket names with periods (.) in them is no longer supported by the Amazon API. This is because it results in SSL certificate errors when the Amazon server is accessed by an url like https://some.bucket.name.s3.amazonaws.com. I recommend the period character is replaced by a dash or other legal domain name character.

## What is the conflict setting and how does it work?
When syncing a conflict can occur when both the local and the remote file has been modified since the last sync. You then have four options: to skip the file, to use the newest file or to use either the local or the remote file.
A conflict gets detected when both the local and remote modified time stamp for the file has changed since last sync - FolderSync could then of course just use the newest file, but then what if you had made some changes to the "older" file, that you wanted to save?
A conflict will not be detected in cases where the modified time stamp is within the threshold for modified time stamp bug fix setting

## Why do files sometimes get transferred even if they haven't changes?
There is some kind of bug on some Android versions, where timestamps of files change independently of Foldersync, even if they haven't changed. It could be caused by media scanning the SD card, remounting or rebooting or perhaps issues with timezones but we do not know for sure. We don't have the problem on our test devices, and currently only a small subset of users have this problem.
We are looking into handling this issue using md5 checksum to see if local files have changed before they are synced again. Look for it in a future release.
If the timestamp of a remote file change, for whatever reason, even if the file is unchanged, then FolderSync will not be able to detect it and the file may be retransferrred.

## Why is there no overall sync progress shown?
FolderSync's current sync engine progresses through the folder structure of the remote and local folders as they sync runs, and process each folder on its own. FolderSync doesn't know how many sub folders and files that may remain to be synced in folders not yet processed. It is perhaps possible to list all files/folders before syncing of changed files starts, but it may still take a long time to calculate this because it can depend on 1000's of web requests for large folder structures, and when no files are synced, this is essentially what happens anyway.

Think about it like this: if you run a sync where no files are transferred, the time that the sync needs to run, is the same time as is needed to calculate the number files to be synced (if there had been any). So it doesn't make sense to show progress for syncs's where no files are transferred (because when the calculation is ready, the sync has completed). 

A future version of FolderSync may include a updated sync engine, where this calculation is done, and all files are transferred at the end of the sync. Then it will be possible to show how many file transfers remain in sync.

## Why don't my scheduled sync run?
There can be many reasons for this. If you have the app installed on SD card, the scheduler will not be set on boot up of the device because of limitations in the Android OS. This is why FolderSync from version 1.7.0 on will have its install location set to "internalOnly". Otherwise it will mean scheduled syncs will not run until you have started FolderSync at least once.
Another reason can be that the connection type is not allowed for the folderpair that is scheduled to sync, or some other condition is not met.
You can also try enabling "Use full wakelock" in settings - some devices require this setting to be enabled or they will not wake correctly.

## When are modification timestamps for files updated?
Generally modified time stamp for a file is set on download and upload, not at any other time. However not all cloud providers or protocols support setting modified time stamp of uploaded files, so images that is uploaded may get a newer modified time stamp than on the device etc.. 
This table will illustrate which providers and protocols support setting the modification time stamp for an uploaded file:

|Provider/protocol |	Modification time stamp preserved
------------- | -------------
Amazon S3	|    No
Box	        |    No
Dropbox	    |    No
FTP	        |    Yes (if supported by server)
Google Docs	|    No
Google Drive |	Yes
NetDocuments |	No
SFTP	    |    Yes (if supported by server)
OneDrive	|    No
SMB/Cifs	|    Yes (if supported by server)
SugarSync	|    No
Ubuntu One	|    No
WebDAV	    |    No

## Why are my files not being synced correctly?
This answer will try to address a range of common reasons why your files may not sync as you thought they would:

If subfolders or some files are not syncing at all - make sure sync of subfolders is enabled. Also check if the files or folders not marked as hidden (in Google Docs this will happen if you choose to hide items from being shown in "home"). If so, enable sync of hidden files. Also make sure items are not excluded because of a sync filter.

Connections - make sure the allowed connection type is enabled at the time the sync should run or else the folderpair will not be synced at all.

FTP/FTPES - if you have problems with FTP syncing, please try the legacy option first before contacting support.

Special characters in file names - please use universal acceptable file characters in file and folder names. Some good recommendations can be found here: http://www.mtu.edu/umc/services/web/resources/cms/characters-to-avoid.html
Box doesn't accept file names or folders that start with a dot ".".

## FolderSync doesn't delete removed files in a two-way sync. Why?
FolderSync has a fairly simple sync engine, meaning that FolderSync doesn't store state for each individual file. Thus the only information it knows about a file is what it knows at the time of the sync. Thus, if you delete a previously synced file for a two-way sync folderpair on either the local or remote end, this file will be resynced, because FolderSync sees this a an unsynced file. This is intentional.

Note: From version 1.4.0 on FolderSync support deletions in two-way sync.

## FolderSync overwrite changes in my local/remote file and uses the oldest file?
This can only happen if the rule "overwrite always" is used, or if you are experiencing the Android OS bug mentioned in the next question. If "overwrite always" is not set, FolderSync will never overwrite the newest file - but the bug mentioned results in the newest file having an older timestamp. See below for more details.

## FolderSync sometimes sync files that haven't changed. Why?
FolderSync compares the lastmodified timestamps on the local and the remote file when the option to overwrite older files in a folderpair is set. If the targetfile is older, it is overwritten by the sourcefile. AmazonS3 and Dropbox don't have any support for setting the timestamps of uploaded files, so when a file is uploaded to one of these services, FolderSync attempts to set the timestamp on the local file, to ensure the timestamps are in sync.

Likewise when a file is downloaded, the timestamp of the localfile is set to that of the file in Dropbox or Amazon S3. This ensures, that on the next sync check FolderSync will see the files as identical.

However, on some Android devices there is a bug in the operating system that makes setting the timestamp of the local file fail. Thus, at the next sync check, typcially when using two-way sync, FolderSync sees that the cloud and local file have different timestamps, and thus syncs the file again. This will then happen every time.

From version 1.4.0 on the local and remote timestamp are stored in a database, and used for comparison at next sync. Along with an user configurable option to to ignore a timestamp difference, this should eliminate the resyncing problem.

For information regarding the Android OS bug see these references:
http://code.google.com/p/android/issues/detail?id=15480
http://code.google.com/p/android/issues/detail?id=1699

Even the official Dropbox app has the same problem:
http://forums.dropbox.com/topic.php?id=22437

