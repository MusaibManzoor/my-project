var b1, b2,b3,b4,b5,b6,b7,b8,b9,b10;

function setup() {
  createCanvas(340, 390);
  b1=new Building();
  b1.position=4.31;
  b1.floors=24;
  
  b2=new Building();
  b2.position=0.95;
  b2.floors=12;
  
  
  b3=new Building();
  b3.position=0.1;
  b3.floors=17;
  
  
  b4=new Building();
  b4.position=1.7;
  b4.floors=12;

  
  b5=new Building();
  b5.position=2.7;
  b5.floors=14;
  
  
  b6=new Building();
  b6.position=3.7;
  b6.floors=16;
  
  
  b7=new Building();
  b7.position=4.92;
  b7.floors=32;
  
  
  b8=new Building();
  b8.position=5.565;
  b8.floors=23;

  
  b9=new Building();
  b9.position=6.2;
  b9.floors=17;
  
  
  b10=new Building();
  b10.position=7.488;
  b10.floors=13;
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}