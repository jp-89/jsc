
function chapter_8_4_Q_1_pic1(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 55;
	displayPointName(context,centerO,centerO.x-15,centerO.y);	
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	drawPoint(context,centerO,"blue");
	
   var tangentSourcePoint = new Point(circle.centerX+circle.radius+circle.radius+20,circle.centerY);
    setPointName(tangentSourcePoint,"P");
	drawPoint(context,tangentSourcePoint,"blue");
	displayPointName(context,tangentSourcePoint,tangentSourcePoint.x-5,tangentSourcePoint.y-5);
	
	
	var tangentPoints = getTangentPoint(circle, tangentSourcePoint);
	var  tangentPointB =  new Point(tangentPoints.x1,tangentPoints.y1);
	var  tangentPointA =  new Point(tangentPoints.x2,tangentPoints.y2);
	drawPoint(context,tangentPointA,"blue");
	drawPoint(context,tangentPointB,"blue");
	setPointName(tangentPointA,"A");
	setPointName(tangentPointB,"B");
	displayPointName(context,tangentPointA,tangentPointA.x-5,tangentPointA.y-5);
	displayPointName(context,tangentPointB,tangentPointB.x-5,tangentPointB.y+20);
	
	 drawLineBetweenTwoPoints(context,tangentPointA,tangentSourcePoint,"red");
	  drawLineBetweenTwoPoints(context,tangentPointB,tangentSourcePoint,"red");
	  var tangentPointExtA = PointAtCertainDistance(tangentPointA, tangentSourcePoint, -50);
	    var tangentPointExtB = PointAtCertainDistance(tangentPointB, tangentSourcePoint, -50);
		drawPoint(context,tangentPointExtA,"blue");
		drawPoint(context,tangentPointExtB,"blue");
		drawLineBetweenTwoPoints(context,tangentPointExtA,tangentSourcePoint,"red");
		drawLineBetweenTwoPoints(context,tangentPointExtB,tangentSourcePoint,"red");
		
		drawLineBetweenTwoPoints(context,tangentPointA,centerO,"red");
		drawLineBetweenTwoPoints(context,tangentPointB,centerO,"red");
		drawLineBetweenTwoPoints(context,tangentPointA,tangentPointB,"red");
		drawLineBetweenTwoPoints(context,centerO,tangentSourcePoint,"red");
		
		var pointE = midPointBetweenTwoPoint(tangentPointA,tangentPointB );
	       drawPoint(context,pointE,"blue");
		setPointName(pointE,"E");
		   displayPointName(context,pointE,pointE.x+5,pointE.y+15);		   

}


function chapter_8_4_Q_2_pic1(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 55;
	displayPointName(context,centerO,centerO.x-15,centerO.y);	
	var circle =  new Circle(centerO,radius);
	
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	drawPoint(context,centerO,"blue");
	
   var tangentSourcePoint = new Point(circle.centerX+circle.radius+circle.radius+20,circle.centerY);
    setPointName(tangentSourcePoint,"P");
	drawPoint(context,tangentSourcePoint,"blue");
	displayPointName(context,tangentSourcePoint,tangentSourcePoint.x-5,tangentSourcePoint.y-5);
	
	
	var tangentPoints = getTangentPoint(circle, tangentSourcePoint);
	var  tangentPointB =  new Point(tangentPoints.x1,tangentPoints.y1);
	var  tangentPointA =  new Point(tangentPoints.x2,tangentPoints.y2);
	drawPoint(context,tangentPointA,"blue");
	drawPoint(context,tangentPointB,"blue");
	setPointName(tangentPointA,"A");
	setPointName(tangentPointB,"B");
	displayPointName(context,tangentPointA,tangentPointA.x-5,tangentPointA.y-5);
	displayPointName(context,tangentPointB,tangentPointB.x-5,tangentPointB.y+20);
	
	 drawLineBetweenTwoPoints(context,tangentPointA,tangentSourcePoint,"red");
	  drawLineBetweenTwoPoints(context,tangentPointB,tangentSourcePoint,"red");
	  var tangentPointExtA = PointAtCertainDistance(tangentPointA, tangentSourcePoint, -50);
	    var tangentPointExtB = PointAtCertainDistance(tangentPointB, tangentSourcePoint, -50);
		drawPoint(context,tangentPointExtA,"blue");
		drawPoint(context,tangentPointExtB,"blue");
		drawLineBetweenTwoPoints(context,tangentPointExtA,tangentSourcePoint,"red");
		drawLineBetweenTwoPoints(context,tangentPointExtB,tangentSourcePoint,"red");
		
		drawLineBetweenTwoPoints(context,tangentPointA,centerO,"red");
		drawLineBetweenTwoPoints(context,tangentPointB,centerO,"red");
		drawLineBetweenTwoPoints(context,centerO,tangentSourcePoint,"red");
		
}


