
function triangleAreaWithPerimeter(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"b");
	displayName(context,pointc.x-15,pointc.y,"c");
	
}
function trigonmetryAngleRelation(context, x1,y1,x2,y2,x3,y3){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
		
}
	
	
