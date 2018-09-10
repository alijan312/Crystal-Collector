var targetScore = "";
var counter = 0;
var win = 0;
var loss = 0;
var crystalPoints = [];
var images = ["./assets/images/BlueCrystal.jpg", "./assets/images/GreenCrystal.png", "./assets/images/OrangeCrystal.jpg", "./assets/images/RedCrystal.jpg"];

function randomtargetScore() {
    targetScore = Math.floor(Math.random() * 100) + 13;
    $("#targetNumber").text(targetScore);
}

randomtargetScore();

function randomCrystal () {
    crystalPoints.length = 0;
    for (var i=0; i<4; i++) {
        crystalPoints.push(Math.floor(Math.random() * 20) + 1);
    }
}

randomCrystal();


function initialize() {
    randomtargetScore();
    counter = 0;
    $("#userScore").text(counter);
    randomCrystal();


}


$("#winScore").text(win);
$("#lossScore").text(loss);
$("#userScore").text(counter);


for (var i = 0; i < crystalPoints.length; i++) {
    var crystalPic = $("<img>");
    crystalPic.addClass("crystalPictures");
    crystalPic.attr("src", images[i]);
    crystalPic.attr("value", crystalPoints[i]);
    crystalPic.attr("width", "100px");
    $("#crystalimages").append(crystalPic);
}

$(".crystalPictures").on("click", function () {

    var value = ($(this).attr("value"));
    value = parseInt(value);
    counter += value;
    $("#userScore").text(counter);

    if (counter === targetScore) {
        win++;
        alert("you win!");
        $("#winScore").text(win);
        initialize();
    } else if (counter >= targetScore) {
        loss++;
        alert("you lose!");
        $("#lossScore").text(loss);
        initialize();

    }

});