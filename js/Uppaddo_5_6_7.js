
function drawTriangleForUpopaddo_5_6_7_FirstPic(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	var pointP = PointAtCertainDistance(pointB, pointA, +extensionLengeth);
	var pointQ = PointAtCertainDistance(pointC, pointA, +extensionLengeth);
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-15,pointP.y);
	displayPointName(context,pointQ,pointQ.x+10,pointQ.y);

	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");

	

	displayName(context,x2+10,y2+35,"চিত্র :১");

}
function drawTriangleForUpopaddo_5_6_7_SecondPic(context, x1,y1,x2,y2,x3,y3,extension){

var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-15,y2);
	displayPointName(context,pointC,x3+10,y3);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

	

	displayName(context,x2+10,y2+35,"চিত্র :২");

}
	
	
	



