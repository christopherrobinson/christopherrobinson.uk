---
title: "Umbraco Forms: How to get the name of a form"
date: 2018-07-22
tags: [ "Development", "Umbraco" ]
---

The name of the form isn’t available by default, so you need to use `FormStorage()` to access it:

```csharp
FormStorage formStorage = new FormStorage();
Form        form        = formStorage.GetForm(Model.FormId);
string      formName    = form.Name;
```
