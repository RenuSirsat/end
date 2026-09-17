// Get Yes button

let yesBtn = document.getElementById("yesBtn");


// Get No button

let noBtn = document.getElementById("noBtn");


// Get question container

let questionContainer =
    document.querySelector(".question-container");


// Get result container

let result =
    document.getElementById("result");


// When Yes button is clicked

yesBtn.addEventListener("click", function() {

    // Hide question

    questionContainer.style.display = "none";


    // Show result

    result.style.display = "block";

});


// When mouse moves over No button

noBtn.addEventListener("mouseover", function() {

    // Get screen width

    let width = window.innerWidth;


    // Get screen height

    let height = window.innerHeight;


    // Generate random position

    let randomX =
        Math.random() * (width - 120);


    let randomY =
        Math.random() * (height - 70);


    // Move No button

    noBtn.style.position = "fixed";

    noBtn.style.left = randomX + "px";

    noBtn.style.top = randomY + "px";

});