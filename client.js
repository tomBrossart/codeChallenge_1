console.log('js sourced');

$(document).ready(function() {
  $('#generate').on('click', function() {
    $('body').append('<div class="container"></div>');
  });

});


// Buttons for later
$('.container').append('<button type="button" id="swap">Swap</button>' +
                        '<button type="button" id="delete">Delete</button>');
