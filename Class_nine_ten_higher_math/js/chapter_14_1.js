function chapter_14_1_Q_1_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	var pointX = midPointBetweenTwoPoint(pointA,pointB );
	var pointY = midPointBetweenTwoPoint(pointA,pointC );
	//drawPoint(context,pointD, "red");
	drawPoint(context,pointX, "red");
	drawPoint(context,pointY, "red");
	setPointName(pointD,"D");
	setPointName(pointX,"X");
	setPointName(pointY,"Y");
	setContextColor(context, "black");
	
	displayPointName(context,pointX,pointX.x-15,pointX.y);
	displayPointName(context,pointY,pointY.x+10,pointY.y);
    drawLineBetweenTwoPoints(context,pointC,pointX,"red");
	drawLineBetweenTwoPoints(context,pointB,pointY,"red");
	drawLineBetweenTwoPoints(context,pointX,pointY,"red");
	displayName(context,x2+40,y2+35,"চিত্র :১");	

}

function chapter_14_1_Q_2_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var lineLength = 150;
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(pointA.x+lineLength,pointA.y);
	var pointC =  new Point(x2,y2);
	var pointD =  new Point(pointC.x+lineLength,pointC.y);
	
	var pointE =  new Point(x3,y3);
	var pointF =  new Point(pointE.x+lineLength,pointE.y);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	
	displayPointName(context,pointC,pointC.x-20,pointC.y+5);
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);
	
	displayPointName(context,pointE,pointE.x-20,pointE.y+5);
	displayPointName(context,pointF,pointF.x+10,pointF.y+5);
	
	 drawLineBetweenTwoPoints(context,pointA,pointB,"red");	 
	 drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	 drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	 var pointP = new Point(pointA.x+15,pointA.y-15);
	 var pointQ = new Point(pointE.x+65,pointE.y+20);
	  drawLineBetweenTwoPoints(context,pointP,pointQ,"blue");
	  setPointName(pointP,"P");
	  setPointName(pointQ,"Q");
	  displayPointName(context,pointP,pointP.x-15,pointP.y+5);
	 displayPointName(context,pointQ,pointQ.x-10,pointQ.y+15);
	 
	  var pointR = new Point(pointB.x-15,pointA.y-15);
	 var pointS = new Point(pointF.x-65,pointF.y+20);
	  drawLineBetweenTwoPoints(context,pointR,pointS,"blue");
	  setPointName(pointR,"R");
	  setPointName(pointS,"S");
	  displayPointName(context,pointR,pointR.x-15,pointR.y+5);
	  displayPointName(context,pointS,pointS.x+5,pointS.y+15);
	 
	  var pointK = pointOfIntersectionOfAxies(pointP.x,pointP.y,pointQ.x,pointQ.y, pointA.x,pointA.y,pointB.x,pointB.y);
	   drawPoint(context,pointK, "red");
	   setPointName(pointK,"K");
	   displayPointName(context,pointK,pointK.x+5,pointK.y-5);
	   
	   var pointL = pointOfIntersectionOfAxies(pointP.x,pointP.y,pointQ.x,pointQ.y, pointC.x,pointC.y,pointD.x,pointD.y);
	   drawPoint(context,pointL, "red");
	   setPointName(pointL,"L");
	   displayPointName(context,pointL,pointL.x-20,pointL.y-5);
	   
	   var pointM = pointOfIntersectionOfAxies(pointP.x,pointP.y,pointQ.x,pointQ.y, pointE.x,pointE.y,pointF.x,pointF.y);
	   drawPoint(context,pointM, "red");
	   
	   setPointName(pointM,"M");
	   displayPointName(context,pointM,pointM.x-20,pointM.y-5);
	   
	   
	    var pointX = pointOfIntersectionOfAxies(pointR.x,pointR.y,pointS.x,pointS.y, pointA.x,pointA.y,pointB.x,pointB.y);
	   drawPoint(context,pointX, "red");
	   setPointName(pointX,"X");
	   displayPointName(context,pointX,pointX.x+5,pointX.y+15);
	   
	   var pointY = pointOfIntersectionOfAxies(pointR.x,pointR.y,pointS.x,pointS.y, pointC.x,pointC.y,pointD.x,pointD.y);
	   drawPoint(context,pointY, "red");
	   setPointName(pointY,"Y");
	   displayPointName(context,pointY,pointY.x+8,pointY.y-5);
	   
	   var pointZ = pointOfIntersectionOfAxies(pointR.x,pointR.y,pointS.x,pointS.y, pointE.x,pointE.y,pointF.x,pointF.y);
	   drawPoint(context,pointZ, "red");
	   setPointName(pointZ,"Z");
	   displayPointName(context,pointZ,pointZ.x+8,pointZ.y-5);
	   
	   
	   drawLineBetweenTwoPoints(context,pointK,pointZ,"green");
	   
	   var pointT = pointOfIntersectionOfAxies(pointK.x,pointK.y,pointZ.x,pointZ.y, pointC.x,pointC.y,pointD.x,pointD.y);
	   drawPoint(context,pointT, "red");
	   setPointName(pointT,"T");
	   displayPointName(context,pointT,pointT.x,pointT.y-5);
	   
	   }
	   
	   
	function chapter_14_1_Q_3_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	var pointE = pointOfIntersectionOfAxies(pointA.x,pointA.y,pointC.x,pointC.y, pointB.x,pointB.y,pointD.x,pointD.y);
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x-5,pointE.y+16);
	
}

	   
	 function chapter_14_1_Q_4_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	
	
	var pointE = midPointBetweenTwoPoint(pointA,pointD );
	var pointF = midPointBetweenTwoPoint(pointB,pointC );
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	displayPointName(context,pointF,pointF.x+10,pointF.y+5);
	 drawPoint(context,pointE, "red");
	  drawPoint(context,pointF, "red");
	
	displayName(context,pointD.x+40,pointD.y+35,"চিত্র :১");	
	
}
function chapter_14_1_Q_4_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	
	 var pointP = pointOfIntersectionOfAxies(pointA.x,pointA.y,pointD.x,pointD.y, pointB.x,pointB.y,pointC.x,pointC.y);
	drawLineBetweenTwoPoints(context,pointA,pointP,"green");
	drawLineBetweenTwoPoints(context,pointB,pointP,"green");
	setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x,pointP.y-5);
	
	var pointE = midPointBetweenTwoPoint(pointA,pointD );
	var pointF = midPointBetweenTwoPoint(pointB,pointC );
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	displayPointName(context,pointF,pointF.x+10,pointF.y+5);
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	displayName(context,pointD.x+40,pointD.y+35,"চিত্র :২");	
	
}


