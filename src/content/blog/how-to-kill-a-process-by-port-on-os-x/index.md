---
title: How to kill a process by port on OS X
date: 2014-07-22
tags: [ "Development", "OS X" ]
---

While doing local development (e.g. with Node) you will often come up against `EADDRINUSE, Address already in use` because you try running your application again after it has crashed or errored.

To resolve this you need to free up the port that is in use, this can be achieved on OS X with the following terminal command:

```sh
lsof -P | grep ':8000' | awk '{print $2}' | xargs kill -9
```

Simply replace `8000` with whatever port you need to kill.
