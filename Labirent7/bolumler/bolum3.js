let bolum3;
let b03 = [
  [0,3,3,3,3,3,3,3,1,0],
  [3,3,3,0,3,3,1,0,3,3],
  [0,1,3,3,1,0,2,3,3,0],
  [1,3,1,0,2,3,3,1,1,0],
  [3,1,1,3,3,2,0,2,3,0],
  [1,1,1,0,3,1,2,0,1,0],
  [3,2,1,3,1,3,0,2,3,3],
  [0,0,3,3,3,1,1,3,1,0],
  [1,2,0,3,1,2,0,0,2,0],
  [0,0,0,1,0,1,1,0,0,0]
];
function b3(){
  btn1.style("visibility","hidden");
  btn2.style("visibility","hidden");
  btn3.style("visibility","hidden");
  btn4.style("visibility","hidden");
  btn5.style("visibility","hidden");
    if(bolum3.ready==false){
      bolum3.line(mouseX,mouseY,pmouseX,pmouseY);
      image(bolum3,0,0);
      b3kontrol();
    }else {

    }
}

function lab3() {
  bolum3 = createGraphics(600,600);
  bolum3.background(81,225,159);
  bolum3.stroke(1);
  bolum3.buyukluk = b;
  bolum3.ready = false;
  bolum3.line(0,1,600,1);
  bolum3.line(599,1,599,599);
  bolum3.line(599,599,1,599);
  bolum3.line(1,599,1,1);
  strokeWeight(5);
  bolum3.line(362,540,362,600);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b03[i][j]===1) {
          bolum3.line(j*b+b,i*b,j*b+b,i*b+b);
        }
        if (b03[i][j]===2) {
          bolum3.line(j*b+b,i*b,j*b+b,i*b+b);
          bolum3.line(j*b+b,i*b+b,j*b,i*b+b);
        }
        if (b03[i][j]===3) {
          bolum3.line(j*b+b,i*b+b,j*b,i*b+b);
        }
    }
  }
  bolum3.noStroke();
  bolum3.fill(200,255,0);
  bolum3.square(242,2,57);
  bolum3.fill(255,0,0);
  bolum3.square(301,542,58)
  bolum3.stroke(1);
}
function b3kontrol() {
  if(mouseX == 1 || mouseX == 599 || mouseY == 1 || mouseY == 599){
    bolum3.ready = collidePointLine(mouseX,mouseY,10,0,590,0);
    bolum3.ready = collidePointLine(mouseX,mouseY,600,10,600,590);
    bolum3.ready = collidePointLine(mouseX,mouseY,590,600,10,600);
    bolum3.ready = collidePointLine(mouseX,mouseY,0,590,0,10);
    if(bolum3.ready){
      hazir=true;hata=true;
      print('sinirlar',bolum3.ready);
    }
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b03[i][j]===1) {
          bolum3.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b);
          if(bolum3.ready){hazir=true;hata=true;print('sag',bolum3.ready);}
        }
        if (b03[i][j]===2) {
          bolum3.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b);
          bolum3.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b);
          if(bolum3.ready){hazir=true;hata=true;print('capraz',bolum3.ready);}
        }
        if (b03[i][j]===3) {
          bolum3.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b);
          if(bolum3.ready){hazir=true;hata=true;print('asagi',bolum3.ready);}
      }
    }
  }
  if(mouseX > 300 && mouseX < 360 && mouseY > 540 && mouseY < 600){

    print('oyun bitti');
    hazir=true;
    oyunsonu=true;

  }
}
