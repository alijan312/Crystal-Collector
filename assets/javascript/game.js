var targetScore = "";
var counter = 0;
var win = 0;
var loss = 0;
var crystalPoints = [3, 6, 12, 13, 9, 11, 7];
var images = ["./assets/images/BlueCrystal.jpg", "./assets/images/GreenCrystal.png", "./assets/images/OrangeCrystal.jpg", "./assets/images/RedCrystal.jpg"];

function randomtargetScore() {
    targetScore = Math.floor(Math.random() * 100) + 13;
    $("#targetNumber").text(targetScore);
}

randomtargetScore();




function initialize () {
    randomtargetScore ();
    counter = 0;


}


$("#winScore").text(win);
$("#lossScore").text(loss);


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
        $("#winScore").text(win);
        initialize();
    }
    
    else if (counter >= targetScore) {
        loss++;
        $("#lossScore").text(loss);
        initialize();
    
    }
    
});

