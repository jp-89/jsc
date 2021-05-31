
function chapter_14_2_Q_2_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+20);
	displayPointName(context,pointC,pointC.x-10,pointC.y+20);
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	writeRotatedText3(context,5,pointB,pointB.x,pointB.y-100, -Math.PI/3);
	writeRotatedText3(context,10,pointC,pointC.x+50,pointC.y+50, -Math.PI/4);
	writeRotatedText3(context,8,pointA,pointA.x-35,pointA.y+10, -Math.PI/4);
	displayText2(context,pointD.x+25,pointD.y+15,"10");
	//displayName(context,pointB.x+20,pointB.y+25,"চিত্র :১");	

}

function chapter_14_2_Q_6_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"G");
	setPointName(pointB,"H");
	setPointName(pointC,"K");

	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context, pointB,pointB.x-10,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	displayName(context,pointB.x+20,pointB.y+25,"চিত্র :১");	

}

function chapter_14_2_Q_6_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context, pointB,pointB.x-10,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	displayName(context,pointB.x+20,pointB.y+25,"চিত্র :২");	

}

function chapter_14_2_Q_6_pic3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context, pointB,pointB.x-10,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	displayName(context,pointB.x+20,pointB.y+25,"চিত্র :৩");	

}

function chapter_14_2_Q_7_pic1(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y-8);
	displayPointName(context, pointB,pointB.x,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

		
	displayName(context,x2+20,y2+35,"চিত্র :১");

}

function chapter_14_2_Q_7_pic2(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,pointA.x-5,pointA.y-8);
	displayPointName(context, pointB,pointB.x,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

		
	displayName(context,x2+20,y2+35,"চিত্র :২");

}





function chapter_14_2_Q_8_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3+10,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointD = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x-5,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	displayName(context,x2+40,y2+35,"চিত্র :১");	

}

function chapter_14_2_Q_9_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointD =  new Point(x3,y3);
	var pointC =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context, pointB,x2-5,y2+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);

	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	var lineBD= LineBetweenPoint(pointB,pointD);
	var lineAC= LineBetweenPoint(pointA,pointC);
	var pointL = pointOfIntersectionOfTwolIne(lineBD, lineAC);
	setPointName(pointL,"L");
	displayPointName(context,pointL,pointL.x-5,pointL.y-5);

	

	displayName(context,x2+40,y2+35,"চিত্র :১");	

}


function chapter_14_2_Q_13_pic1(context, x1,y1,x2,y2,x3,y3,extension){

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
	var pointE = PointAtCertainDistance(pointB, pointA, distance*2);
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x-10,pointE.y-5);

	drawLineBetweenTwoPoints(context,pointC,pointE,"red")
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	displayName(context,x2+10,y2+35,"চিত্র :১");

}

function chapter_14_2_Q_13_pic2(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1-15,y1-8);
	displayPointName(context, pointB,x2-15,y2+5);
	displayPointName(context,pointC,x3+5,y3+5);

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
	var pointP = PointAtCertainDistance(pointB, pointA, 30);
	var pointQ = PointAtCertainDistance(pointC, pointA, 28);
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-15,pointP.y+3);
	displayPointName(context,pointQ,pointQ.x+5,pointQ.y+3);

	drawLineBetweenTwoPoints(context,pointP,pointQ,"red")
	displayName(context,x2+10,y2+35,"চিত্র :২");

}

function chapter_14_2_Q_14_pic1(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y-8);
	displayPointName(context, pointB,pointB.x,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

	var pointD = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	var lineBC = new Line(x2,y2,x3,y3);
	setPointName(pointD,"M");
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red")
	
	displayName(context,x2+20,y2+35,"চিত্র :১");

}

function chapter_14_2_Q_14_pic2(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,pointA.x-5,pointA.y-8);
	displayPointName(context, pointB,pointB.x,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

	var pointD = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	var lineBC = new Line(x2,y2,x3,y3);
	setPointName(pointD,"N");
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red")
	
	displayName(context,x2+25,y2+35,"চিত্র :২");

}

function chapter_14_2_Q_14_pic3(context, x1,y1,x2,y2,x3,y3,extension){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,pointA.x-5,pointA.y-8);
	displayPointName(context, pointB,pointB.x,pointB.y+20);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = 30;
	if(extension){
	  extensionLengeth = -30;
	}

	var pointD = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	var lineBC = new Line(x2,y2,x3,y3);
	setPointName(pointD,"N");
	//displayPointName(context,pointD,pointD.x,pointD.y+20);
	//drawLineBetweenTwoPoints(context,pointA,pointD,"red")
	
	displayName(context,x2+25,y2+35,"চিত্র :৩");

}




