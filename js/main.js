$(document).ready(function() {
    $("#flipSignUp").click(function() {

            // When sign up link cliked, show sign up form 

        $("#main").css("-webkit-animation-name", "showSignUp");
        $("#main").css("transform", "translate(-50%,-50%) rotateY(180deg)");

        $("#signUpMain").css("-webkit-animation-name", "hideSignIn");
        $("#signUpMain").css("transform", "translate(-50%,-50%) rotateY(0deg)");
    });

    // When sign in link cliked, show sign in form 

    $("#flipSignIn").click(function() {
        $("#main").css("-webkit-animation-name", "hideSignUp");
        $("#main").css("transform", "translate(-50%,-50%) rotateY(0deg)");

        $("#signUpMain").css("-webkit-animation-name", "showSignIn");
        $("#signUpMain").css("transform", "translate(-50%,-50%) rotateY(180deg)");
    });
});