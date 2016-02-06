$(document).ready(function() {
   
   //TEXT AREA CLICK
   $('#new-tweetarea').click(function() {
       if ($(this).focus()) {
            $(this).css('height', '5em');
            $('#tweet-controls').toggle(true);
            $('#tweet-submit').attr('disabled','disabled');
       }
       else {
            $(this).css('height', '2.5em');
            $('#tweet-controls').toggle(false);
       }
   });
   
   //TEXT AREA TYPING
   $('#new-tweetarea').keyup(function() {
      var charRemainder = 140 - $(this).val().length;
      $('#char-count').text(charRemainder);
      if (charRemainder <= 10) {
          $('#char-count').css('color', 'red');
      }
      else {
          $('#char-count').css('color', '#999'); 
      }
      
      if (charRemainder < 0 || charRemainder === 140) {
          $('#tweet-submit').attr('disabled', 'disabled')
      }
      else {
          $('#tweet-submit').removeAttr('disabled', 'disabled')
      }
   });
   
   //TWEET EVENT
   $('#tweet-submit').click(function() {
       var tweet = $('#new-tweetarea').val();
       var userName = "Casey Arnold";
       var tweetHTML = '<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">' + userName + '</strong>' +
							'<span class="username"> @caseyarnold</span>' +
                            '<p class="tweet-text">' + tweet + '</p>' +
							'<div class="tweet-actions">' +
								'<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
							+ '</div>'
					+ '</div>';
       
       $('#stream').prepend(tweetHTML);
       
       $('#new-tweetarea').val('');
       $('#new-tweetarea').css('height', '2.5em');
       $('#tweet-controls').toggle(false);
       $('#char-count').text(140);
   });
   
   
   
   
});