function chapter_8_4_Q_3_pic1(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 55;
	displayPointName(context,centerO,centerO.x-15,centerO.y);	
	var circle =  new Circle(centerO,radius);
	var circle2 =  new Circle(centerO,radius-20);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	drawCircle( context,circle2,"purple");
	drawPoint(context,centerO,"blue");
	
	var pointA= getPointAtForDegree(circle,-220);
	var pointC= getPointAtForDegree(circle,-90);
	
	var pointQ= getPointAtForDegree(circle2,-30);
	var pointR= getPointAtForDegree(circle2,-170);
	
	setPointName(pointA,"A");
	setPointName(pointC,"C");
	setPointName(pointQ,"Q");
	setPointName(pointR,"R");
	drawPoint(context,pointA,"blue");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointC,pointC.x,pointC.y-7);
	
	displayPointName(context,pointQ,pointQ.x-2,pointQ.y-5);
	displayPointName(context,pointR,pointR.x-10,pointR.y-7);
	
	var tangentPoints = getTangentPoint(circle2, pointA);
	var  tangentPointA =  new Point(tangentPoints.x1,tangentPoints.y1);
	var  tangentPointP =  new Point(tangentPoints.x2,tangentPoints.y2);
	 setPointName(tangentPointP,"P");
	 displayPointName(context,tangentPointP,tangentPointP.x-5,tangentPointP.y+15);
	
	drawPoint(context,tangentPointP,"red");
	 var intersectionPoints = circleLineIntersectionPoints(circle,pointA,tangentPointP);
	 var pointB =intersectionPoints.pointB;
	 drawPoint(context,pointB,"blue");
	 setPointName(pointB,"B");
	 displayPointName(context,pointB,pointB.x+8,pointA.y+5);
	 drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	 
	 drawLineBetweenTwoPoints(context,centerO,pointA,"red");
	 drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	 drawLineBetweenTwoPoints(context,centerO,tangentPointP,"red");
	
	
}


function chapter_8_4_Q_4_pic1(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 55;
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);	
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	drawPoint(context,centerO,"blue");
	
   var tangentSourcePoint = new Point(circle.centerX+circle.radius+circle.radius-5,circle.centerY);
    setPointName(tangentSourcePoint,"D");
	drawPoint(context,tangentSourcePoint,"blue");
	displayPointName(context,tangentSourcePoint,tangentSourcePoint.x-5,tangentSourcePoint.y-5);
	
	
	var tangentPoints = getTangentPoint(circle, tangentSourcePoint);
	var  tangentPointA =  new Point(tangentPoints.x1,tangentPoints.y1);
	var  tangentPointC =  new Point(tangentPoints.x2,tangentPoints.y2);
	drawPoint(context,tangentPointA,"blue");
	drawPoint(context,tangentPointC,"blue");
	setPointName(tangentPointA,"A");
	setPointName(tangentPointC,"C");
	displayPointName(context,tangentPointA,tangentPointA.x-5,tangentPointA.y+17);
	displayPointName(context,tangentPointC,tangentPointC.x-5,tangentPointC.y-8);
	
	 drawLineBetweenTwoPoints(context,tangentPointA,tangentSourcePoint,"red");
	  drawLineBetweenTwoPoints(context,tangentPointC,tangentSourcePoint,"red");
	 
	 var tangentPointExtA = PointAtCertainDistance(tangentPointA, tangentSourcePoint, -50);
	    var tangentPointExtC = PointAtCertainDistance(tangentPointC, tangentSourcePoint, -50);
		drawPoint(context,tangentPointExtA,"blue");
		drawPoint(context,tangentPointExtC,"blue");
		drawLineBetweenTwoPoints(context,tangentPointExtA,tangentSourcePoint,"red");
		drawLineBetweenTwoPoints(context,tangentPointExtC,tangentSourcePoint,"red");
		
		var intersectionPoints = circleLineIntersectionPoints(circle,centerO,tangentPointA);
	    var pointB =intersectionPoints.pointA;
	     drawPoint(context,pointB,"blue");
	     setPointName(pointB,"B");
		 displayPointName(context,pointB,pointB.x-15,pointB.y-3);
		 
		 drawLineBetweenTwoPoints(context,pointB,tangentPointA,"red");
		 drawLineBetweenTwoPoints(context,pointB,tangentPointC,"red");
		 drawLineBetweenTwoPoints(context,tangentPointA,tangentPointC,"red");
		 drawLineBetweenTwoPoints(context,centerO,tangentPointC,"red");
		
	
}


function chapter_8_4_Q_5_pic1(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 45;
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);	
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	drawPoint(context,centerO,"blue");
	
	var pointR= getPointAtForDegree(circle,0);
	var pointS= getPointAtForDegree(circle,-90);
	var pointQ= getPointAtForDegree(circle,-180);
	var pointP= getPointAtForDegree(circle,-270);
	
	//drawPoint(context,pointP,"blue");
	//drawPoint(context,pointR,"blue");
	//drawPoint(context,pointS,"blue");
	//drawPoint(context,pointQ,"blue");
	
	var pointC1= getPointAtForDegree(circle,-45);
	var pointD1= getPointAtForDegree(circle,-135);
	var pointA1= getPointAtForDegree(circle,-225);
	var pointB1= getPointAtForDegree(circle,-310);
	
