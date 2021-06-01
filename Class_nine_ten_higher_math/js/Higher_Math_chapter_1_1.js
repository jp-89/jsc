

function Higher_Math_chapter_1_1_Q_6(context, x1,y1,x2,y2,x3,y3,x4,y4){

var rectangle = new RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4);
drawRectangle(context,rectangle);
var centerO =  new Point(x1+80,y1+90);
var circle =  new Circle(centerO,65);
// Bangla
var fillcolor ='rgba(255,0,255,0.5)';
setCircleFillStyle(circle,fillcolor);
setCircleFill(circle,"yes");
drawCircle( context,circle,"green");

setCentre(circle,circle.centerX+70,circle.centerY);
fillcolor ='rgba(0,155,155,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

//English
var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+30,y1+30,"A");

displayName(context,circle.centerX-110,circle.centerY-10,"3x");


displayName(context,circle.centerX-40,circle.centerY-10,"x");

displayName(context,circle.centerX+10,circle.centerY-10,"2x+8");

displayName(context,x2-30,y2+30,"B");
//displayName(context,x1+110,y1-4,"U = 100");

}


function Higher_Math_chapter_1_1_Q_18(context, x1,y1,x2,y2,x3,y3,x4,y4){

var rectangle = new RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4);
drawRectangle(context,rectangle);
var centerO =  new Point(x1+75,y1+70);
var circle =  new Circle(centerO,55);
// Bangla
var fillcolor ='rgba(255, 0, 255,0.5)';
setCircleFillStyle(circle,fillcolor);
setCircleFill(circle,"yes");
drawCircle( context,circle,"green");

//English
var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+25,y1+20,"E");

setCentre(circle,circle.centerX+60,circle.centerY);
fillcolor ='rgba(102,255,204,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x2-50,y2+20,"G");


setCentre(circle,circle.centerX-30,circle.centerY+45);
fillcolor ='rgba(0,2555,255,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+30,y1+160,"C");


var font= "14px Arial";
context.fillStyle="black";
displayNameWithFont(context,circle.centerX-70,circle.centerY-60,"2x",font);
displayNameWithFont(context,circle.centerX-10,circle.centerY-60,"12",font);
displayNameWithFont(context,circle.centerX+40,circle.centerY-60,"x-1",font);

displayNameWithFont(context,circle.centerX-40,circle.centerY-15,"7",font);
displayNameWithFont(context,circle.centerX-5,circle.centerY-15,"5",font);
displayNameWithFont(context,circle.centerX+30,circle.centerY-15,"4",font);

displayNameWithFont(context,circle.centerX-10,circle.centerY+40,"x+5",font);


//displayName(context,x1+110,y1-4,"U = 100");

}

function Higher_Math_chapter_1_1_Q_20(context, x1,y1,x2,y2,x3,y3,x4,y4){

var rectangle = new RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4);
drawRectangle(context,rectangle);
var centerO =  new Point(x1+75,y1+70);
var circle =  new Circle(centerO,55);
// Bangla
var fillcolor ='rgba(255, 0, 255,0.5)';
setCircleFillStyle(circle,fillcolor);
setCircleFill(circle,"yes");
drawCircle( context,circle,"green");

//English
var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+25,y1+20,"A");

setCentre(circle,circle.centerX+60,circle.centerY);
fillcolor ='rgba(102,255,204,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x2-50,y2+20,"B");


setCentre(circle,circle.centerX-30,circle.centerY+45);
fillcolor ='rgba(0,2555,255,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+30,y1+160,"C");


var font= "14px Arial";
context.fillStyle="black";
displayNameWithFont(context,circle.centerX-70,circle.centerY-60,"2x",font);
displayNameWithFont(context,circle.centerX-10,circle.centerY-60,"x+1",font);
displayNameWithFont(context,circle.centerX+40,circle.centerY-60,"x-1",font);

displayNameWithFont(context,circle.centerX-40,circle.centerY-15,"2",font);
displayNameWithFont(context,circle.centerX-5,circle.centerY-15,"3",font);
displayNameWithFont(context,circle.centerX+30,circle.centerY-15,"0",font);

displayNameWithFont(context,circle.centerX-10,circle.centerY+40,"x+5",font);


//displayName(context,x1+110,y1-4,"U = 100");

}

