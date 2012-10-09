# ws-toc #

Writersky Table of Contents for stories


# Usage #
You will need to initialize the component by calling `Heartstring.ToC.init("container", config);`.  If you don't have any custom configurations, the component will use the default. An example is listed below:

``
$(document).ready(function() {
    var tocConfig = {
        selectors: {
            navbar: "ws-toc",  //the menu bar
            articles: "ws-story",
            bookmarkPrefix: "ws-toc"  //note, must be followed by a dash at the end.
        }
    }
    Heartstring.ToC.init("", tocConfig);
});
``

# Markup #
* Name your navigation menu:
```
<div class="span3 ws-toc">
    <!-- automatically generates list based on content -->
    <ul class="nav nav-list affix">
    </ul>
</div>
```

* Name your articles the following:
```
<articles="ws-story">
<!-- automatically reads all section and adds to the menu you declared above. -->
...
</articles>
```

# Config #
## Selectors ##
### navbar ###
*navbar* is the selector to the navigation menu.  This is the container where the component finds the `<ul>` tag, and use that to map the table of content links.

### articles ###
*articles* is the container that contains all the sections for the chapters.  Usually this is the `<article>` tag.

### bookmarkPrefix ###
This prefix is used by the component to generate the bookmark links between the navigation bar and the articles ID.  Normally, you don't have to change this.