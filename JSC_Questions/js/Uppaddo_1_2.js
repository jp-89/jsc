
function drawTriangleForUpopaddo_1_initialPic(context, x1,y1,x2,y2,x3,y3,extension){
var pointA =  new Point(x1,y1);
var pointB =  new Point(x2,y2);
var pointC =  new Point(x3,y3);
setPointName(pointA,"A");
setPointName(pointB,"B");
setPointName(pointC,"C");

displayPointName(context,pointA,x1,y1-10);
displayPointName(context, pointB,x2-15,y2);
displayPointName(context,pointC,x3+10,y3);


var triangle = new Triangle(pointA,pointB,pointC);
drawTriangle(context, triangle);
var extensionLengeth = 30;
if(extension){
  extensionLengeth = -30;
}
var pointD = PointAtCertainDistance(pointB, pointA, +extensionLengeth);
var pointE = PointAtCertainDistance(pointC, pointA, +extensionLengeth);
setPointName(pointD,"D");
setPointName(pointE,"E");
displayPointName(context,pointD,pointD.x-15,pointD.y);
displayPointName(context,pointE,pointE.x+10,pointD.y);

drawLineBetweenTwoPoints(context,pointD,pointE,"red");



}
function drawTriangleForUpopaddo_1(context, x1,y1,x2,y2,x3,y3,extension){

var pointA =  new Point(x1,y1);
var pointB =  new Point(x2,y2);
var pointC =  new Point(x3,y3);
setPointName(pointA,"A");
setPointName(pointB,"B");
setPointName(pointC,"C");

displayPointName(context,pointA,x1,y1-10);
displayPointName(context, pointB,x2-15,y2);
displayPointName(context,pointC,x3+10,y3);


var triangle = new Triangle(pointA,pointB,pointC);
drawTriangle(context, triangle);
var extensionLengeth = 30;
if(extension){
  extensionLengeth = -30;
}
var pointD = PointAtCertainDistance(pointB, pointA, +extensionLengeth);
var pointE = PointAtCertainDistance(pointC, pointA, +extensionLengeth);
setPointName(pointD,"D");
setPointName(pointE,"E");
displayPointName(context,pointD,pointD.x-15,pointD.y);
displayPointName(context,pointE,pointE.x+10,pointD.y);

drawLineBetweenTwoPoints(context,pointD,pointE,"red");


drawLineBetweenTwoPoints(context,pointB,pointE,"purple");
drawLineBetweenTwoPoints(context,pointC,pointD,"green");

// draw extension
drawLineBetweenTwoPoints(context,pointB,pointD,"green");
drawLineBetweenTwoPoints(context,pointC,pointE,"green");
if(extension){
   displayName(context,pointD.x+25,pointD.y+25,"চিত্র :২");
}
else{
   displayName(context,x2+10,y2+25,"চিত্র :১");
}


}

function drawTriangleForUpopaddo_1Anusidhant2_initial(context, x1,y1,x2,y2,x3,y3){
var pointA =  new Point(x1,y1);
var pointB =  new Point(x2,y2);
var pointC =  new Point(x3,y3);
setPointName(pointA,"A");
setPointName(pointB,"B");
setPointName(pointC,"C");

displayPointName(context,pointA,x1,y1-10);
displayPointName(context, pointB,x2-15,y2);
displayPointName(context,pointC,x3+10,y3);


var triangle = new Triangle(pointA,pointB,pointC);
drawTriangle(context, triangle);
var lineAB = new Line(x1,y1,x2,y2);
var lineAC = new Line(x1,y1,x3,y3);
var midPointAB = new midPointOfLine(lineAB);
var midPointAC = new midPointOfLine(lineAC);
setPointName(midPointAB,"D");
setPointName(midPointAC,"E");
displayPointName(context,midPointAB,midPointAB.x-15,midPointAB.y);
displayPointName(context,midPointAC,midPointAC.x+10,midPointAC.y);
drawLineBetweenTwoPoints(context,midPointAB,midPointAC,"blue");
displayName(context,x2+10,y2+25,"চিত্র :১ ");


}

function drawTriangleForUpopaddo_1Anusidhant2_final(context, x1,y1,x2,y2,x3,y3,extension){

var pointA =  new Point(x1,y1);
var pointB =  new Point(x2,y2);
var pointC =  new Point(x3,y3);
setPointName(pointA,"A");
setPointName(pointB,"B");
setPointName(pointC,"C");

displayPointName(context,pointA,x1,y1-10);
displayPointName(context, pointB,x2-15,y2);
displayPointName(context,pointC,x3+10,y3);


var triangle = new Triangle(pointA,pointB,pointC);
drawTriangle(context, triangle);

var lineAB = new Line(x1,y1,x2,y2);
var lineAC = new Line(x1,y1,x3,y3);
var pointD = new midPointOfLine(lineAB);
var pointE = new midPointOfLine(lineAC);

setPointName(pointD,"D");
setPointName(pointE,"E");
displayPointName(context,pointD,pointD.x-15,pointD.y);
displayPointName(context,pointE,pointE.x+10,pointD.y);

drawLineBetweenTwoPoints(context,pointD,pointE,"red");


drawLineBetweenTwoPoints(context,pointB,pointE,"purple");
drawLineBetweenTwoPoints(context,pointC,pointD,"green");

// draw extension
drawLineBetweenTwoPoints(context,pointB,pointD,"green");
drawLineBetweenTwoPoints(context,pointC,pointE,"green");

   displayName(context,x2+10,y2+25,"চিত্র :২");

}


	
	
	



