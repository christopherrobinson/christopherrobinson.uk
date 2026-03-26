---
title: Restoring administrator account on macOS from standard user
date: 2023-09-23
tags: [ "macOS" ]
---

Starting with **macOS Sonoma** (version 14), recovering from the loss of an administrator account has become significantly harder, as the previous method of relaunching the macOS setup process is no longer possible.

> Removing `/private/var/db/.AppleSetupDone` no longer relaunches Setup Assistant if a local user already exists on the Mac. *Erase All Contents and Settings* can reset the device and launch Setup Assistant.  
>
> **source:** <https://support.apple.com/en-us/109030>

However, if you had an administrator account that is now showing as a standard account, you may be able to restore its permissions using the process described below.

Please read **all steps** before proceeding so you have a full understanding of the process and its implications.

## Important Safety Notice

This procedure involves modifying the system’s `sudoers` file from Recovery Mode. An incorrect edit can prevent all administrative access or cause `sudo` to stop functioning entirely. Always ensure you have a **verified, restorable backup** before proceeding.

## Step-by-Step Recovery Process

1. Before starting, ensure you have a full backup of your system using **Time Machine** or a comparable backup solution.
2. Once the backup is complete, shut down your Mac.
3. Boot into **Recovery Mode**:
   - On Intel-based Macs, hold `⌘ Cmd` + `R` during startup.
   - On Apple silicon Macs, press and hold the power button until the boot options menu appears.
4. If **FileVault** is enabled, unlock and mount the system disk. In **Disk Utility**, right-click the disk and select **Mount**.
5. Open **Terminal** from the menu bar.
6. Using this Terminal window, edit the `sudoers` file on the system volume:
   ```bash
   vi /Volumes/<Volume Name>/etc/sudoers
   ```
   Replace `<Volume Name>` with your system disk name. For example:
   ```bash
   vi /Volumes/Macintosh\ HD/etc/sudoers
   ```
7. Scroll toward the bottom of the file until you see:
   ```bash
   root            ALL = (ALL) ALL
   ```
8. Directly below this line, add your username in the same format:
   ```bash
   root            ALL = (ALL) ALL
   christopher     ALL = (ALL) ALL
   ```
9. Save and exit using `:wq!`. The exclamation mark forces the write operation, overriding warnings, as the file is read-only by default.
10. Quit Terminal and restart the Mac using the menu bar.

## Promoting the User to Administrator in macOS

At this stage, the user you added has **sudo access**, even though macOS still reports it as a standard account.

Log in using that account, open **Terminal**, and run the following command (replacing `yourusername` with your actual username):

```bash
sudo dscl . -append /Groups/admin GroupMembership yourusername
```

After logging out and back in, the account will once again have full **administrator** privileges.

## Caveats

Later versions of macOS enforce stricter controls around setup state, user creation, and device ownership. This means:

- The traditional `.AppleSetupDone` workaround no longer functions once a local user exists.
- *Erase All Contents and Settings* is now the only supported way to re-trigger Setup Assistant.
- This method relies on Recovery Mode access and assumes the system volume is not externally managed via MDM restrictions.

If Recovery Mode is locked down or the Mac is enrolled in device management, this approach may not be possible.

---

## TL;DR

If your macOS administrator account has been downgraded to a standard user on Sonoma, Sequoia, or Tahoe:

- Boot into Recovery Mode
- Temporarily add the user to `sudoers`
- Log in and re-add the user to the `admin` group
- Log out and back in to restore full admin access

This avoids a full erase while preserving data but only if done carefully and with a backup.
