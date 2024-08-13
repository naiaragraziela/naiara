function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
   function draw() {
    stroke("blue");
    fill("red")
  
   if(mouseisPressed){
    rect(mouseX, mouseY, 20, 35);
   }
  
   }