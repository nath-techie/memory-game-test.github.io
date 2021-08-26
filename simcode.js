

var butc=["red","blue","green","yellow"];
var pat=[];
var upat=[];
var start=0;
var level=0;var unk=0;
$(document).on("keypress",function()
{ if(start!=1){
   sequence();unk=1;
 }start=1;
});

$(".button").click(function userclick()
{if(unk==1){
  var clickedbtn=$(this).attr("id");
  animate(clickedbtn);
upat.push(clickedbtn);console.log(upat);
checkanswer(upat.length-1);
}
else{ $("#level").prepend("<span>👉</span>");}
});

function sequence(){upat=[];
  level++;console.log(level);
 $("#level").text("Level "+level);
var ran=Math.floor(Math.random()*4);
var rbutc=butc[ran];
pat.push(rbutc);console.log(pat);animate(rbutc);
}

function checkanswer(a)
{if(pat[a]===upat[a])
  {if (pat.length==upat.length) {console.log("succes");setTimeout(function(){sequence();},1000); }
  }
  else {
    $("#level").text("Game Over, Press Any Key to Restart");
  }
}

function animate(a){$("#"+a).fadeIn(100).fadeOut(100).fadeIn(100);}
