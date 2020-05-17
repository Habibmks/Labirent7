let bolum5;
let b05 = [
  [0,1,0,3,2,0,1,1,0,3],
  [1,3,3,0,3,1,1,1,3,0],
  [1,0,1,1,1,1,3,2,0,0],
  [1,1,1,1,1,3,3,1,1,0],
  [1,1,3,2,3,1,1,3,2,0],
  [1,3,3,3,3,1,1,0,1,0],
  [3,1,1,0,2,1,1,1,1,0],
  [0,1,1,3,3,3,2,1,3,0],
  [1,1,0,1,0,2,0,1,0,3],
  [1,0,1,0,1,0,1,1,0,0]
];
function b5(){
    btn1.style("visibility","hidden");
    btn2.style("visibility","hidden");
    btn3.style("visibility","hidden");
    btn4.style("visibility","hidden");
    btn5.style("visibility","hidden");
    if(bolum5.ready==false){
      bolum5.line(mouseX,mouseY,pmouseX,pmouseY);
      image(bolum5,0,0);
      b5kontrol();
    }else {

    }
}
function b5kontrol() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b05[i][j]===1) {
          bolum5.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          if(bolum5.ready){hazir=true;hata=true;print('sag',bolum5.ready);}
        }
        if (b05[i][j]===2) {
          bolum5.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          bolum5.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum5.ready){hazir=true;hata=true;print('capraz',bolum5.ready);}
        }
        if (b05[i][j]===3) {
          bolum5.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum5.ready){hazir=true;hata=true;print('asagi',bolum5.ready);}
      }
    }
  }
  if(mouseX > 300 && mouseX < 360 && mouseY > 540 && mouseY < 600){

    print('oyun bitti');
    hazir=true;
    oyunsonu=true;

  }
}
function lab5(){
  bolum5 = createGraphics(600,600);
  bolum5.background(78,70,248);
  bolum5.buyukluk = b;
  bolum5.ready = false;
  bolum5.line(0,1,600,1);
  bolum5.line(599,1,599,599);
  bolum5.line(599,599,1,599);
  bolum5.line(1,599,1,1);
  strokeWeight(5);
  bolum5.line(298,538,298,600);
  bolum5.line(298,538,360,538);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b05[i][j]===1) {
          bolum5.line(j*b+b,i*b,j*b+b,i*b+b);
        }
        if (b05[i][j]===2) {
          bolum5.line(j*b+b,i*b,j*b+b,i*b+b);
          bolum5.line(j*b+b,i*b+b,j*b,i*b+b);
        }
        if (b05[i][j]===3) {
          bolum5.line(j*b+b,i*b+b,j*b,i*b+b);
        }
    }
  }
  bolum5.noStroke();
  bolum5.fill(0,255,0);
  bolum5.square(240,0,60);
  bolum5.fill(255,0,0);
  bolum5.square(300,540,60)
  bolum5.stroke(1);
}
