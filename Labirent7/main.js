let btn1,btn2,btn3,btn4,btn5;
//sketch içerisinin daha az karmaşık olması için setup içerisinde kullanılan
//kodların calistir fonksiyonunun içinde çalışarak erişimin daha düzgün olması sağlandı
function calistir(){
  //yüklenirken tüm grafiklerini çizer
  lab1();
  lab2();
  lab3();
  lab4();
  lab5();
  sonekran();
  menu = new menuolustur();
  //html içerisinde oluşturulan butonlara erişip görünmez hale getirir
  btn1 = select("#button1"); btn1.position(0,0); btn1.style("visibility","hidden");
  btn2 = select("#button2"); btn2.position(0,0); btn2.style("visibility","hidden");
  btn3 = select("#button3"); btn3.position(0,0); btn3.style("visibility","hidden");
  btn4 = select("#button4"); btn4.position(0,0); btn4.style("visibility","hidden");
  btn5 = select("#button5"); btn5.position(0,0); btn5.style("visibility","hidden");
}
//yeniden baslatan fonksiyon
function mousekonrol1(){
  if(mouseX > 240 && mouseX < 300 && mouseY > 0 && mouseY < 60){
      hazir=false;
      hata=false;
      background(30,200,255);
      switch (anahtar) {
        case 1:
        b1();
          break;
        case 2:
        b2();
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
      //Duvar ile temas halinde bölüm yeniden başlatılırken
      //bölümlerin yeniden çizilmesini sağlayan bölüm
      lab1();
      lab2();
      lab3();
      lab4();
      lab5();
  }

}
//butonlarin kullanacagi fonksiyonlar
//bolumleri gosterir
function btnbolum(){
  oyunsonu = false;
  hazir = false;
  anahtar = 3;
}
//1. bolumu acar
function btnb1(){
  oyunsonu = false;
  hazir = false;
  anahtar = 1;
}
//2. bolumu acar
function btnb2() {
  oyunsonu = false;
  hazir = false;
  anahtar = 2;
}
//3. bolumu acar
function btnb3(){
  oyunsonu = false;
  hazir = false;
  anahtar = 5;
}
//4. bolumu acar
function btnb4(){
  oyunsonu = false;
  hazir = false;
  anahtar = 6;
}
//5. bolumu acar
function btnb5(){
  oyunsonu = false;
  hazir = false;
  anahtar = 7;
}
//Menuyu gosterir
function btnmenu() {
  hazir = false;
  anahtar = 0;
  oyunsonu = false;
  hata = false ;
}
//oyunun herhangi bir yerinde esc ile menuye geri donulebilir
function keyPressed() {
  if(keyCode === ESCAPE){
    btnmenu();
  }
}
