
function chapter_2_1_Q_11(context, x1,y1,x2,y2,x3,y3,x4,y4){

var rectangle = new RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4);
drawRectangle(context,rectangle);
var centerO =  new Point(x1+80,y1+90);
var circle =  new Circle(centerO,65);
// Footbal
var fillcolor ='rgba(255,0,255,0.5)';
setCircleFillStyle(circle,fillcolor);
setCircleFill(circle,"yes");
drawCircle( context,circle,"green");

setCentre(circle,circle.centerX+70,circle.centerY);
fillcolor ='rgba(0,155,155,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
displayName(context,x1+30,y1+30,"F");

displayName(context,circle.centerX-90,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-87,circle.centerY-15,"1",font);
displayName(context,circle.centerX-90,circle.centerY+20,"10");

displayName(context,circle.centerX-40,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-33,circle.centerY-15,"2",font);
displayName(context,circle.centerX-40,circle.centerY+20,"10");

displayName(context,circle.centerX+20,circle.centerY-20,"P");
displaySubscript(context,circle.centerX+27,circle.centerY-15,"3",font);
displayName(context,circle.centerX+20,circle.centerY+20,"5");

displayName(context,circle.centerX-40,circle.centerY+85,"P");
displaySubscript(context,circle.centerX-31,circle.centerY+87,"4",font);
displayName(context,circle.centerX-15,circle.centerY+85," = 5");

displayName(context,x2-30,y2+30,"C");
displayName(context,x1+110,y1-4,"U = 30");

}

function chapter_2_1_Q_12(context, x1,y1,x2,y2,x3,y3,x4,y4){

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
displayName(context,x1+30,y1+30,"B");

displayName(context,circle.centerX-90,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-87,circle.centerY-15,"1",font);
displayName(context,circle.centerX-90,circle.centerY+20,"17");

displayName(context,circle.centerX-40,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-33,circle.centerY-15,"2",font);
displayName(context,circle.centerX-40,circle.centerY+20,"48");

displayName(context,circle.centerX+20,circle.centerY-20,"P");
displaySubscript(context,circle.centerX+27,circle.centerY-15,"3",font);
displayName(context,circle.centerX+20,circle.centerY+20,"20");

displayName(context,circle.centerX-40,circle.centerY+85,"P");
displaySubscript(context,circle.centerX-31,circle.centerY+87,"4",font);
displayName(context,circle.centerX-15,circle.centerY+85," = 15");

displayName(context,x2-30,y2+30,"E");
displayName(context,x1+110,y1-4,"U = 100");

}

