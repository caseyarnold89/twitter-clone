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
                            +'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>'+
								'</div>'+
								'<div class="users-interact">'+
									'<div>'+

										'<img src="img/alagoon.jpg" />'+
										'<img src="img/vklimenko.jpg" />'+
									'</div>'+
								'</div>'+

								'<div class="time">'+
									'1:04 PM - 19 Sep 13'+
								'</div>'+
							'</div>'+
							'<div class="reply">'+
								'<img class="avatar" src="img/alagoon.jpg" />'+
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
							'</div>'
					+ '</div>';
       
       $('#stream').prepend(tweetHTML);
       
       $('#new-tweetarea').val(''); //.val works for textarea and inputs
       $('#new-tweetarea').css('height', '2.5em');
       $('#tweet-controls').toggle(false);
       $('#char-count').text(140);
   });
     
   $('.tweet').click(function(){
       $(this).find('.stats, .reply').slideToggle(150);
   });
  
   
   
});