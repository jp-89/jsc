


function srejonShil_chapter_10_Q_1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth= 130;
	var pointD = PointAtCertainDistance(pointB, pointC, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-2,pointD.y+15);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointC,pointD,"purple");	
	
	displayText2(context,pointB.x+15,pointB.y+15,"60 মিটার");
	displayText2(context,pointC.x+15,pointB.y+15,"x মিটার");
	displayText2(context,pointC.x-25,pointC.y-5,"60");
	displayText2(context,pointD.x-35,pointB.y-5,"45");
}

function srejonShil_chapter_10_Q_2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth= 130;
	var pointD = PointAtCertainDistance(pointB, pointC, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-2,pointD.y+15);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointC,pointD,"purple");	
	
	displayText2(context,pointC.x+15,pointB.y+15,"20 মিটার");
	displayText2(context,pointC.x-25,pointC.y-5,"60");
	displayText2(context,pointD.x-35,pointB.y-5,"30");
}


function srejonShil_chapter_10_Q_3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var distanceCD= distanceBetweenTwoPoints(pointA, pointC);
	var distanceAB= distanceBetweenTwoPoints(pointA, pointB);
	var extensionLengeth = distanceAB+distanceCD;
	var pointD = PointAtCertainDistance(pointB, pointA, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-25,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");	
	
	
	displayText2(context,pointA.x+5,pointA.y+20,"60");
	displayText2(context,pointC.x-35,pointC.y-5,"30");
}

function srejonShil_chapter_10_Q_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var distanceCD= distanceBetweenTwoPoints(pointA, pointC);
	var distanceAB= distanceBetweenTwoPoints(pointA, pointB);
	var extensionLengeth = distanceAB+distanceCD;
	var pointD = PointAtCertainDistance(pointB, pointA, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-25,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");	
	
	var pointE =  new Point(pointA.x,pointA.y+20);
	var pointF =  new Point(pointB.x+30,pointB.y);
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	displayPointName(context,pointF,pointF.x-5,pointF.y+15);
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	displayText2(context,pointF.x-25,pointF.y-5,"60");
	
	displayText2(context,pointA.x+5,pointA.y+20,"60");
	displayText2(context,pointC.x-35,pointC.y-5,"30");
}

function srejonShil_chapter_10_Q_5(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointF =  new Point(pointB.x+40,pointB.y);
	setPointName(pointF,"F");
	
	displayPointName(context,pointF,pointF.x-5,pointF.y+15);
	drawLineBetweenTwoPoints(context,pointA,pointF,"green");
	displayText2(context,pointA.x,pointA.y+30,"α");
	displayText2(context,pointF.x-15,pointF.y-5,"θ");
	displayText2(context,pointC.x-35,pointC.y-5,"30");
}


function srejonShil_chapter_10_Q_6(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	drawPoint(context,pointA, "red");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	//drawTriangle(context, triangle);
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	var extensionLengeth = 160;
	var pointD = PointAtCertainDistance(pointB, pointA, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-25,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");	
	
	var pointE =  new Point(pointB.x,pointB.y-50);
	var pointF =  new Point(pointC.x,pointC.y-50);
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	displayPointName(context,pointF,pointF.x+5,pointF.y+10);
	drawLineBetweenTwoPoints(context,pointC,pointF,"green");
	drawLineBetweenTwoPoints(context,pointD,pointF,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	
	
	displayText2(context,pointF.x-20,pointF.y-3,"30");
	displayText2(context,pointC.x-30,pointC.y-5,"60");
}

function srejonShil_chapter_10_Q_7(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointD =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointD,"D");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointD,pointD.x-15,pointD.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointD,pointB,pointC);
	drawTriangle(context, triangle);
	
	var distanceCA= distanceBetweenTwoPoints(pointD, pointC);
	var distanceDB= distanceBetweenTwoPoints(pointD, pointB);
	var extensionLengeth = distanceDB+distanceCA;
	var pointA = PointAtCertainDistance(pointB, pointD, extensionLengeth);
	setPointName(pointA,"A");
	drawPoint(context,pointA, "red");
	
	displayPointName(context,pointA,pointA.x-25,pointA.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	displayText2(context,pointC.x-35,pointC.y-5,"30");
	
}

function srejonShil_chapter_10_Q_8(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-2,pointC.y+15);
	
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var distanceCD= distanceBetweenTwoPoints(pointA, pointC);
	var distanceAB= distanceBetweenTwoPoints(pointA, pointB);
	var extensionLengeth = distanceAB+distanceCD;
	var pointD = PointAtCertainDistance(pointB, pointA, extensionLengeth);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-25,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointD,"purple");	
	
	
	
	displayText2(context,pointA.x+5,pointA.y+20,"60");
	displayText2(context,pointC.x-35,pointC.y-5,"30");
}













