// Set variable to capture all user inputs on radio buttons + checkboxes
// Name space object----------------------------
const botUserInput = {}; 


// Functions definiitons ----------------------------

// Create function to display images based on user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on form inputs
    $('input').on('change', function(){
    
        // Create variable that stores selected input with an id
        let val = this.id;

        // Create variable that stores a class value for selected input with an id
        let selectedInput = $(`.${val}`);

        // Look for sibling inputs and hide the associated images from display (radio buttons)
        selectedInput.siblings().removeClass('show');

        // Toggle class on inputs to view and hide images on demand (checkboxes)
        selectedInput.toggleClass('show');
    }); 
}

botUserInput.activateSwag = function() {   
    // Bind event listener that looks for a change on form inputs
    $('.swatch input').on('change', function(){
    
    $('.swag input').prop('disabled', false);
        
    });
}

botUserInput.activateError = function () {
    
    // Bind event listener that looks for a change on form inputs
    $('.swag label').on('click', function () {
    // console.log('swag clicked');

        // console.log($('.swag input').attr('disabled'))
        if ($('.swag input').prop('disabled') === true) {
            alert('oops!')
        }

    });
};

// botUserInput.popUp = function() {

// }

// Create function to download selected input 
// botUserInput.downloadImg = function () {

//     // Bind event listener that looks for a change on form inputs
//     $("a").on("click", function () {});
// }

// Initializing function
botUserInput.init = function() {
    botUserInput.showInput();
    botUserInput.activateSwag();
    botUserInput.activateError();
}

// Document ready
$(function() {
    botUserInput.init();
});