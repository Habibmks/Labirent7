let bolum1;
let b01 = [
  [0,0,1,0,0,3,1,1,0,0],
  [1,1,3,2,3,1,3,1,1,0],
  [1,3,3,0,2,3,1,0,2,0],
  [1,0,1,3,1,1,1,1,0,3],
  [1,1,3,1,3,2,1,2,3,0],
  [1,1,0,3,1,0,3,1,3,3],
  [1,1,3,2,3,0,2,3,3,0],
  [1,1,0,3,1,3,1,3,3,0],
  [1,3,2,1,3,1,3,1,0,3],
  [0,0,0,0,1,1,0,1,0,0]
];
//labirenti calistirir
function b1(){
    btn1.style("visibility","hidden");
    btn2.style("visibility","hidden");
    btn3.style("visibility","hidden");
    btn4.style("visibility","hidden");
    btn5.style("visibility","hidden");
    if(bolum1.ready==false){
      bolum1.line(mouseX,mouseY,pmouseX,pmouseY);
      image(bolum1,0,0);
      b1kontrol();
    }else {

    }
}
//program calistikta mouse kontrolu yapan fonksiyon
//b1 fonksiyonundan cagirilir
function b1kontrol() {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b01[i][j]===1) {
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          if(bolum1.ready){hazir=true;hata=true;print('sag',bolum1.ready);}
        }
        if (b01[i][j]===2) {
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b,j*b+b,i*b+b, 1);
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum1.ready){hazir=true;hata=true;print('capraz',bolum1.ready);}
        }
        if (b01[i][j]===3) {
          bolum1.ready = collidePointLine(mouseX,mouseY,j*b+b,i*b+b,j*b,i*b+b, 1);
          if(bolum1.ready){hazir=true;hata=true;print('asagi',bolum1.ready);}
      }
    }
  }

  if(mouseX > 300 && mouseX < 360 && mouseY > 540 && mouseY < 600){

    print('oyun bitti');
    hazir=true;
    oyunsonu=true;

  }
}
//labirentin cizilmesini saglar
function lab1(){
  bolum1 = createGraphics(600,600);
  bolum1.background(30,200,255);
  bolum1.buyukluk = b;
  bolum1.ready = false;
  bolum1.line(0,1,600,1);
  bolum1.line(599,1,599,599);
  bolum1.line(599,599,1,599);
  bolum1.line(1,599,1,1);
  strokeWeight(5);
  bolum1.line(298,540,298,600);
  bolum1.line(362,540,362,600);
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (b01[i][j]===1) {
          bolum1.line(j*b+b,i*b,j*b+b,i*b+b);
        }
        if (b01[i][j]===2) {
          bolum1.line(j*b+b,i*b,j*b+b,i*b+b);
          bolum1.line(j*b+b,i*b+b,j*b,i*b+b);
        }
        if (b01[i][j]===3) {
          bolum1.line(j*b+b,i*b+b,j*b,i*b+b);
        }
    }
  }
  bolum1.noStroke();
  bolum1.fill(0,255,0);
  bolum1.square(240,0,60);
  bolum1.fill(255,0,0);
  bolum1.square(300,540,60)
  bolum1.stroke(1);
}
//Her bölümde kontrol sırasında kütüphane ile etkileşim sırasında oluşan kütüphanenin
//kullanım şeklinden dolayı bazı duvarların kontrollerinde bug oluyor for döngüsü ile
//çalışırken bu bugların çözümü kısmında bir henüz bir çözüme ulaşılmadı.
