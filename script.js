// Get all image slider element

// The image caption text to
const imageCaption = document.querySelector('.caption-text');
// The image slide
const image = document.querySelector('.image-slide');
// The indicator
const indicator = document.querySelector('.slide-indicator');

// Contains the image src array
const imagePath = [];

// Loop through the images in the src files
for (i = 0; i < 10; i++) {
    imagePath.push(`img/${i}.jpg`)
}

// Create indicators for each slide
var dot;
for (i = 0; i < imagePath.length; i++) {
    dot = document.createElement('div');
    dot.className = 'dot';
    dot.setAttribute('onclick', 'toggleImage(event)');
    dot.id = i;
    indicator.appendChild(dot)
}

// Image caption text
const imageText = ['Electronics', 'Technology', 'Quatum computing', 'Electronics', 'Artificial Intelligence', 'Network', 'Cyber security', 'Electronics', 'Computing', 'Computation'];

// Display an index image, caption, and indicator as default
var index = 0;
image.src = imagePath[index];
imageCaption.innerHTML = imageText[index];
// Get the indicator dots
const dots = document.querySelectorAll('.dot');
dots[index].className += " dot-active"

// This function slides the current image to the previous image when necessary . The function reduces the index
const prevSlide = () => {
    if (index === 0) {
        //  Do nothing if the slide get the last image
        null
    } else {
        // loop through the dot to update current slide
        for (i = 0; i < imagePath.length; i++) {
            dots[i].className = "dot";
        }

        index--;
        image.src = imagePath[index];
        imageCaption.innerHTML = imageText[index];
        dots[index].className += " dot-active"
    }
}


// This function slides to the next image
const nextSlide = () => {

    if (index >= imagePath.length - 1) {
        //  Do nothing if the slide get the last image
        null
    } else {
        // loop through the dot to update current slide
        for (i = 0; i < imagePath.length; i++) {
            dots[i].className = "dot";
        }

        index++;
        image.src = imagePath[index];
        imageCaption.innerHTML = imageText[index];
        dots[index].className += " dot-active";
        image.classList.toggle("fade");
    }
}

// Toggle image when indicator clicked
const toggleImage = (event) => {
    for (i = 0; i < imagePath.length; i++) {
        dots[i].className = "dot";
    }
    event.target.className += " dot-active";
    image.src = imagePath[event.target.id];
    imageCaption.innerHTML = imageText[event.target.id];
}