function chapter_14_1_Q_5_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	var pointE = midPointBetweenTwoPoint(pointA,pointC );
	var pointM = midPointBetweenTwoPoint(pointA,pointB );
	drawPoint(context,pointD, "red");
	drawPoint(context,pointE, "red");
	drawPoint(context,pointM, "red");
	setPointName(pointD,"D");
	setPointName(pointE,"E");
	setPointName(pointM,"M");
	setContextColor(context, "black");
	
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	displayPointName(context,pointE,pointE.x+10,pointE.y);
	
	drawLineBetweenTwoPoints(context,pointA,pointD,"green");
	drawLineBetweenTwoPoints(context,pointB,pointE,"green");
	drawLineBetweenTwoPoints(context,pointD,pointE,"green");
	var lineBE = new LineBetweenPoint(pointE,pointB);
	var lineCM = new LineBetweenPoint(pointC,pointM);
	var pointG = pointOfIntersectionOfTwolIne(lineCM, lineBE);
	setPointName(pointG,"G");
	drawPoint(context,pointG, "purple");
	displayPointName(context,pointG,pointG.x-20,pointG.y);
	var lineDE = new LineBetweenPoint(pointD,pointE);
	var lineDC = new LineBetweenPoint(pointD,pointC);
	var angle = angleBetweenLine(lineDE,lineDC)
     var parallelLine= getParallelLine(lineDE,lineDC,20,false);
	  var lineAC = new LineBetweenPoint(pointA,pointC);
	  var pointF = pointOfIntersectionOfTwolIne(parallelLine, lineAC);
	  drawPoint(context,pointF, "purple");
	  setPointName(pointF,"F");
	  displayPointName(context,pointF,pointF.x+5,pointF.y);
	  drawLineBetweenTwoPoints(context,pointG,pointF,"green");
	displayName(context,x2+40,y2+35,"চিত্র :১");	

}

