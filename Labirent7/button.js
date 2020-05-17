function menustyle() {
  btn3.style("visibility","hidden");
  document.getElementById("button1").innerHTML = "Oyuna Başla";
  //buton konumu
  btn1.position(125,100);
  btn1.mousePressed(btnb1);
  btn1.style("visibility","visible");
  btn1.style("background-color","#5b264a");
  //buton üstüne gelindiğinde işaretçinin görünümünü değiştirir
  btn1.style("cursor","pointer");
  btn1.style("font-size","18px");
  btn1.size(200,50);
  //butondaki yazının rengini değiştirir
  btn1.style("color","#ffffff");
  btn1.style("text-shadow","0px -1px 0px #666666");
  btn1.style("border","1px solid #280f1f");
  btn1.style("font-family","Stempel");
  btn1.style("border-radius","2px");
  document.getElementById("button2").innerHTML = "Bölüm Seç";
  //buton konumu
  btn2.position(225,200);
  btn2.style("background-color","#2e0f22");
  btn2.style("border-color","#2e0a36");
  btn2.style("cursor","pointer");
  btn2.style("font-family","Stempel");
  btn2.style("font-size","18px");
  btn2.size(200,50);
  btn2.mousePressed(btnbolum);
  btn2.style("color","#ffffff");
  btn2.style("text-shadow","0px -1px 0px #666666");
  btn2.style("border-radius","0px");
  btn2.style("visibility","visible");
}
function bolumstyle() {
  btn1.position(200,100);
  btn2.position(200,170);
  btn3.position(200,240);
  btn4.position(200,310);
  btn5.position(200,380);
  document.getElementById("button1").innerHTML = "Bölüm 1";
  document.getElementById("button2").innerHTML = "Bölüm 2";
  document.getElementById("button3").innerHTML = "Bölüm 3";
  document.getElementById("button4").innerHTML = "Bölüm 4";
  document.getElementById("button5").innerHTML = "Bölüm 5";
  btn1.style("background-color","#44c767");
  btn1.style("cursor","pointer");
  btn1.style("color","#ffffff");
  btn1.style("font-family","Stempel");
  btn1.style("border","1px solid #18ab29");
  btn1.style("font-size","18px");
  btn1.style("padding","16px 31px");
  btn1.style("border-radius","28px");
  btn1.size(200,50);

  btn2.style("background-color","#44c767");
  btn2.style("cursor","pointer");
  btn2.style("color","#ffffff");
  btn2.style("font-family","Stempel");
  btn2.style("border","1px solid #18ab29");
  btn2.style("font-size","18px");
  btn2.style("padding","16px 31px");
  btn2.style("border-radius","28px");
  btn2.size(200,50);

  btn3.style("background-color","#44c767");
  btn3.style("cursor","pointer");
  btn3.style("color","#ffffff");
  btn3.style("font-family","Stempel");
  btn3.style("border","1px solid #18ab29");
  btn3.style("font-size","18px");
  btn3.style("padding","16px 31px");
  btn3.style("border-radius","28px");
  btn3.size(200,50);

  btn4.style("background-color","#44c767");
  btn4.style("cursor","pointer");
  btn4.style("color","#ffffff");
  btn4.style("font-family","Stempel");
  btn4.style("border","1px solid #18ab29");
  btn4.style("font-size","18px");
  btn4.style("padding","16px 31px");
  btn4.style("border-radius","28px");
  btn4.size(200,50);

  btn5.style("background-color","#44c767");
  btn5.style("cursor","pointer");
  btn5.style("color","#ffffff");
  btn5.style("font-family","Stempel");
  btn5.style("border","1px solid #18ab29");
  btn5.style("font-size","18px");
  btn5.style("padding","16px 31px");
  btn5.style("border-radius","28px");
  btn5.size(200,50);

  btn1.style("visibility","visible");
  btn2.style("visibility","visible");
  btn3.style("visibility","visible");
  btn4.style("visibility","visible");
  btn5.style("visibility","visible");
  btn1.mousePressed(btnb1);
  btn2.mousePressed(btnb2);
  btn3.mousePressed(btnb3);
  btn4.mousePressed(btnb4);
  btn5.mousePressed(btnb5);
}
function sonstyle() {
  btn1.position(325,300);
  document.getElementById("button1").innerHTML = "Menüye Dön";
  btn1.style("background-color","#a73f2d");
  btn1.style("border","1px solid #241d13");
  btn1.style("cursor","pointer");
  btn1.style("color","#ffffff");
  btn1.style("font-family","Stempel");
  btn1.style("font-size","20px");
  btn1.style("border-radius","2px");
  btn1.size(200,50);
  btn1.style("text-shadow","0px -1px 0px #7a2a1d");

  btn1.style("visibility","visible");
  btn1.mousePressed(btnmenu);
  btn2.position(75,300);
  document.getElementById("button2").innerHTML = "Bölüm Seç";
  btn2.style("background-color","#a73f2d");
  btn2.style("border","1px solid #241d13");
  btn2.style("cursor","pointer");
  btn2.style("color","#ffffff");
  btn2.style("font-family","Stempel");
  btn2.style("font-size","20px");
  btn2.size(200,50);
  btn2.style("border-radius","2px");
  btn2.style("text-shadow","0px -1px 0px #7a2a1d");
  btn2.style("visibility","visible");
  btn2.mousePressed(btnbolum);
}
//Hocam iftardan sonra ikramım olsun
//──────────────░░───░░───░───────────────
//─────────────░────░░───░░───────────────
//─────────────░░───░────░────────────────
//──────────────░───░────░────────────────
//─────────────░░──░░───░░────────────────
//────────────────────────────────────────
//───────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██─────────
//────────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██──────────
//─────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█───────────
//─────────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██───────────
//──────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█────────────
//──────────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██────────────
//───────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//───────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//───────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//───────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//───────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//──────────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────────
//──────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██────────────
//─────────██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█────────────
//─────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█───────────
//────────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██──────────
//───────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────
//───────█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█─────────
//───────███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███─────────
//──────────███████████████████───────────
