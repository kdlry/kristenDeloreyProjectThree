// Name space object----------------------------
const botUserInput = {}; 

// Functions definiitons ----------------------------
// Create function to display images triggered by user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on all form inputs
    $('input').on('change', function() {
    
        // Create variable that stores selected form input with an id
        // let val = this.id;
        let val = $(this).attr('id');

        // Create a second variable that gets linked image class for selected form input id
        let selectedInput = $(`.${val}`);

        // For selected images with direct siblings, remove siblings from display and only show target image (radio buttons - botColour + botScene)
        selectedInput.siblings().removeClass('show');

        // For selected images without siblings, toggle view/hide target images on demand (checkboxes - botSwag)
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

        // Restore disabled property on checkboxes
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

// Create function that activates modal when swag inputs are selected before a swatch has been selected
botUserInput.activateAlert = function () {
    
    // Bind event listener that looks for a click on disabled swag inputs
    $('.swag label').on('click', function () {

        // When a swag input is clicked on, activate the modal
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

        // Move scroll to the top of the page (this is a required step to carry out html2canvas script below)
        window.scrollTo(0, 0);

        // Convert selected images in div to a canvas (captured image)
        html2canvas(document.getElementById('capture')).then(function (canvas) {
        
            // Append canvas to the display section
            document.getElementById('capturedImg').appendChild(canvas);

            // Move scroll to displayed canvas
            let element = (canvas);
            element.scrollIntoView();
        });
    })
}

// Initializing function
botUserInput.init = function() {
    botUserInput.showInput();
    botUserInput.resetInputs();
    botUserInput.enableSwag();
    botUserInput.activateAlert();
    botUserInput.captureImg();

    // When the viewer's window is less than of equal to 630 in width, alert them to move to landscape view
    if($(window).width() <= 650){
        
        // Display sweet alert with custom content
        swal({
            title: 'Turn to landscape view for a less than stellar (but better than portrait!) experience',
            button: 'Okay.',
        });
    }
}

// Document ready
$(function() {
    botUserInput.init();
});