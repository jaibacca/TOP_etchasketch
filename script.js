// createScreen
// Renders the etch-a-sketch screen
// Input: An integer value for the X*X square screen
// Output: None 
function createScreen(dimension) {
    // TODO: if there are children elements within container, delete them all
    var parentContainer = document.getElementById("etchasketch");
    removeAllChildNodes(parentContainer);
    // TODO: calculate div size within 700px container
    //var square_side = Math.floor(700/dimension - 2) ;

    parentContainer.style.gridTemplateColumns = "repeat(" + dimension + ", 1fr)";

    // grid-template-columns: repeat(16, 1fr);
    // TODO: square dimension for total divs
    let i = 0;
    let j = 0;
    for(i; i < dimension*dimension; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixelDiv white';
        //pixel.setAttribute('style', 'width:' + square_side + 'px;' +  'height:' + square_side + 'px;');
        
        parentContainer.appendChild(pixel);
    }

    const pixels = document.querySelectorAll('.pixelDiv');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.classList.remove('white');
            pixel.classList.add('black');
        })
    })
    
        // TODO: make the styling in CSS Grid form, and 
        //       give it white color class, 
        //       give it a 'pixelDiv' class
}

// TODO: querySelectAll the pixelDivs class divs, and for each pixelDiv, add an changeColor event

    // TODO: add eventlistener for changing color class when hovered over 
    // TODO: lookup JavaScript hover event conditions


// clearScreen
// Selects all 
// Input: An integer value for the X*X square screen
// Output: None     
// TODO: query document select the Clear button, and add an eventlistener clearScreen  
function clearScreen() {
    // TODO: querySelectAll pixelDivs, and assign them the white color class
    const pixels = document.querySelectorAll('.pixelDiv');
    pixels.forEach((pixel) => {
        pixel.classList.remove('black');
        pixel.classList.add('white');
    })
}

var slider = document.getElementById("myRange");
var output = document.getElementById("square_x");
var userSquare = slider.value;
output.innerHTML = slider.value + 'x' + slider.value ; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + 'x' + this.value;
  userSquare = this.value;
  //createScreen(this.value);
} 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// TODO: query document select the Dimensions input field, and add an eventlistener
// TODO: make the event listener call createScreen with specific dimension

createScreen(16);