console.log('js sourced');

var buttonCounter = 0;

$(document).ready(function() {
  addClickHandlers();
});

function addClickHandlers() {
  $('body').on('click', '#generate', function() {
    buttonCounter += 1;
    $('body').append('<div class="red"></div>');
    $('div').html('<button type="button" id="swap">Swap</button>' +
                            '<button type="button" id="delete">Delete</button>');
    $('div').last().append('<p>' + buttonCounter + '</p>');
    // can't figure out why this is clearing the previous p elements....
    console.log(buttonCounter);
    });
  $('body').on('click', '#swap', function() {
    $(this).parent().toggleClass('red');
  });
  $('body').on('click', '#delete', function() {
    $(this).parent().remove();
    console.log(buttonCounter);
  });
}






//
// // Buttons for later
// $('.container').append('<button type="button" id="swap">Swap</button>' +
//                         '<button type="button" id="delete">Delete</button>');
