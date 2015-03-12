(function($) {

  $.fn.randomEnough = function(options) {

    var settings = $.extend({
            number: 5,
      includeClass: "",
      excludeClass: ""
    }, options);

    var $this = $(this);

    return this.each( function() {

      var randomItem,
          randomItemArray = [];

      $this.addClass(settings.excludeClass);

      totalItems = $this.length;

      for (var i = 0, visible = settings.number; i < visible; i++) {

        function addItem() {

          randomItem = Math.floor(Math.random() * totalItems);

          if (!randomItemArray[randomItem]) {

              $($this[randomItem]).removeClass(settings.excludeClass).addClass(settings.includeClass);

            randomItemArray[randomItem] = true;

          } else {
            addItem();
          }
        }
        addItem();
      }
    });
  };
}(jQuery));
