
function Higher_Math_chapter_8_3_Q_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3+2,y3+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointD =  perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	var pointE = perpendicularPointOnLineFromAPoint(pointA,pointC,pointB );
	
	drawPoint(context,pointD, "red");
	drawPoint(context,pointE, "red");
	
	setPointName(pointD,"D");
	setPointName(pointE,"E");

	setContextColor(context, "black");
	
	displayPointName(context,pointD,pointD.x-5,pointD.y+20);
	displayPointName(context,pointE,pointE.x+10,pointE.y-5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	drawLineBetweenTwoPoints(context,pointB,pointE,"red");
	

	displayName(context,x2+40,y2+35,"চিত্র :১");	

}

