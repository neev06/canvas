var rect;
var pos;
var database;
var piece;
var drawing=[];
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    piece=loadImage("piece.png");
     rect=createSprite(250,250,10,10);
rect.shapeColor="red";

database.ref("rect/position").on("value",readPos,error);
}
function draw(){

 background("white");
 drawSprites();

 var position = [rect.x,rect.y];
drawing.push(position);


for(var i=0; i<drawing.length; i++){
   image (piece, drawing[i][0], drawing[i][1]);
}
}

function changePosition(){
    database.ref("rect/position").set({
        x:mouseX,
        y:mouseY
    })
}
function mouseDragged(){
    rect.x=mouseX;
    rect.y=mouseY;

    database.ref("rect/position").set({
        x:mouseX,
        y:mouseY
    })
}
function mouseReleased(){
}

function readPos(data){
    pos=data.val();
    rect.x=pos.x;
    rect.y=pos.y;
}

function error(){
    console.log("Error");
}


