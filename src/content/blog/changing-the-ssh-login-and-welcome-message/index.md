---
title: Changing the SSH login and welcome message
date: 2007-01-21
tags: [ "Development", "SSH" ]
---

If you’d like to change the message displayed before logging in to the server

```sh
sudo nano /etc/ssh/sshd_config
```

And add (or uncomment) the line

```sh
Banner /etc/banner
```

**Note:** `/etc/banner` can be whatever file you want.

Now edit the file you referenced, for example

```sh
sudo nano /etc/banner
```

And enter your welcome message.

You may need to restart **sshd** before your changes take effect

```sh
sudo /etc/init.d/ssh restart
```

If you want to change the message displayed after logging in edit `/etc/motd`.

```sh
sudo nano /etc/motd
```

Now you can put whatever you want to display, e.g.

```sh
              _
__      _____| | ___ ___  _ __ ___   ___
\ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
 \ V  V /  __/ | (_| (_) | | | | | |  __/
  \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
```
