$(function(){
    var speed = 800;
    $("#font").change(function(){
        $("#fontContainer p").css("font-family", String($(this).val()));
    });
    $("#speed").change(function(){
        if(String($(this).val()) === "slow"){
            speed = 800;
        }
        else{
            speed = String($(this).val());
        }   
    });
    $("#red, #orange ,#yellow, #green, #blue," + 
    "#indigo, #purple, #pink, #brown, #magenta," +
    "#cyan, #limegreen, #skyblue, #yellowgreen, #orangered").click(function(event){
        $("#square, h2").css("background-color", event.target.id);
       // $("h2").css("background-color", event.target.id);
    });
    $(document).keypress(function(event){
        
        if(event.charCode === 32){
            $("#keyResult").text("Space bar is pressed.");
        }
        else{
            $("#keyResult").text(String.fromCharCode(event.charCode) + " is pressed.");
        }
        
    });
    $("#button").click(function(){
        if($(this).css("left") === "0px"){
            $("body").addClass("darkMode");
            $(".box").addClass("darkBox");
            $("h1,nav").css("background-color","#111");
            $(this).animate({
                left: "50%"
            },200);
        }
        else{
            $("body").removeClass("darkMode");
            $(".box").removeClass("darkBox");
            $("h1,nav").css("background-color","grey");
            $(this).animate({
                left: "0px"
            },200);
        }        
    });
    $("#square").ready(moveRight);
    $(document).keydown(function(event){
        console.log(event.which);
        if(event.which === 8){
            $("#keyResult").text("Backspace is pressed.");
        }
        if(event.which === 13){
            $("#keyResult").text("Entered is pressed.");
        }
        if(event.which === 32){
            $("#keyResult").text("Space bar is pressed.");
        }
        if(event.which === 37){
            $("#keyResult").text("Left arrow is pressed.");
        }
        if(event.which === 38){
            $("#keyResult").text("Up arrow is pressed.");
        }
        if(event.which === 39){
            $("#keyResult").text("Right arrow is pressed.");
        }
        if(event.which === 40){
            $("#keyResult").text("Down arrow is pressed.");
        }
    });
    $(document).keyup(function(event){
        $("#keyResult").text("Enter a key to show message.");
    });
    function moveRight(){
        $("#square").animate({
            left: "300px",
            top: "30px",
            height: "100px"
        },speed,moveDown);
    }
    function moveDown(){
        $("#square").animate({
            left: "300px",
            top: "300px",
            height: "30px",
            borderRadius: "50%"
        },speed,moveLeft);
    }
    function moveLeft(){
        $("#square").animate({
            left: "30px",
            top: "300px",
            opacity: "0.3",
            width: "300px"
        },speed,moveUp);
    }
    function moveUp(){
        $("#square").animate({
            left: "30px",
            top: "30px",
            opacity: "1",
            width: "30px",
            borderRadius: "0px"
        },speed,moveRight);
    }
});