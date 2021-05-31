
function chapter10_Q_1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = increaseLength;
	}
	
	var pointD = new Point(x3+extensionLengeth,y3);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	 writeRotatedText2(context,"20 meter",pointA,pointA.x+15,pointA.y-30,  Math.PI/5);
	
    writeAngle(context,pointC.x-40,pointC.y-5,"60");
	writeAngle(context,pointD.x-60,pointD.y-5,"30");
	displayName(context,x2+50,y2+30,"চিত্র :১");

}

function chapter10_Q_2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointO =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	setPointName(pointO,"O");
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	

	displayPointName(context,pointO,x1,y1-5);
	displayPointName(context, pointA,x2-15,y2+15);
	displayPointName(context,pointB,x3+10,y3+15);

	var triangle = new Triangle(pointO,pointA,pointB);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = increaseLength;
	}
	
	var pointD = new Point(x1-55,y1);
	var pointE = new Point(x1+extensionLengeth,y1);
	var pointP = new Point(pointA.x+32,pointA.y);
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	
	setPointName(pointD,"D");
	setPointName(pointE,"E");
	setPointName(pointP,"P");
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	displayPointName(context,pointE,pointE.x-5,pointE.y-5);
	displayPointName(context,pointP,pointP.x,pointP.y+15);

	drawLineBetweenTwoPoints(context,pointO,pointP,"red");
	
	//drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	// writeRotatedText2(context,"20 meter",pointA,pointA.x+15,pointA.y-30,  Math.PI/5);
	
    writeAngle(context,pointO.x-30,pointO.y+15,"60");
	writeAngle(context,pointO.x+35,pointO.y+15,"30");
	writeAngle(context,pointA.x+5,pointA.y-3,"60");
	writeAngle(context,pointB.x-50,pointB.y-2,"30");
	displayName(context,x2+50,y2+30,"চিত্র :১");

}

function chapter10_Q_3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointO =  new Point(x1,y1);
	var pointX_ =  new Point(x2,y2);
	var pointX =  new Point(x3,y3);
	var pointP_ =  new Point(pointX_.x,pointX_.y-50);
	var pointP =  new Point(pointX.x,pointX.y-50);
	
	setPointName(pointO,"O");
	setPointName(pointX_,"X'");
	setPointName(pointX,"X");
	setPointName(pointP_,"P'");
	setPointName(pointP,"P");
	displayPointName(context,pointO,pointO.x,pointO.y+15);
	displayPointName(context, pointX_,pointX_.x-15,pointX_.y+15);
	displayPointName(context,pointX,pointX.x+10,pointX.y+15);
	displayPointName(context, pointP_,pointP_.x-15,pointP_.y);
	displayPointName(context, pointP,pointP.x+5,pointP.y);
	drawLineBetweenTwoPoints(context,pointX_,pointX,"red");
	drawLineBetweenTwoPoints(context,pointP_,pointO,"blue");
	drawLineBetweenTwoPoints(context,pointP,pointO,"blue");

}

function chapter10_Q_5_6(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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

	// writeRotatedText2(context,"20 meter",pointA,pointA.x+15,pointA.y-30,  Math.PI/5);
	
    writeAngle(context,pointC.x-40,pointC.y-5,"60");
	
	displayName(context,pointC.x-25,pointC.y-50,"৪ মিটার ");

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


function chapter10_Q_7(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}	
	
	writeRotatedText2(context,"26 মিটার ",pointB,pointB.x-10,pointB.y-150, -Math.PI/2);
	writeAngle(context,pointC.x-40,pointC.y-3,"30");

}

function chapter10_Q_8(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}	

	writeAngle(context,pointC.x-40,pointC.y-3,"60");
	displayText(context,pointB.x+20,pointB.y+20,"20 মিটার ");


}


function chapter10_Q_9(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	
	var pointD = new Point(x1+130,y1);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x+10,pointD.y);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	writeRotatedText2(context,"18 মিটার ",pointA,pointA.x+40,pointA.y-40, Math.PI/5);
	
	writeAngle(context,pointC.x-40,pointC.y-3,"45");
	displayName(context,x2+10,y2+35,"চিত্র :১");

}

