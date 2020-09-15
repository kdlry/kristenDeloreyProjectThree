// Name space object----------------------------
const botUserInput = {}; 


// Functions definiitons ----------------------------

// Create function to display images based on user input
botUserInput.showInput = function() {

    // Bind event listener that looks for a change on all form inputs
    $('input').on('change', function() {
    
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

// Create function to reset form input and clear images from display
botUserInput.resetInputs = function() {

    // Bind event listener that looks for a click on reset button
    $('button').on('click', function() {
        
        // Remove checked from inputs that were checked
        $('input').prop('checked', false);
        
        // Remove the class of show from all images in the .botImages div
        $('.iceBot').removeClass('show');
        $('.peachBot').removeClass('show');
        $('.violetBot').removeClass('show');
        $(".rosetBot").removeClass("show");
        $(".dayScene").removeClass("show");
        $(".nightScene").removeClass("show");
        $(".swagTopHat").removeClass("show");
        $(".swagShades").removeClass("show");
        $(".swagIceCream").removeClass("show");
        $(".swagChain").removeClass("show");
        $(".swagShoes").removeClass("show");

        $(".chk").prop("disabled", true);

        $("body").find("canvas").remove();
    })
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

// Create function that captures div of images selected on inputs
botUserInput.captureImg = function() {

    // Bind event listener that looks for a click on the camera icon
    $('.screenCap').on('click', function(e) {
        e.preventDefault();
        // botUserInput.modal();

        // Move the scroll on top of page (this is a necessary step to carry out html2canvas script)
        window.scrollTo(0, 0);

        // Convert the div to an image (canvas) and append to the bottom of the body
        html2canvas(document.getElementById("capture")).then(function (canvas) {
        
            // document.querySelector("footer").appendChild(canvas);
            document.getElementById("capturedImg").appendChild(canvas);

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

    // When the viewer's window is less than of equal to 630 in width, alert them to move to landscape for tablet/mobile
    if($(window).width() <= 650){
        
        // Display a sweet alert
        swal({
            title: 'Turn to landscape view for a less than stellar (but better than portrait) experience!',
            button: 'Okay.',
            onOpen: () => Swal.getConfirmButton().focus()
        });
    }
}

// Document ready
$(function() {
    botUserInput.init();
});