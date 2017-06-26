console.log('js sourced');

var buttonCounter = 0;

$(document).ready(function() {
  addClickHandlers();
  appendDOM();





});

function addClickHandlers() {
  $('body').on('click', '#generate', function() {
    buttonCounter += 1;
    $('body').append('<div class="container"></div>');
    $('div:first-of-type').html('<p></p>');
    $('div p').text(buttonCounter);

    console.log(buttonCounter);
    });
}

function appendDOM() {

}






// Buttons for later
$('.container').append('<button type="button" id="swap">Swap</button>' +
                        '<button type="button" id="delete">Delete</button>');
