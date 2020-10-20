//there are a bunch of bugs, but hey im kinda busy and i have also been learning unity. I also did all the required things.

$(".level1").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/16/8f/33/168f33328213ef4b913675d3a4eefa11.gif)");
});

$(".level2").click(function() {
    $(".game").css("background", "url(http://imgs.abduzeedo.com/files/articles/wicked-fighting-game-background-gifs/JYQiziWa.gif)");
});

$(".level3").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/48/75/bb/4875bb87cf5b78be5baa2d4859e4acd8.gif)");
});

$(".start-game").click(function() {
    $(".game").fadeToggle();
    $(".p1-name").text("Ryu");
});

$(".ryu").click(function() {
    $(".sprite-jab-attack").toggle();
    $(".sprite-ready").toggle();
});

$(".ryu").dblclick(function() {
    $(".sprite-jump-attack").toggle();
    $(".sprite-ready").toggle();
    $(".p1-health-progress").css("width","50%");
    $(".p1-health-progress").css("background-color","yellow");
});

$(".ryu").hover(function() {
    $(".sprite-taunt").toggle();
    $(".sprite-ready").toggle();
    $(".p1-health-progress").css("width","100%");
    $(".p1-health-progress").css("background-color","white");
});