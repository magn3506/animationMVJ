$(window).on("load", begyndHistorie);


function begyndHistorie(){

//bjorn

$("#bjorn_container").addClass("bjorn_position_out");
$("#frog_container").addClass("frog_position_out");

$("#start").on("click", Walk);
$("#jump").on("click", jump);
$("#megafon").on("click", megafon);

$("#frogTalk").on("click", frogTalk);
$("#pull").on("click", fpull);
$("#fshoot").on("click", fshoot);

$("#bjorn_sprite").removeClass("megafon");

//frog

}


function Walk(){
console.log("Walk");

//bjorn

$("#bjorn_sprite").removeClass("megafon");
$("#bjorn_sprite").removeClass("bjorn_jump")
$("#frog_sprite").removeClass("fshoot");
$("#bjorn_container").removeClass("bjorn_position_out");

$("#bjorn_sprite").addClass("walk");
$("#bjorn_container").addClass("bjorn_move");
$("#bjorn_container").addClass("bjorn_position_in");

//frog

$("#frog_sprite").removeClass("fpull");
$("#frog_sprite").removeClass("frog_talk");
$("#frog_sprite").removeClass("frog_jump");
$("#frog_sprite").removeClass("fshoot");
$("#frog_container").removeClass("frog_position_out");

$("#frog_sprite").addClass("fwalk");
$("#frog_container").addClass("frog_move");
$("#frog_container").addClass("frog_position_in");


}


function jump(){
console.log("jump");

//bjorn

$("#bjorn_sprite").removeClass("walk");
$("#bjorn_container").removeClass("bjorn_move");

$("#bjorn_container").addClass("bjorn_position_in");

$("#bjorn_sprite").addClass("bjorn_jump");

//frog

$("#frog_sprite").removeClass("fpull");
$("#frog_sprite").removeClass("fwalk");
$("#frog_sprite").removeClass("frog_talk");
$("#frog_container").removeClass("frog_move");
$("#frog_sprite").removeClass("fshoot");


$("#frog_container").addClass("frog_position_in");
$("#frog_sprite").addClass("frog_jump");
}

function megafon(){
console.log("megafon");


$("#bjorn_sprite").removeClass("bjorn_jump");
$("#bjorn_container").addClass("bjorn_position_in");
$("#bjorn_sprite").addClass("megafon");



}

function frogTalk(){
    console.log ("frogTalk");

$("#frog_sprite").removeClass("fpull");
$("#frog_sprite").removeClass("frog_jump");
$("#frog_sprite").removeClass("fshoot");

$("#frog_container").addClass("frog_position_in");
$("#frog_sprite").addClass("frog_talk");

}


function fpull(){
    console.log ("fpull");

$("#frog_sprite").removeClass("frog_talk");
$("#frog_sprite").removeClass("fshoot");

$("#frog_container").addClass("frog_position_in");
$("#frog_sprite").addClass("fpull");

}

function fshoot(){
    console.log ("fshoot");

$("#frog_sprite").removeClass("fpull");

$("#frog_container").addClass("frog_position_in");

$("#frog_sprite").addClass("fshoot");

}
