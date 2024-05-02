---
title: Vimeo embed with custom start time
date: 2017-08-25
tags: [ "Development", "Vimeo" ]
---

**Important:** This post is out-of-date as Vimeo now [supports this natively](https://vimeo.zendesk.com/hc/en-us/articles/360000121668).

This is an example using the Vimeo Player API (JS) demonstrating the ability to embed a video that starts at a specific point, but is also paused. By default the standard embed code would autoplay at the desired pause/start time.

_**tl;dr** [https://codepen.io/christopher/pen/YxMmjW](https://codepen.io/christopher/pen/YxMmjW)_

## HTML

We start with an outer `.embed` wrapper for responsiveness and inside that setup our custom Vimeo embed element. It’s important to note that a unique `id` is required by the Vimeo API.

```html
<div class="embed  embed-16by9">
    <div class="embed-vimeo" data-id="229802433" data-start-at="120" id="embed1"></div>
</div>
```

## SCSS

This is pretty much taken from the [Bootstrap embed utility](https://getbootstrap.com/docs/4.0/utilities/embed/) for simplicity.

```scss
.embed {
    margin: 0 0 40px;
    overflow: hidden;
    position: relative;

    // Handle the common 16/9 and 4/3 ratios
    &--16by9 { padding-top: percentage(9/16); }
    &--4by3  { padding-top: percentage(3/4); }

    iframe {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }
}
```

## JavaScript

I have commented each line of the JavaScript to make it nice and easy to follow, be sure to include the Vimeo player API (`<script src="https://player.vimeo.com/api/player.js"></script>`) on your page (ideally just before the `</body>` tag).

```js
<script>
    var videos = document.getElementsByClassName('embed-vimeo');             // get all of the '.embed-vimeo' items

    [].forEach.call(videos, function(element, index, array) {                // loop through each item
        var id            = element.getAttribute('id'),                      // unique id of the video element
            videoId       = element.getAttribute('data-id'),                 // id of the Vimeo video
            startAt       = element.getAttribute('data-start-at'),           // time to start at
            playerOptions = { id : videoId, width : 1280 },                  // options to be passed to the player
            player        = new Vimeo.Player(id, playerOptions);             // create a new instance of the player

        if (startAt != undefined) {                                          // do we have a "start-at" value?
            if (!isNaN(parseFloat(startAt)) && isFinite(startAt)) {          // is the "start-at" value numeric?
                player.on('loaded', function(data) {                         // okay, once the video has loaded...
                    player.setCurrentTime(startAt).then(function(seconds) {  // set the "start-at" time, and then...
                        player.pause();                                      // pause the video
                    });
                });
            }
        }
    });
</script>
```

## Demo

I have setup an example on CodePen to demonstrate embedding a Vimeo video that starts paused at 2 minutes (120 seconds); you can [view it here](https://codepen.io/christopher/pen/YxMmjW).
