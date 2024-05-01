---
title: How to update ZSH and maintain local changes
date: 2017-09-25
tags: [ "Development", "OS X" ]
---

tl;dr

> `cd "$ZSH" && git stash && upgrade_oh_my_zsh && git stash pop`

## **Step 1:** Navigate to the ZSH directory

```sh
cd ~/.oh-my-zsh
```

## **Step 2:** Stash your local/untracked changes

```sh
git stash
```

## **Step 3:** Run the automatic ZSH update

```sh
upgrade_oh_my_zsh
```

## **Step 4:** Recover your changes

```sh
git stash pop
```
