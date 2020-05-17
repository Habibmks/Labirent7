let bolum4;
let b04 = [
  [0,0,3,3,0,1,0,3,3,0],
  [1,3,3,1,1,3,3,3,1,0],
  [3,1,3,2,3,1,1,0,2,0],
  [1,1,0,1,1,3,2,3,1,0],
  [1,1,1,3,3,3,3,0,2,3],
  [1,1,3,1,3,3,3,2,0,0],
  [1,0,1,3,3,3,3,3,2,0],
  [1,1,3,3,1,0,1,0,3,0],
  [1,1,0,2,0,2,2,1,0,3],
  [0,1,0,0,1,0,0,1,0,0]
];
function b4(){
    btn1.style("visibility","hidden");
    btn2.style("visibility","hidden");
    btn3.style("visibility","hidden");
    btn4.style("visibility","hidden");
    btn5.style("visibility","hidden");
    if(bolum4.ready==false){
      bolum4.line(mouseX,mouseY,pmouseX,pmouseY);
      image(bolum4,0,0);
      b4kontrol();
    }else {

    }
}
function b4kontrol() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b04[i][j]===1) {
          bolum4.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          if(bolum4.ready){hazir=true;hata=true;print('sag',bolum4.ready);}
        }
        if (b04[i][j]===2) {
          bolum4.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          bolum4.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum4.ready){hazir=true;hata=true;print('capraz',bolum4.ready);}
        }
        if (b04[i][j]===3) {
          bolum4.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum4.ready){hazir=true;hata=true;print('asagi',bolum4.ready);}
      }
    }
  }
  if(mouseX > 300 && mouseX < 360 && mouseY > 540 && mouseY < 600){

    print('oyun bitti');
    hazir=true;
    oyunsonu=true;

  }
}
function lab4(){
  bolum4 = createGraphics(600,600);
  bolum4.background(161,95,242);
  bolum4.buyukluk = b;
  bolum4.ready = false;
  bolum4.line(0,1,600,1);
  bolum4.line(599,1,599,599);
  bolum4.line(599,599,1,599);
  bolum4.line(1,599,1,1);
  strokeWeight(5);
  bolum4.line(298,538,298,600);
  bolum4.line(298,538,360,538);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b04[i][j]===1) {
          bolum4.line(j*b+b,i*b,j*b+b,i*b+b);
        }
        if (b04[i][j]===2) {
          bolum4.line(j*b+b,i*b,j*b+b,i*b+b);
          bolum4.line(j*b+b,i*b+b,j*b,i*b+b);
        }
        if (b04[i][j]===3) {
          bolum4.line(j*b+b,i*b+b,j*b,i*b+b);
        }
    }
  }
  bolum4.noStroke();
  bolum4.fill(0,255,0);
  bolum4.square(240,0,60);
  bolum4.fill(255,0,0);
  bolum4.square(300,540,60)
  bolum4.stroke(1);
}
