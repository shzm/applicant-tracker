(function () {
  "use strict";




  /*
   * window.App
   *
   * This is our global application namespace, and acts as the
   * container for our Router instance.
   */
  var App = window.App = {};




  /*
   * getTemplate
   *
   * A quick helper function to extract a template out of the DOM and
   * compile it into a template function.
   *
   */
  App.getTemplate = function (id) {
    return _.template($("#" + id + "-template").html());
  };




  /*
   * Kinvey.init
   * 
   * Initialize the Kinvey Backbone shim with the app key and secret
   */
   KINVEY_DEBUG = true;
   Kinvey.init({
    appKey: "kid_TTJG8OTzcJ",
    appSecret: "45488ab2f3304fee991ce0c1ab716804",
   })




  /*
   * UI stuff
   * 
   * this section is for several UI hacks and global listeners
   */

  // simple trick to hide the URL bar - scroll the page 1px once it loads
  $(function () {
    setTimeout(function () {
      window.scrollTo(0,1);
    }, 0);
  });

  // add layering styles when we scroll to any elements tagged with the data-scrolled attr
  var scrolled = false
    , checkScrolled;

  checkScrolled = function () {
    var position = $(document).scrollTop()
    if (position <= 1 && scrolled) {
      $(".scrolled").removeClass('scrolled');
      scrolled = false;
    }
    if (position > 1 && !scrolled) {
      $("[data-scrolled]").addClass('scrolled');
      scrolled = true;
    }
  }

  $(document).on('scroll', checkScrolled);
  $(document).on('touchmove', checkScrolled);




}());