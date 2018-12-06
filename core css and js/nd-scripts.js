/* Library Guides JS -- contact rharriso@nd.edu */
$(document).ready(function() {

   // makes the login link at the bottom of most pages into a button -- bootstrap primary blue
   $("#s-lib-footer-login-link a").addClass("btn btn-primary");

   // left align the libguides on home page
   // $("div#col-1.col-md-8.center").removeClass("center");

   // makes all links in rich text html boxes open in new windows by default */
   $(".s-lib-box-content a:not([target])").attr("target", "_blank");

   // Sets an alt attribute of "" (null) on any image which doesn't already have an alt attribute */
   $("img:not([alt])").attr("alt", "");

   // Adds the Handbook button to the mini command bar
   var handbookButton = $('<button style="margin-right: 1rem" class="btn btn-default btn-sm handbook" title="Open the Guides Handbook" id="open-handbook"><i class="fa fa-check-square-o fa-lg fa-fw"></i> Handbook</button>');
   $(handbookButton).prependTo($('#s-lg-guide-mini-cmd-bar'));
   $('#open-handbook').click(function() {
      window.open('https://ndlib.github.io/libguides-handbook/', '_blank');
   });

   // Settings for the accordion component
   $(function() {
      $(".accordion").accordion({
         collapsible: true,
         heightStyle: "content",
         autoHeight: false,
         active: false
      });

   });

   // include for the Libh3lp chat client
   (function() {
      var x = document.createElement("script");
      x.type = "text/javascript";
      x.async = true;
      x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "libraryh3lp.com/js/libraryh3lp.js?8552";
      var y = document.getElementsByTagName("script")[0];
      y.parentNode.insertBefore(x, y);
   })();

   // Animated scroll to top on the page
   // Find all anchor tags (<a>) in which the href attribute has 's-lg-box' in the link
   $("a[href*='s-lg-box']").click(function(event) {
      // Prevent the default link behavior
      event.preventDefault();
      // Animate the page to scroll to the link clicked to over .4 seconds
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top
      }, 400);
   });


});
// Document ready
