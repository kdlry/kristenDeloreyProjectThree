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

        // When a swag input is clicked on, activate (call) alert
        if ($('.swag input').prop('disabled') === true) {
            
            // Alert conten
            swal({
                title: 'You need a bot to rock this sweet swag!',
                button: 'Okay.',
            });
        }
    });
};

// Create function that captures div of images that were selected on inputs
botUserInput.captureImg = function() {

    $('body').on('click', function() {

    html2canvas(document.querySelector("#capture")).then((canvas) => {
        document.body.appendChild(canvas);
    });

    })
}

// window.open(canvas);

// Initializing function
botUserInput.init = function() {
    botUserInput.showInput();
    botUserInput.enableSwag();
    botUserInput.activateAlert();
    botUserInput.captureImg();

    // When the viewers window is less than of equal to 750 in width, alert them to move to landscape for tablet/mobile
    if($(window).width() <= 750){
        // add a sweet alert
        swal({
            title: 'Please turn your device to landscape to enjoy!',
            button: 'Okay.',
        });
    }
}

// Document ready
$(function() {
    botUserInput.init();
});