//	drawPoint(context,pointC1,"blue");
//	drawPoint(context,pointD1,"blue");
//	drawPoint(context,pointA1,"blue");
//	drawPoint(context,pointB1,"blue");
	
	var pointTempC = new Point(pointR.x,pointR.y-20);	
	var pointC = perpendicularPointOnLineFromAPoint(pointR,pointTempC,pointS);
	//drawPoint(context,pointC,"red");
	
	var pointTempD = new Point(pointQ.x,pointQ.y-20);	
	var pointD = perpendicularPointOnLineFromAPoint(pointQ,pointTempD,pointS);
	//drawPoint(context,pointD,"red");
	
	var pointTempA = new Point(pointQ.x,pointQ.y+20);	
	var pointA = perpendicularPointOnLineFromAPoint(pointQ,pointTempA,pointP);
	//drawPoint(context,pointA,"red");
	
	var pointTempB = new Point(pointR.x,pointR.y+20);	
	var pointB = perpendicularPointOnLineFromAPoint(pointR,pointTempB,pointP);
	//drawPoint(context,pointB,"red");
	
	 setPointName(pointA,"A");
	 displayPointName(context,pointA,pointA.x-15,pointA.y+10);
	 
	 setPointName(pointB,"B");
	 displayPointName(context,pointB,pointB.x+5,pointB.y+10);
	 
	 setPointName(pointC,"C");
	 displayPointName(context,pointC,pointC.x-5,pointC.y-3);
	 
	 setPointName(pointD,"D");
	 displayPointName(context,pointD,pointD.x-10,pointD.y-3);
	 
	  setPointName(pointP,"P");
	 displayPointName(context,pointP,pointP.x,pointP.y+15);
	 
	  setPointName(pointQ,"Q");
	 displayPointName(context,pointQ,pointQ.x-15,pointQ.y+3);
	 
	  setPointName(pointR,"R");
	 displayPointName(context,pointR,pointR.x+5,pointR.y+3);
	 
	  setPointName(pointS,"S");
	 displayPointName(context,pointS,pointS.x-5,pointS.y-3);
	 
	 
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"purple");	
	drawLineBetweenTwoPoints(context,centerO,pointB,"purple");
	drawLineBetweenTwoPoints(context,centerO,pointC,"purple");	
	drawLineBetweenTwoPoints(context,centerO,pointD,"purple");
	
	drawLineBetweenTwoPoints(context,centerO,pointP,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointQ,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointR,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointS,"blue");
	
	
}




function chapter_8_4_Q_1_pic1_save(context, x1,y1){
	
	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");	
	var radius = 55;
	displayPointName(context,centerO,centerO.x-15,centerO.y);	
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	var pointD= getPointAtForDegree(circle,-138);
	var pointA= getPointAtForDegree(circle,-227);
	var pointB= getPointAtForDegree(circle,-314);
	
	
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-20,pointA.y+10);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointD,pointD.x-15,pointD.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
    drawLineBetweenTwoPoints(context,pointA,pointD,"red");
  
  	var angle3 = getAngle(pointD,pointA,pointB); 
   var divAnglePointA= getPointAtAnAngle(pointA,-(angle3/2),50);
   
  var pointC= circleLineIntersection(circle,pointA,divAnglePointA);
   setPointName(pointC,"C");
   displayPointName(context, pointC,pointC.x+5,pointC.y+5);
   drawLineBetweenTwoPoints(context,pointC,pointD,"red");
   drawLineBetweenTwoPoints(context,pointC,pointB,"red");
   drawLineBetweenTwoPoints(context,pointC,pointA,"red");
   var tangentSourcePoint = new Point(circle.centerX+circle.radius+circle.radius+20,circle.centerY);
    setPointName(tangentSourcePoint,"S");
	drawPoint(context,tangentSourcePoint,"blue");
	var tangentPoints = getTangentPoint(circle, tangentSourcePoint);
	var  tangentPointA =  new Point(tangentPoints.x1,tangentPoints.y1);
	var  tangentPointB =  new Point(tangentPoints.x2,tangentPoints.y2);
	drawPoint(context,tangentPointA,"blue");
	drawPoint(context,tangentPointB,"blue");
	 drawLineBetweenTwoPoints(context,tangentPointA,tangentSourcePoint,"red");
	  drawLineBetweenTwoPoints(context,tangentPointB,tangentSourcePoint,"red");
	  var tangentPointExtA = PointAtCertainDistance(tangentPointA, tangentSourcePoint, -50);
	    var tangentPointExtB = PointAtCertainDistance(tangentPointB, tangentSourcePoint, -50);
		drawPoint(context,tangentPointExtA,"blue");
		drawPoint(context,tangentPointExtB,"blue");
		drawLineBetweenTwoPoints(context,tangentPointExtA,tangentSourcePoint,"red");
		drawLineBetweenTwoPoints(context,tangentPointExtB,tangentSourcePoint,"red");
		

}