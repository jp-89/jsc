

function srejonShil_chapter_9_Q_2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-15,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var angleab_bc= getAngle(pointA,pointB,pointC);
	var anglebc_ca= getAngle(pointB,pointC,pointA);
	var anglePointE = getPointAtAnAngle(pointB,-angleab_bc/2,20);
	var anglePointF = getPointAtAnAngle(pointC,-180+anglebc_ca/2,20);
	//drawPoint(context,anglePointE, "blue");
	//drawPoint(context,anglePointF, "blue");
	
	var lineBE = new LineBetweenPoint (anglePointE,pointB);
	var lineCF = new LineBetweenPoint (anglePointF,pointC);
	var centerO = pointOfIntersectionOfTwolIne(lineBE, lineCF);
	drawPoint(context,centerO, "red");
	var perpendPoint = perpendicularPointOnLineFromAPoint(pointA,pointC,centerO);
	var radius= distanceBetweenTwoPoints(centerO, perpendPoint);
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");
	drawLineBetweenTwoPoints(context,centerO,perpendPoint,"red");
	
	displayText2(context,centerO.x+1,centerO.y-8,"r");
	
	
}

function srejonShil_chapter_9_Q_3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"O");

	displayPointName(context,pointA,pointA.x-15,pointA.y-5);
	displayPointName(context, pointB,pointB.x+5,pointB.y+20);
	displayPointName(context,pointC,pointC.x-15,pointC.y+20);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	
	
	displayText2(context,pointC.x+20,pointC.y-5,"θ");
	displayText2(context,pointC.x+40,pointC.y+15,"x");
	displayText2(context,pointB.x+5,pointC.y-35,"y");
	
	
}

function srejonShil_chapter_9_Q_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointC =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y-8);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);

	
	displayText2(context,pointA.x-35,pointA.y-5,"x-y");
	displayText2(context,pointC.x+5,pointC.y+35,"x+y");
	displayText2(context,pointB.x+25,pointB.y+15,"√3");
	displayText2(context,pointB.x-10,pointB.y-25,"1");
	
	
}

function srejonShil_chapter_9_Q_5(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y-15);
	displayPointName(context, pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);

	displayText2(context,pointC.x-25,pointC.y-5,"θ");
	displayText2(context,pointB.x+25,pointB.y+15,"√3");
	displayText2(context,pointB.x-10,pointB.y-25,"1");	
	
}

function srejonShil_chapter_9_Q_5_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointP =  new Point(x1,y1);
	var pointQ =  new Point(x2,y2);
	var pointR =  new Point(x3,y3);
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	setPointName(pointR,"R");

	displayPointName(context,pointP,pointP.x-5,pointP.y-10);
	displayPointName(context, pointQ,pointQ.x-15,pointQ.y+15);
	displayPointName(context,pointR,pointR.x-2,pointR.y+15);
	
	
	var triangle = new Triangle(pointP,pointQ,pointR);
	drawTriangle(context, triangle);

	
	displayText2(context,pointP.x+5,pointP.y+35,"x-y");
	displayText2(context,pointR.x-40,pointR.y-10,"x+y");
	displayText2(context,pointQ.x+25,pointQ.y+15,"2");
	displayText2(context,pointQ.x-30,pointQ.y-30,"2√3");
	
	
}

function srejonShil_chapter_9_Q_7(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context, pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointA,pointA.x-2,pointA.y-8);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);

	
	displayText2(context,pointC.x-35,pointC.y-5,"30");
	displayText2(context,pointA.x+5,pointA.y+25,"θ");
	displayText2(context,pointB.x+25,pointB.y+15,"√3");	
	
}

function srejonShil_chapter_9_Q_8(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context, pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointA,pointA.x-2,pointA.y-8);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);

	
	displayText2(context,pointC.x-35,pointC.y-5,"θ");
	displayText2(context,pointA.x+5,pointA.y+25,"α");
	displayText2(context,pointB.x+35,pointB.y+15,"1");
	displayText2(context,pointB.x-10,pointB.y-35,"1");
	
}











