// Set variable to capture all user inputs on radio buttons + checkboxes
// Name space object----------------------------
const botUserInput = {}; 



// Functions definiitons ----------------------------

// Create function to display images based on user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on form inputs
    $('input').on('change', function(){

        // Create variable to hold selected input with an id
        let val = this.id;

        // Create variable to hold a class value
        let chosenStyle = $(`.${val}`);

        // Look for sibling inputs and hide them from display (radio buttons)
        chosenStyle.siblings().removeClass('show');

        // Toggle inputs to view and hide image on demand (checkboxes)
        chosenStyle.toggleClass('show');
    }); 
}

// Initializing function
botUserInput.init = function() {
    botUserInput.showInput();
}

// Document ready
$(function() {
    botUserInput.init();
});