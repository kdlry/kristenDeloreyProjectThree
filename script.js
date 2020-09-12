// Set variable to capture all user inputs on radio buttons + checkboxes
// Name space object----------------------------
const botUserInput = {}; 


// Functions definiitons ----------------------------

// Create function to display images based on user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on all form inputs
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

// Create function that enables swag inputs once a swatch has been selected
botUserInput.enableSwag = function() {   
    
    // Bind event listener that looks for a change on swatch inputs
    $('.swatch input').on('change', function(){
    
        // When change is made on a swatch input, enable swag inputs
        $('.swag input').prop('disabled', false);
        
    });
}

// Create function that activates modal when swag inputs are selected before a swatch has been selected
botUserInput.activateAlert = function () {
    
    // Bind event listener that looks for a click on swag inputs
    $('.swag label').on('click', function () {

        // When a swag input is clicked on, activate (call) modal function
        if ($('.swag input').prop('disabled') === true) {
            // alert('oops!')
            
            swal({
                title: 'You need a bot to rock the swag!',
                button: 'Fine.',
            });
        }
    });
};


// Create function to download selected input 
// botUserInput.downloadImg = function () {

//     // Bind event listener that looks for a change on form inputs
//     $("a").on("click", function () {});
// }

// Initializing function
botUserInput.init = function() {
    botUserInput.showInput();
    botUserInput.enableSwag();
    botUserInput.activateAlert();
}

// Document ready
$(function() {
    botUserInput.init();
});