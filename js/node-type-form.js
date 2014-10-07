/**
 * @file
 * Javascript for the node content type editing form.
 */

(function ($) {

  "use strict";

  Drupal.behaviors.webformContentTypes = {
    attach: function (context) {
      var $context = $(context);
      // Provide the vertical tab summaries.
      $context.find('#edit-webform').drupalSetSummary(function(context) {
        var vals = [];
        $('input[type=checkbox]', context).each(function() {
          if (this.checked && this.attributes['data-enabled-description']) {
            vals.push(this.attributes['data-enabled-description'].value);
          }
          else if (!this.checked && this.attributes['data-disabled-description']) {
            vals.push(this.attributes['data-disabled-description'].value);
          }
        });
        return vals.join(', ');
      });
    }
  };

})(jQuery);
