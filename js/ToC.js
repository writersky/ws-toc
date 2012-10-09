Heartstring.ToC = Heartstring.ToC || {};

/** 
 * component code 
 */
Heartstring.ToC = function (container, config) {
    var that = Heartstring.init(Heartstring.ToC, config);
    
    /** 
     * Create table of content and map section
     */
    that.generateMenu = function() {
        var sections = Heartstring.select(that.config.selectors.articles).find('section');
        $.each(sections, function(index, e) {
            var section = $(e);  //turn <section> to a jQuery object
            //use index to generate unique class name to map ToC
            var bookmarkName = that.config.selectors.bookmarkPrefix + '-' + index;
            var chapterName = section.find(':header').first().clone();
            var tocList = Heartstring.select(that.config.selectors.navbar).find('.nav');
            section.attr('id', bookmarkName);
            tocList.append(
                $('<li>').append(
                    $('<a>').attr('href','#' + bookmarkName).append(chapterName)
            ));
        });
    };
    
    /**
     * Setup Bootstrap scrollspy attributes
     * Add the following to body tag: data-spy="scroll" data-target=".ws-toc"
     * Refer to bootstrap manual: http://twitter.github.com/bootstrap/javascript.html#scrollspy
     */
    that.setupScrollspy = function () {
        $('body').attr('data-spy', 'scroll');
        $('body').attr('data-target', '.' + that.config.selectors.navbar);
    };
     
    return that;
}

/**
 * Content init
 */
Heartstring.ToC.init = function(container, config) {    
    // create this component
    var that = Heartstring.ToC(container, config);
    // Add scrollspy attributes to <body>
    that.setupScrollspy();
    that.generateMenu();
};

Heartstring.ToC.bind = function(that) {
    that.bindRow(that);
}

//default settings for this component
Heartstring.ToC.defaults = {
    container: ".hs-fontbar",
    config: {
        selectors: {
            navbar: "ws-toc",  //the menu bar
            articles: "ws-story",
            bookmarkPrefix: "ws-toc"  //note, must be followed by a dash at the end.
        }
    }
};
