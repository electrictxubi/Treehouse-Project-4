$("#search").keyup(function(){

    var filter = $(this).val();

   $(".lightbox_trigger").each(function(){

     if ($(this).attr('title').search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

     } else {

     $(this).show();

     }
    });
 });
$('.lightbox_trigger').click(function(e) {
   
    e.preventDefault();
    
  
    var image_href = $(this).attr("href");
    var ext = image_href.split('.').pop();
    if(ext != "jpg") {
      image_code = '<li><div class="video-container"><iframe class="ready" src="'+image_href+'" frameborder="0" width="420" height="315"></iframe></div></li>';
    }
    else {
      image_code = '<li><img class="ready" src="' + image_href +'" /></li>';
    }
    var caption = $(this).attr("title");
    

    
    if ($('#lightbox').length > 0) { 
      
      $('.content').html('<ul class="content">' + 
            image_code +
            '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
            '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>' 
          );
      $('.caption').html(caption);
      $('#lightbox').show();
    }    

   else{
      var lightbox = 
      '<div id="lightbox">' +
        '<p><i class="fa fa-times fa-2x" aria-hidden="true"></i></p>' +
        '<div id="content">' +
          '<ul class="content">' + 
            '<li><p class="caption">' + caption + '</p></i>' +
          
            image_code +
            '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
            '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>' +
          '</ul>' +
          '<div style="clear: both;"></div>' +
        '</div>' +  
      '</div>';

      $('body').append(lightbox);
   } 
    
  });
  
  var previousT = function(){
    var a = $('.ready').attr('src');
    var b = $('.photo-gallery a').first().attr('href');
    if(a == b){
    var thePhoto = $('.photo-gallery a').last();
    var image_href = $(thePhoto).attr("href");
    var ext = image_href.split('.').pop();
    if(ext != "jpg") {
    image_code = '<li><div class="video-container">' +
       '<iframe class="ready" src="'+image_href+'" frameborder="0" width="420" height="315"></iframe>' +
        '</div></li>';
    }
    else {
      image_code = '<li><img class="ready" src="' + image_href +'" /></li>';
    }
    var caption = $(thePhoto).attr("title"); 
    $('.content').html('<ul class="content">' + 
       '<li><p class="caption">' + caption + '</p></i>' +
        
          image_code +
          '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
          '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>'
          );
    $('.caption').html(caption);
  } else {
      var currentPic = $('.ready').attr('src');
      var pictureElement = $('.photo-gallery a[href="'+currentPic+'"]');
      var previousElement = $(pictureElement).prev();
      var image_href = $(previousElement).attr("href");
      var ext = image_href.split('.').pop();
     if(ext != "jpg") {
      image_code = '<li><div class="video-container">' +
         '<iframe class="ready" src="'+image_href+'" frameborder="0" width="420" height="315"></iframe>' +
          '</div></li>';
      }
      else {
        image_code = '<li><img class="ready" src="' + image_href +'" /></li>';
      }
      var caption = $(previousElement).attr("title"); 
      $('.content').html('<ul class="content">' +  
            '<li><p class="caption">' + caption + '</p></i>' +
          
            image_code +
            '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
            '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>'
            );
      $('.caption').html(caption);
    }
  }; 
  var nextT = function(){
      var a = $('.ready').attr('src');
      var b = $('.photo-gallery a').last().attr('href');
     console.log(a);
     console.log(b);
     if(a == b){
      var thePhoto = $('.photo-gallery a').first();
      var image_href = $(thePhoto).attr("href");
      var ext = image_href.split('.').pop();
      if(ext != "jpg") {
      image_code = '<li><div class="video-container">' +
         '<iframe class="ready" src="'+image_href+'" frameborder="0" width="420" height="315"></iframe>' +
          '</div></li>';
      }
      else {
        image_code = '<li><img class="ready" src="' + image_href +'" /></li>';
      }
      var caption = $(thePhoto).attr("title"); 
      $('.content').html('<ul class="content">' + 
         '<li><p class="caption">' + caption + '</p></i>' +
          
            image_code +
            '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
            '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>'
            );
      $('.caption').html(caption);
  } else {
      var currentPic = $('.ready').attr('src');
      var pictureElement = $('.photo-gallery a[href="'+currentPic+'"]');
      var previousElement = $(pictureElement).next();
      var image_href = $(previousElement).attr("href");
      var ext = image_href.split('.').pop();
     if(ext != "jpg") {
      image_code = '<li><div class="video-container">' +
         '<iframe class="ready" src="'+image_href+'" frameborder="0" width="420" height="315"></iframe>' +
          '</div></li>';
      }
      else {
        image_code = '<li><img class="ready" src="' + image_href +'" /></li>';
      }
      var caption = $(previousElement).attr("title"); 
      $('.content').html('<ul class="content">' +  
            '<li><p class="caption">' + caption + '</p></i>' +
          
            image_code +
            '<li><i class="fa fa-angle-double-left fa-4x" id="prevLink" aria-hidden="true"></i></li>' +
            '<li><i class="fa fa-angle-double-right fa-4x" id="nextLink" aria-hidden="true"></i></li>'
            );
      $('.caption').html(caption);
    }
  };
  $('body').on('click','#prevLink', previousT);
  $('body').on('click','#nextLink', nextT);
  $("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    previousT();
  }
  else if(e.keyCode == 39) { // right
    nextT();
  }
});      
  $('body').on('click', '.fa-times', function() {

    $('#lightbox').hide();

  });