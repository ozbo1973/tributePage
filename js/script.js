$(document).ready(function() {
  $('#last-text').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.last-text').toggle();
    console.log('test');
  });

  $('.last-text').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $(this).toggle();
  });
});
