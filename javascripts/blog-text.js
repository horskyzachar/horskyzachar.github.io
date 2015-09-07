var adjustBlogTitle = (function() {
  var width = $('.blog-title').width()/2;
  $('.blog-title').css('margin-left', -(width+107));
});

$(document).ready(function(){
  adjustBlogTitle();
});
