let bolum2;
let b02 = [
  [0,0,3,3,3,3,3,1,0,0],
  [2,1,0,1,0,1,0,2,1,0],
  [0,2,1,3,2,1,1,0,2,0],
  [0,2,3,1,1,3,3,2,1,0],
  [3,3,1,1,3,3,0,3,3,3],
  [0,3,2,3,3,1,3,2,0,0],
  [1,3,0,3,1,3,3,1,1,0],
  [3,3,2,1,1,0,1,0,2,0],
  [0,3,3,2,1,1,1,1,0,3],
  [0,0,0,0,1,1,0,1,0,0]
];
function b2(){
  btn1.style("visibility","hidden");
  btn2.style("visibility","hidden");
  btn3.style("visibility","hidden");
  btn4.style("visibility","hidden");
  btn5.style("visibility","hidden");
    if(bolum2.ready==false){
      bolum2.line(mouseX,mouseY,pmouseX,pmouseY);
      image(bolum2,0,0);
      b2kontrol();

    }else {

    }
}
function lab2() {
  bolum2 = createGraphics(600,600);
  bolum2.background(169,222,67);
  bolum2.stroke(1);
  bolum2.buyukluk = b;
  bolum2.ready = false;
  bolum2.line(0,1,600,1);
  bolum2.line(599,1,599,599);
  bolum2.line(599,599,1,599);
  bolum2.line(1,599,1,1);
  strokeWeight(5);
  bolum2.line(298,540,298,600);
  bolum2.line(362,540,362,600);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b02[i][j]===1) {
          bolum2.line(j*b+b,i*b,j*b+b,i*b+b);
        }
        if (b02[i][j]===2) {
          bolum2.line(j*b+b,i*b,j*b+b,i*b+b);
          bolum2.line(j*b+b,i*b+b,j*b,i*b+b);
        }
        if (b02[i][j]===3) {
          bolum2.line(j*b+b,i*b+b,j*b,i*b+b);
        }
    }
  }
  bolum2.noStroke();
  bolum2.fill(0,255,0);
  bolum2.square(242,2,57);
  bolum2.fill(255,0,0);
  bolum2.square(301,542,58)
  bolum2.stroke(1);
}

function b2kontrol() {

  if(mouseX == 1 || mouseX == 599 || mouseY == 1 || mouseY == 599){
    bolum2.ready = collidePointLine(mouseX,mouseY,10,0,590,0);
    bolum2.ready = collidePointLine(mouseX,mouseY,600,10,600,590);
    bolum2.ready = collidePointLine(mouseX,mouseY,590,600,10,600);
    bolum2.ready = collidePointLine(mouseX,mouseY,0,590,0,10);
    if(bolum2.ready){
      hazir=true;hata=true;
      print('sinirlar',bolum2.ready);
    }
  }
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b02[i][j]===1) {
          bolum2.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b);
          if(bolum2.ready){hazir=true;hata=true;print('sag',bolum2.ready);}
        }
        if (b02[i][j]===2) {
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b);
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b);
          if(bolum2.ready){hazir=true;hata=true;print('capraz',bolum2.ready);}
        }
        if (b02[i][j]===3) {
          bolum2.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b);
          if(bolum2.ready){hazir=true;hata=true;print('asagi',bolum2.ready);}
      }
    }
  }

  if(mouseX > 300 && mouseX < 360 && mouseY > 540 && mouseY < 600){

    print('oyun bitti');
    hazir=true;
    oyunsonu=true;
  }
}
