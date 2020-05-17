let menu;
let menug;
let bolumg;
let menuimg;
class menuolustur{
  constructor(){
    menug = createGraphics(600,600);
    menug.background(menuimg);
    bolumg = createGraphics(600,600);
    bolumg.background(200,150,50);
  }
  menugoster(){
    //menu ekranındaki butonların yazısını ve şeklini değiştirir
    menustyle();
    image(menug,0,0);
  }
  bolumgoster(){
    //bolum ekranındaki butonların yazısını ve şeklini değiştirir
    bolumstyle();
    image(bolumg,0,0);
  }
}
