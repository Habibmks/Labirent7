let b=60;//b = kutularin eni boyu bkz bolumler
let hazir=false,//bolumleri durduran degisken bkz draw, oyunsonu, menu
anahtar=0,//menuler arasinda gecen grafik bkz draw>switch
tagain=0,//bolum sonunda yeniden baslarken gecici olarak anahtar degiskenini tutar bkz draw>oyunsonu
oyunsonu=false,//bolum bitince bolum sonu ekranini gosteren degisken yesil, draw>oyunsonu
hata=false;//hata alindiginda mousekontrol calistiran degisken draw>hata
function preload() {
  menuimg = loadImage(`menu.png`);
}
function setup() {
  pixelDensity(1);
  calistir();
  createCanvas(600,600);
  background(30,200,255);
  //sağ tık kapatır
  document.oncontextmenu = function() {return false;}
  frameRate(60);
}

function draw() {
    print('hazir',hazir,'oyunsonu',oyunsonu,'hata',hata,'anahtar',anahtar);
    mousekonrol1();
    //bölümler arası geçiş sağlayan if koşulu
    if(!hazir){
      switch (anahtar) {
        case 0:
        menu.menugoster();
          break;
        case 1:
        b1();
          break;
        case 2:
        b2();
          break;
        case 3:
        menu.bolumgoster();
          break;
        case 4:
          yesil();
          break;
        case 5:
        b3();
          break;
        case 6:
        b4();
          break;
        case 7:
        b5();
          break;
      }
    }
    //oyun bittiğinde veya hata alındığında oyun durur ve aşağıdaki koşullardan biri sağlanır
    if(hazir){
      //hata alındığında sadece mousekonrol fonksiyonu çalışır hale gelir
      //başka hiçbir değişiklik olmaz
      if (hata) {
        mousekonrol1();
      }
      //bölüm bitirildiğinde gerekli değişkenlerin değerleri değiştirilerek oyun sonu ekranına geçiril
      if (oyunsonu) {
        tagain = anahtar;
        anahtar = 4;
        hazir = false;
        oyunsonu = false;
      }
    }

}
