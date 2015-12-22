var Scroll = (function ($) {

    var scroll = function (selector, options) {
        this.$container = $(selector);
        this.options = $.extend({}, scroll.defaults, this.$container.data(), options);
    };

    scroll.defaults = {};

    return scroll;
})(jQuery);
