---
title: Easy way to reset the Umbraco admin password
date: 2019-06-20
tags: [ "Development", "Umbraco" ]
---

If you have access to both the website files and the database, this is an official - but poorly documented - way to reset the admin/master password on an Umbraco site.

To start, clear the version number inside of the **web.config**, e.g.

```csharp
<add key="Umbraco.Core.ConfigurationStatus" value="" />
```

Next open up the database and, if you’re using **Umbraco Version 8**, change the password for user `-1` to `default`.

**Important:** If you’re using **Umbraco Version 7** the user you’ll need to update is `0`.

Now start the site and it will launch the installer where you can enter a new password (and importantly it won’t “install/upgrade” anything as it’s already up-to-date).

Credit goes to Shannon for [posting this little gem on Twitter](https://twitter.com/Shazwazza/status/1141594930550206464)!
