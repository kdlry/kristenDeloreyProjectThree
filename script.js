// Name space object----------------------------
const botUserInput = {}; 

// Function definiitons ----------------------------
// Create function to display images triggered by user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on all form inputs
    $('input').on('change', function() {
    
        // Create variable that stores selected input with an id (form inputs)
        let val = $(this).attr('id');

        // Create a second variable that stores selected input with equivalent class name (swatch/scene/swag images)
        let selectedInput = $(`.${val}`);

        // For images with direct siblings, hide siblings from display and only show selected image (radio buttons - bot swatch + bot scene)
        selectedInput.siblings().removeClass('show');

        // For images without siblings, toggle view/hide for selected image (checkboxes - bot swag)
        selectedInput.toggleClass('show');
    }); 
}

// Create function to reset form inputs and clear images from display
botUserInput.resetInputs = function() {

    // Bind event listener that looks for a click on reset button
    $('button').on('click', function() {
        
        // Remove all form inputs that were checked
        $('input').prop('checked', false);
        
        // Remove all images with a class of show
        $('.iceBot').removeClass('show');
        $('.peachBot').removeClass('show');
        $('.violetBot').removeClass('show');
        $('.rosetBot').removeClass('show');
        $('.dayScene').removeClass('show');
        $('.nightScene').removeClass('show');
        $('.swagTopHat').removeClass('show');
        $('.swagShades').removeClass('show');
        $('.swagIceCream').removeClass('show');
        $('.swagChain').removeClass('show');
        $('.swagShoes').removeClass('show');

        // Restore disabled property on checkbox inputs
        $('.chk').prop('disabled', true);

        //Remove canvas from display section 
        $('body').find('canvas').remove();
    })
}

// Create function that enables swag inputs once any swatch input has been selected
botUserInput.enableSwag = function() {   
    
    // Bind event listener that looks for a change on swatch inputs
    $('.swatch input').on('change', function(){
    
        // When a change is made, enable swag inputs
        $('.swag input').prop('disabled', false);
        
    });
}

// Create function that activates alert modal when swag inputs are selected before a swatch has been selected
botUserInput.activateAlert = function () {
    
    // Bind event listener that looks for a click on disabled swag inputs
    $('.swag label').on('click', function () {

        // When a disabled swag input is selected, activate the modal
        if ($('.swag input').prop('disabled') === true) {
            
            // Alert content
            swal({
                title: 'You need a bot to rock this sweet swag!',
                button: 'Got it.',
            });
        }
    });
};

// Credit for code below: http://html2canvas.hertzen.com/
// http://adnan-tech.com/save-div-as-image-html2canvas/

// Create function that captures div of images selected from form inputs
botUserInput.captureImg = function() {

    // Bind event listener that looks for a click on the camera icon
    $('.screenCap').on('click', function(e) {
        e.preventDefault();

        // Move scroll position to the top of the page (note: this is a required step to carry out html2canvas script below)
        window.scrollTo(0, 0);

        // Convert selected images in div to a canvas (captured image)
        html2canvas(document.getElementById('capture')).then(function (canvas) {
        
            // Append canvas to the display section
            document.getElementById('capturedImg').appendChild(canvas);

            // Move scroll position down to displayed canvas
            let element = (canvas);
            element.scrollIntoView();
        });
    })
}

// Initializing functions
botUserInput.init = function() {
    botUserInput.showInput();
    botUserInput.resetInputs();
    botUserInput.enableSwag();
    botUserInput.activateAlert();
    botUserInput.captureImg();

    // When the viewer's window is less than of equal to 650 in width, alert them to move to landscape view
    if($(window).width() <= 650){
        
        // Display sweet alert with custom content
        swal({
            title: 'Turn to landscape view for a less than stellar (but optimal!) experience',
            button: 'Okay.',
        });
    }
}

// Document ready
$(function() {
    botUserInput.init();
});