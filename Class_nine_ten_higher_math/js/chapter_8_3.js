
function chapter_8_3_Q_1_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
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
	
 var angle1 = getAngle(pointA,pointB,pointC)	; 
 var divAnglePointB= getPointAtAnAngle(pointB,-(angle1/2),50);
 ///drawPoint(context,divAnglePointB, "blue");
 
  var angle2 = getAngle(pointA,pointC,pointB); 
 var divAnglePointC= getPointAtAnAngle(pointC,(angle2/2+180),50);
 // drawPoint(context,divAnglePointC, "red"); 

// drawPoint(context,point3, "red");
var linedivAnglePointB = new LineBetweenPoint (pointB,divAnglePointB);
var linedivAnglePointC = new LineBetweenPoint (pointC,divAnglePointC);
 var pointIntersectP = pointOfIntersectionOfTwolIne(linedivAnglePointB, linedivAnglePointC);
 // drawPoint(context,pointIntersectP, "red"); 
  setPointName(pointIntersectP,"P");  
  displayPointName(context,pointIntersectP,pointIntersectP.x,pointIntersectP.y-5);
  
 drawLineBetweenTwoPoints(context,pointB,pointIntersectP,"red");
  drawLineBetweenTwoPoints(context,pointC,pointIntersectP,"red");

	var pointD = PointAtCertainDistance(pointA, pointB, 130);
	drawPoint(context,pointD, "red"); 
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	
	var angle3 = getAngle(pointC,pointB,pointD); 
   var divAnglePointD= getPointAtAnAngle(pointB,-(angle3/2)+130,50);
 //drawPoint(context,divAnglePointD, "green"); 
 
    var pointE = PointAtCertainDistance(pointA, pointC, 150);
	drawPoint(context,pointE, "red"); 
	drawLineBetweenTwoPoints(context,pointC,pointE,"blue");
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+5,pointE.y+5);
	
	var angle4 = getAngle(pointB,pointC,pointE); 
   var divAnglePointE= getPointAtAnAngle(pointC,-(angle4/2)+180,50);
 //drawPoint(context,divAnglePointE, "green"); 
 
	var linedivAnglePointBD = new LineBetweenPoint (pointB,divAnglePointD);
	var linedivAnglePointCE = new LineBetweenPoint (pointC,divAnglePointE);
	var pointIntersectO = pointOfIntersectionOfTwolIne(linedivAnglePointBD, linedivAnglePointCE);
	drawLineBetweenTwoPoints(context,pointB,pointIntersectO,"green");
	drawLineBetweenTwoPoints(context,pointC,pointIntersectO,"green");
 
     setPointName(pointIntersectO,"Q");
     displayPointName(context,pointIntersectO,pointIntersectO.x,pointIntersectO.y+15);
	
	
}
function chapter_8_3_Q_2_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,y1+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-45);
	var pointA= getPointAtForDegree(circle,-115);
	var pointB= getPointAtForDegree(circle,-220);
	var pointC= getPointAtForDegree(circle,-335);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y+20);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	displayPointName(context,pointD,pointD.x,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	
    centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	var lineAC = new LineBetweenPoint(pointA,pointC);
	var lineBD = new LineBetweenPoint(pointB,pointD);
	
	 var pointF = PointAtCertainDistance(pointA, pointD, 135);
	 setPointName(pointF,"F");
     displayPointName(context,pointF,pointF.x-5,pointF.y-5);
	 drawLineBetweenTwoPoints(context,pointF,pointD,"blue");
	 
	 var angle4 = getAngle(pointC,pointD,pointF); 
     var divAnglePointK= getPointAtAnAngle(pointD,-(angle4/2)+90,50);
	 setPointName(divAnglePointK,"K");
	//// drawPoint(context,divAnglePointK , "red");
	//// displayPointName(context,divAnglePointK,divAnglePointK.x-5,divAnglePointK.y-5);
	 
	 
	  var angle5 = getAngle(pointA,pointB,pointC); 
     var divAnglePointM= getPointAtAnAngle(pointB,-(angle5/2),50);
	 setPointName(divAnglePointM,"M");
	//// drawPoint(context,divAnglePointM , "blue");
	//// displayPointName(context,divAnglePointM,divAnglePointM.x-5,divAnglePointM.y-5);
	 
	 
	 var linedivAnglePointDK = new LineBetweenPoint (pointD,divAnglePointK);
	var linedivAnglePointBM = new LineBetweenPoint (pointB,divAnglePointM);
	var pointE = pointOfIntersectionOfTwolIne(linedivAnglePointDK, linedivAnglePointBM);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x+10,pointE.y+10);
	 drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	  drawLineBetweenTwoPoints(context,pointD,divAnglePointK,"blue");
	
	displayName(context,80,160,"চিত্র :১");	
}


function chapter_8_3_Q_4_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "red");	
	
	displayPointName(context,centerO,centerO.x-20,y1+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-245);
	var pointB= getPointAtForDegree(circle,0);
	var pointC= getPointAtForDegree(circle,-105);
	
	var pointE = perpendicularPointOnLineFromAPoint(pointA,pointB,pointC)
	drawLineBetweenTwoPoints(context,pointE,pointC,"red");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointE,"E");
	
	displayPointName(context,pointA,pointA.x-20,pointA.y+10);
	displayPointName(context,pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	displayPointName(context,pointE,pointE.x+8,pointE.y+10);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
		
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,pointC,pointE);
	var pointD = pointCirLineIntersects.pointB;
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	drawLineBetweenTwoPoints(context,pointE,pointD,"red");
	
	displayName(context,80,160,"চিত্র :১");	
}


function chapter_8_3_Q_4_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "red");	
	
	displayPointName(context,centerO,centerO.x-20,y1+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-245);
	var pointB= getPointAtForDegree(circle,0);
	var pointC= getPointAtForDegree(circle,-105);
	
	var pointE = perpendicularPointOnLineFromAPoint(pointA,pointB,pointC)
	drawLineBetweenTwoPoints(context,pointE,pointC,"red");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointE,"E");
	
	displayPointName(context,pointA,pointA.x-20,pointA.y+10);
	displayPointName(context,pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	displayPointName(context,pointE,pointE.x+8,pointE.y+10);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
		
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,pointC,pointE);
	var pointD = pointCirLineIntersects.pointB;
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	drawLineBetweenTwoPoints(context,pointE,pointD,"red");
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointA,"purple");
	
	displayName(context,80,160,"চিত্র :২");	
}


function chapter_8_3_Q_6_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "red");	
	
	displayPointName(context,centerO,centerO.x-20,y1+10);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	var pointA= getPointAtForDegree(circle,-225);
	var pointB= getPointAtForDegree(circle,-315);
	var pointC= getPointAtForDegree(circle,-45);
	var pointD= getPointAtForDegree(circle,-135);

	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-20,pointA.y+10);
	displayPointName(context,pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);
	displayPointName(context,pointD,pointD.x-15,pointD.y+5);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");	
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointC,pointA,"blue");
	
	displayName(context,80,160,"চিত্র :১");	
}



