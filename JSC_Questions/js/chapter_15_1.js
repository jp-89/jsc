

function chapter_15_1_Q_1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	
	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");
	displayName(context,pointB.x+35,pointB.y+20,"ভূমি ");
	// display angle
	//displayName(context,centerO.x+30,centerO.y-2,"76");
	var rotatePoint = new Point(pointA.x+25,pointA.y+20);
	writeRotatedText(context,"অতিভূজ",pointA,+35,-5,Math.PI/8);
	
	rotatePoint = new Point(pointB.x+25,pointB.y+20);
	writeRotatedText(context,"লম্ব",pointB,+45,-20,-Math.PI/2);	
		
}
function chapter_15_1_Q_3_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	
	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	
	var pointE = midPointBetweenTwoPoint(pointB,pointA );
	displayText(context,pointE.x-20,pointE.y,"2");
		
}


function chapter_15_1_Q_5(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	var pointO = midPointBetweenTwoPoint(pointA,pointC );
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(pointO,"O");

    displayPointName(context,pointA,pointA.x-10,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	displayPointName(context,pointO,pointO.x-5,pointO.y+20);	
	
	
}

function chapter_15_1_Q_6(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");

    displayPointName(context,pointA,pointA.x-10,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);

	
}

function chapter_15_1_Q_7(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	drawLineBetweenTwoPoints(context,pointA,pointa,"green");
	var perpendiE = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(perpendiE,"E");
	drawLineBetweenTwoPoints(context,pointA,perpendiE,"red");
	
	displayName(context,pointa.x,pointa.y+15,"D");
	displayName(context,perpendiE.x,perpendiE.y+15,"E");
	
	
}

function chapter_15_1_Q_8(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointD =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	var pointC =  new Point(x4,y4);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);

	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	

    displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	var perpendiG = perpendicularPointOnLineFromAPoint(pointC,pointD,pointB);
	drawLineBetweenTwoPoints(context,pointB,perpendiG,"red");
	setPointName(perpendiG,"G");
   displayPointName(context,perpendiG,perpendiG.x-5,perpendiG.y-5);
	
	
	var perpendiH = perpendicularPointOnLineFromAPoint(pointC,pointD,pointA);
	drawLineBetweenTwoPoints(context,pointA,perpendiH,"red");
	drawLineBetweenTwoPoints(context,pointD,perpendiH,"red");
	setPointName(perpendiH,"H");
   displayPointName(context,perpendiH,perpendiH.x-5,perpendiH.y-5);
	
}

function chapter_15_1_Q_9(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	
	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");
	//var pointD = midPointBetweenTwoPoint(pointB,pointC );
	//setPointName(pointD,"D");
	//displayPointName(context,pointD,pointD.x,pointD.y+15);
	//drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	
	var pointX = midPointBetweenTwoPoint(pointA,pointB );
     setPointName(pointX,"X");	
	displayPointName(context,pointX,pointX.x-15,pointX.y);
	
	var pointY = midPointBetweenTwoPoint(pointC,pointA );
	setPointName(pointY,"Y");
	displayPointName(context,pointY,pointY.x+5,pointY.y);
	
	drawLineBetweenTwoPoints(context,pointX,pointY,"red");
	drawLineBetweenTwoPoints(context,pointX,pointC,"red");
	
		
}

function chapter_15_1_Q_10(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointD =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	var pointC =  new Point(x4,y4);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);

	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	

    displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	var perpendiM = perpendicularPointOnLineFromAPoint(pointA,pointB,pointC);
	drawLineBetweenTwoPoints(context,pointC,perpendiM,"red");
	setPointName(perpendiM,"M");
   displayPointName(context,perpendiM,perpendiM.x-10,perpendiM.y+15);
	
	
	var perpendiL = perpendicularPointOnLineFromAPoint(pointC,pointD,pointA);
	drawLineBetweenTwoPoints(context,pointA,perpendiL,"red");
	drawLineBetweenTwoPoints(context,pointD,perpendiL,"red");
	setPointName(perpendiL,"L");
   displayPointName(context,perpendiL,perpendiL.x-5,perpendiL.y-5);
	
}


function chapter_15_1_Q_11(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointD =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	var pointC =  new Point(x4,y4);
	var pointP =  new Point(pointA.x+50,pointA.y-30);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
    drawPoint(context,pointP,"purple");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(pointP,"P");
	

    displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	displayPointName(context,pointP,pointP.x+12,pointP.y+7);
	drawLineBetweenTwoPoints(context,pointA,pointP,"red");
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	drawLineBetweenTwoPoints(context,pointC,pointP,"red");
	drawLineBetweenTwoPoints(context,pointD,pointP,"red");
	//drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	//drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	
	
	var perpendiF = perpendicularPointOnLineFromAPoint(pointA,pointB,pointP);
	drawLineBetweenTwoPoints(context,pointP,perpendiF,"#228B22");
	setPointName(perpendiF,"F");
   displayPointName(context,perpendiF,perpendiF.x-5,perpendiF.y+15);
	
	
	var perpendiE = perpendicularPointOnLineFromAPoint(pointC,pointD,pointP);
	drawLineBetweenTwoPoints(context,pointP,perpendiE,"#228B22");
	setPointName(perpendiE,"E");
   displayPointName(context,perpendiE,perpendiE.x-5,perpendiE.y-5);
}



function chapter_15_1_Q_12_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointB );
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointF = midPointBetweenTwoPoint(pointC,pointA );
	setPointName(pointF,"F");
	displayPointName(context,pointF,pointF.x+5,pointF.y);
	drawLineBetweenTwoPoints(context,pointD,pointF,"red");
		
}

function chapter_15_1_Q_12_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointB );
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointF = midPointBetweenTwoPoint(pointC,pointA );
	setPointName(pointF,"F");
	displayPointName(context,pointF,pointF.x+5,pointF.y);
	drawLineBetweenTwoPoints(context,pointD,pointF,"red");
    drawLineBetweenTwoPoints(context,pointD,pointC,"green");
   drawLineBetweenTwoPoints(context,pointF,pointB,"orange");	
}


function chapter_15_1_Q_13_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-10);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointC );
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x-15,pointD.y);	
	
	drawLineBetweenTwoPoints(context,pointD,pointB,"red");
		
}


function chapter_15_1_Q_14_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD =  perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x,pointD.y+14);	
	
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
		
}


function chapter_15_1_Q_15_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-10);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointP = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointP,"P");	
	displayPointName(context,pointP,pointP.x+15,pointP.y);	
	
	drawLineBetweenTwoPoints(context,pointP,pointA,"green");
		
}


function chapter_15_1_Q_16_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD =  perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x,pointD.y+14);	
	
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointD,pointC,"red");
		
}


function chapter_15_1_Q_17_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD =  perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x,pointD.y+14);	
	
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
		
}

function chapter_15_1_Q_18_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	
     setPointName(pointD,"D");	
	displayPointName(context,pointD,pointD.x,pointD.y+14);	
	
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	var pointP =  perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	 setPointName(pointP,"P");	
	displayPointName(context,pointP,pointP.x,pointP.y+14);	
	drawLineBetweenTwoPoints(context,pointA,pointP,"red");
		
}

