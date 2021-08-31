

var butc=["red","blue","green","yellow"];
var pat=[];
var upat=[];
var start=0;
var level=0;var unwantedclik=0;var sound=0;
var gs=new Audio ('gameover.mp3');
$("#level").on("click",function()
{ if(start!=1){
   sequence();unwantedclik=1;
 }start=1;
});

$(".button").click(function userclick()
{if(unwantedclik==1){
  var clickedbtn=$(this).attr("id");
  animate(clickedbtn);
upat.push(clickedbtn);console.log(upat);
checkanswer(upat.length-1);
}
else{ $("#level").prepend("<span>👉</span>");
}
});

function sequence(){upat=[];
  level++;console.log(level);sounds();
 $("#level").text("Level "+level);
var ran=Math.floor(Math.random()*4);
var rbutc=butc[ran];
pat.push(rbutc);console.log(pat);animate(rbutc);
}

function checkanswer(a)
{if(pat[a]===upat[a])
  {if (pat.length==upat.length)
    {console.log("succes");
    setTimeout(function(){sequence();},1000); }
  }
  else {
    $("#level").text("Game Over");
    $("#ref").text(" Refresh the page to Restart");gs.play();
  }
}

$("#mute").click(function m(){sound=1;$(this).text("🔇");});
function animate(a){$("#"+a).fadeIn(100).fadeOut(100).fadeIn(100);}
function sounds(){if (sound==0) {
  var s=new Audio("c.mp3");s.play();
}}