function chapter_14_1_Q_6_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	
	var pointX =  new Point(pointC.x-35,pointC.y);
	drawPoint(context,pointX, "red");
	setPointName(pointX,"X");
	setContextColor(context, "black");
	displayPointName(context,pointX,pointX.x,pointX.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointX,"green");
	
	var pointO =  PointAtCertainDistance(pointA, pointX, 60);
	drawPoint(context,pointO, "red");
	setPointName(pointO,"O");
	setContextColor(context, "black");
	displayPointName(context,pointO,pointO.x-20,pointO.y+5);
	var pointQ = perpendicularPointOnLineFromAPoint(pointB,pointC,pointO);
	drawPoint(context,pointQ, "red");
	setPointName(pointQ,"Q");
	setContextColor(context, "black");
	displayPointName(context,pointQ,pointQ.x,pointQ.y+20);
	drawLineBetweenTwoPoints(context,pointO,pointQ,"green")
	
	
	var pointP = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	
	drawPoint(context,pointP, "red");
	setPointName(pointP,"P");
	setContextColor(context, "black");
	displayPointName(context,pointP,pointP.x,pointP.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointP,"green");
	drawLineBetweenTwoPoints(context,pointO,pointB,"red");
	drawLineBetweenTwoPoints(context,pointO,pointC,"red");
	displayName(context,x2+40,y2+35,"চিত্র :১");
}


function chapter_14_1_Q_7_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	var pointE = midPointBetweenTwoPoint(pointA,pointB );
	var pointF = midPointBetweenTwoPoint(pointA,pointC );
	drawPoint(context,pointD, "red");
	drawPoint(context,pointE, "red");
	drawPoint(context,pointF, "red");
	setPointName(pointD,"D");
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setContextColor(context, "black");
	
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	displayPointName(context,pointE,pointE.x-15,pointE.y);	 
	displayPointName(context,pointF,pointF.x+5,pointF.y);	
	drawLineBetweenTwoPoints(context,pointA,pointD,"green");
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	
	displayName(context,x2+40,y2+35,"চিত্র :১");	

}

function chapter_14_1_Q_8_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-10,y2+20);
	displayPointName(context,pointC,x3,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointM = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	drawPoint(context,pointM, "red");	
	setPointName(pointM,"M");
	setContextColor(context, "black");
        displayPointName(context,pointM,pointM.x,pointM.y+20);	
	
	drawLineBetweenTwoPoints(context,pointA,pointM,"green");
	displayName(context,x2+40,y2+40,"চিত্র :১");	

}
function chapter_14_1_Q_8_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"D");
	setPointName(pointB,"E");
	setPointName(pointC,"F");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-10,y2+20);
	displayPointName(context,pointC,x3,y3+20);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointM = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	drawPoint(context,pointM, "red");	
	setPointName(pointM,"N");
	setContextColor(context, "black");
        displayPointName(context,pointM,pointM.x,pointM.y+20);	
	
	drawLineBetweenTwoPoints(context,pointA,pointM,"green");
	displayName(context,x2+40,y2+40,"চিত্র :১");	

}







