// eslint-disable-next-line no-unused-vars
(function ($, Drupal) {
  $(document).ready(function() {
    const agentAdd = document.documentElement;
    agentAdd.setAttribute("data-useragent", navigator.userAgent);
    agentAdd.setAttribute("data-platform", navigator.platform);
    // apple's hack
    document.addEventListener("touchstart", function() {}, false);
  }); // document ready
// eslint-disable-next-line no-undef
})(jQuery, Drupal);