function chapter10_Q_10(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	
	var pointD = new Point(x1+130,y1);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x+10,pointD.y);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	writeRotatedText2(context,"20 মিটার ",pointA,pointA.x+40,pointA.y-40, Math.PI/5);
	
	writeAngle(context,pointA.x+20,pointA.y+15,"30");
	writeAngle(context,pointC.x-40,pointC.y-3,"30");

	displayName(context,x2+10,y2+35,"চিত্র :১");

}


function chapter10_Q_11(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-10,y2+15);
	displayPointName(context,pointC,x3+5,y3+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	
	var pointD = new Point(pointB.x+55,pointB.y);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	//writeRotatedText2(context,"18 মিটার ",pointA,pointA.x+40,pointA.y-40, Math.PI/5);
	
	writeAngle(context,pointC.x-40,pointC.y-3,"30");
	writeAngle(context,pointD.x-30,pointD.y-3,"60");
	displayName(context,x2+10,y2+35,"চিত্র :১");

}
function chapter10_Q_12(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-10,y2+15);
	displayPointName(context,pointC,x3+5,y3+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	
	var pointD = new Point(pointB.x+55,pointB.y);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	//writeRotatedText2(context,"18 মিটার ",pointA,pointA.x+40,pointA.y-40, Math.PI/5);
	
	writeAngle(context,pointC.x-40,pointC.y-3,"45");
	writeAngle(context,pointD.x-30,pointD.y-3,"60");
	displayName(context,x2+10,y2+35,"চিত্র :১");

}


function chapter10_Q_13(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-10,y2+15);
	displayPointName(context,pointC,x3+5,y3+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}
	
	var pointD = new Point(pointB.x+55,pointB.y);
	
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);

	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	//writeRotatedText2(context,"18 মিটার ",pointA,pointA.x+40,pointA.y-40, Math.PI/5);
	
	writeAngle(context,pointC.x-40,pointC.y-3,"30");
	writeAngle(context,pointD.x-30,pointD.y-3,"60");
	displayName(context,x2+10,y2+35,"চিত্র :১");
	

}

function chapter10_Q_14(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}	
	var distanceAC = distanceBetweenTwoPoints(pointA, pointC);
	var pointD = PointAtCertainDistance(pointA, pointB, -distanceAC+10);
	 drawPoint(context,pointD, "blue");
	 setPointName(pointD,"D");
	 displayPointName(context,pointD,pointD.x-20,pointD.y+5);
	 drawLineBetweenTwoPoints(context,pointA,pointD,"red");

	writeAngle(context,pointC.x-40,pointC.y-3,"60");
	//displayText2(context,pointB.x+10,pointB.y+20,"20 মিটার ");


}

function chapter10_Q_15(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth = increaseLength;
	if(extension){
	  extensionLengeth = -increaseLength;
	}	
	var distanceAC = distanceBetweenTwoPoints(pointA, pointC);
	var pointD = PointAtCertainDistance(pointA, pointB, -distanceAC+10);
	 drawPoint(context,pointD, "blue");
	 setPointName(pointD,"D");
	 displayPointName(context,pointD,pointD.x-20,pointD.y+5);
	 drawLineBetweenTwoPoints(context,pointA,pointD,"red");

	writeAngle(context,pointC.x-40,pointC.y-3,"60");
	writeAngle(context,pointA.x+2,pointA.y+25,"30");
	displayText2(context,pointB.x+10,pointB.y+20,"12 মিটার ");


}



function chapter10_Q_16(context, x1,y1,x2,y2,x3,y3,x4,y4){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	
	
	
	var distance= 70;
	var pointH= PointAtCertainDistance(pointA, pointD, -distance);
	var pointO= PointAtCertainDistance(pointA, pointD, -distance/2);
	var pointG= PointAtCertainDistance(pointB, pointC, -distance);
	

	drawLineBetweenTwoPoints(context,pointA,pointE,"green");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointB,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointH,"red");
	drawLineBetweenTwoPoints(context,pointB,pointO,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(pointO,"O");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+5,pointB.y+8);
	displayPointName(context,pointO,pointO.x-20,pointO.y+5);

	setPointName(pointE,"E");
	
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayText2(context,pointB.x-30,pointB.y-3,"30");
	
	

}


	
	
	



