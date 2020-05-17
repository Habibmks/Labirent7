let son;
function sonekran(){
  son = createGraphics(600,600);
  son.background(0,255,0);
  son.textSize(50);
  son.text('Tebrikler',200,250);
  //print('oyunsonu hazir');
  son.fill(100);


}
function yesil() {
  let green = false;
  green = son.mousePressed();
  sonstyle();
  if(green){
    //Bölüm bitirildiğinde her bir labirenti çizgi kalmasın diye yeniden çizer
    lab1();
    lab2();
    lab3();
    lab4();
    lab5();
    image(son,0,0);
  }
}
