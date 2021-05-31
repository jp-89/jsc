
function drawTriangleForUpopaddo_3_4_initialPic(context, x1,y1,x2,y2,x3,y3,extension){
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

	var lineBC = new Line(x2,y2,x3,y3);
	var midPointBC = new midPointOfLine(lineBC);
	setPointName(midPointBC,"D");
	displayPointName(context,midPointBC,midPointBC.x,midPointBC.y+20);
	drawLineBetweenTwoPoints(context,pointA,midPointBC,"red");

	displayName(context,x2+10,y2+35,"চিত্র :১");

}
function drawTriangleForUpopaddo_3_4_final(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1-15,y1-8);
	displayPointName(context, pointB,x2-15,y2);
	displayPointName(context,pointC,x3+10,y3);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

	var lineBC = new Line(x2,y2,x3,y3);
	var midPointBC = new midPointOfLine(lineBC);
	setPointName(midPointBC,"D");
	displayPointName(context,midPointBC,midPointBC.x,midPointBC.y+20);
	drawLineBetweenTwoPoints(context,pointA,midPointBC,"red")
	var distance = distanceBetweenTwoPoints(pointA, pointB);
	var pointP = PointAtCertainDistance(pointB, pointA, distance*2);
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x-10,pointE.y-5);

	drawLineBetweenTwoPoints(context,pointC,pointE,"red")
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	displayName(context,x2+10,y2+35,"চিত্র :২");

}
	
	
	



