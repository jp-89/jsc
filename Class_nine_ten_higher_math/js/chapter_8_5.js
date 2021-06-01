
function chapter_8_5_Q_2_3_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointC= getPointAtForDegree(circle,-325);
	var pointA= getPointAtForDegree(circle,-90);
	var pointB= getPointAtForDegree(circle,-215);
		
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointA,"red");
    drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawPoint(context,centerO , "red");	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
    drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	
	var pointD = PointAtCertainDistance(pointA, centerO, 100);
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);
	//displayName(context,80,150,"চিত্র :১");	

}


function chapter_8_5_Q_5_pic1(context, x1,y1){
	var drawFlag = true;
	var radius= 40;
	
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");	
	var pointP = new Point(centerO.x-radius-5,centerO.y+radius+30);
	var pointQ = new Point(centerO.x+radius+5,centerO.y+radius+30);
	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");
	
	if(drawFlag){
	drawPoint(context,pointP , "red");
	drawPoint(context,pointQ , "red");
  }
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	displayPointName(context,pointQ,pointQ.x-5,pointQ.y+20);
	
}



function chapter_8_5_Q_5_pic2(context, x1,y1){
	var drawFlag = false;
	var radius= 40;
	
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");
	
	var pointP = new Point(centerO.x-radius-5,centerO.y+radius+30);
	var pointQ = new Point(centerO.x+radius+5,centerO.y+radius+30);
	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");
	
	if(drawFlag){
	drawPoint(context,pointP , "red");
	drawPoint(context,pointQ , "red");
  }
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	displayPointName(context,pointQ,pointQ.x-5,pointQ.y+20);

     radius= radius*2-5;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,centerO.x,centerO.y,0,0,60,120,radius,false,"blue");
	     arcA_1.startArcDraw();
		var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointP,pointQ);
	    var point1 = pointCirLineIntersects.pointA;
		var point2 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point1,"blue");
		   drawPoint(context,point2,"blue");
		 }
		 radius= 35;
		 var arcA_2 =new ArcDrawWithAngleRadius(context,point1.x,point1.y,0,0,30,50,radius,false,"blue");
	     arcA_2.startArcDraw();
		 
		  var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,130,155,radius,false,"blue");
	      arcA_3.startArcDraw();
		  var pointsArcArc =   findArcIntersectionPoint(arcA_3,arcA_2);
		  var pointM = pointsArcArc.pointA;
		 
		 if(drawFlag){	
		   drawPoint(context,pointM,"red");
		 }
		 setPointName(pointM,"M");
	   displayPointName(context,pointM,pointM.x-5,pointM.y+20);
		 
		 drawLineBetweenTwoPoints(context,centerO,pointM,"red");
		 
		 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointM,centerO);
	    var pointC = pointCirLineIntersects.pointA;
		 if(drawFlag){	
		   drawPoint(context,pointC,"red");
		 }
		 
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x-15,pointC.y-5);
		
		// draw lombo at point C
		 var arcRadius= 20;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,262,410,arcRadius,false,"blue");
	     arcA_4.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_4,pointM,pointC);
	    var point4 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point4,"blue");
		 }
		 
		 var arcA_5 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,360,410,arcRadius,false,"blue");
	     arcA_5.startArcDraw();
		 
		  var pointsArcArc =   findArcIntersectionPoint(arcA_4,arcA_5);
		  var point5 = pointsArcArc.pointB;
		 
		 if(drawFlag){	
		   drawPoint(context,point5,"blue");
		 }
		 
		  var arcA_6 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,430,480,arcRadius,false,"purple");
	     arcA_6.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_6,arcA_4);
		  var point6 = pointsArcArc.pointA;
		  
		   if(drawFlag){	
		   drawPoint(context,point6,"red");
		 }
		 
		  var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,370,410,arcRadius,false,"purple");
	     arcA_7.startArcDraw();
		 var arcA_8 =new ArcDrawWithAngleRadius(context,point6.x,point6.y,0,0,310,350,arcRadius,false,"purple");
	     arcA_8.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_7,arcA_8);
		  
		  var point8 = pointsArcArc.pointA;
		  drawLineBetweenTwoPoints(context,pointC,point8,"red");
		  
		   if(drawFlag){	
		   drawPoint(context,point8,"red");
		 }

		 var pointA = PointAtCertainDistance(pointC, point8, -50);
		  var pointB = PointAtCertainDistance(pointC, point8, 50);
		 if(drawFlag){	
		   drawPoint(context,pointA,"red");
		    drawPoint(context,pointB,"red");
		 }
		 
		 drawLineBetweenTwoPoints(context,pointA,pointB,"red");
		 
		
		 setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-4,pointA.y-5);
		 setPointName(pointB,"B");
	    displayPointName(context,pointB,pointB.x+2,pointB.y-5);
		
		//// end of drawing lombo at point C
		

}


function chapter_8_5_Q_6_pic1(context, x1,y1){
	var drawFlag = true;
	var radius= 40;
	
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");	
	var pointP = new Point(centerO.x-radius-5,centerO.y+radius+30);
	var pointQ = new Point(centerO.x+radius+5,centerO.y+radius+30);
	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");
	
	if(drawFlag){
	drawPoint(context,pointP , "red");
	drawPoint(context,pointQ , "red");
  }
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	displayPointName(context,pointQ,pointQ.x-5,pointQ.y+20);
	
}



function chapter_8_5_Q_6_pic2(context, x1,y1){
	var drawFlag = false;
	var radius= 40;
	
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");
	
	var pointP = new Point(centerO.x-radius-5,centerO.y+radius+30);
	var pointQ = new Point(centerO.x+radius+25,centerO.y+radius+30);
	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");
	
	if(drawFlag){
	drawPoint(context,pointP , "red");
	drawPoint(context,pointQ , "red");
  }
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	displayPointName(context,pointQ,pointQ.x-5,pointQ.y+20);

     radius= radius*2-5;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,centerO.x,centerO.y,0,0,60,120,radius,false,"blue");
	     arcA_1.startArcDraw();
		var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointP,pointQ);
	    var point1 = pointCirLineIntersects.pointA;
		var point2 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point1,"blue");
		   drawPoint(context,point2,"blue");
		 }
		 radius= 35;
		 var arcA_2 =new ArcDrawWithAngleRadius(context,point1.x,point1.y,0,0,30,50,radius,false,"blue");
	     arcA_2.startArcDraw();
		 
		  var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,130,155,radius,false,"blue");
	      arcA_3.startArcDraw();
		  var pointsArcArc =   findArcIntersectionPoint(arcA_3,arcA_2);
		  var pointM = pointsArcArc.pointA;
		 
		 if(drawFlag){	
		   drawPoint(context,pointM,"red");
		 }
		 setPointName(pointM,"M");
	   displayPointName(context,pointM,pointM.x-5,pointM.y+20);
		 
		 drawLineBetweenTwoPoints(context,centerO,pointM,"red");
		 
		 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointM,centerO);
	    var pointC = pointCirLineIntersects.pointA;
		 if(drawFlag){	
		   drawPoint(context,pointC,"red");
		 }
		 
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x-15,pointC.y-5);
		
		// draw lombo at point O
		 var arcRadius= 20;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,centerO.x,centerO.y,0,0,262,450,arcRadius,false,"blue");
	     arcA_4.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_4,pointM,pointC);
	    var point4 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point4,"blue");
		 }
		 
		 var arcA_5 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,360,410,arcRadius,false,"blue");
	     arcA_5.startArcDraw();
		 
		  var pointsArcArc =   findArcIntersectionPoint(arcA_4,arcA_5);
		  var point5 = pointsArcArc.pointB;
		 
		 if(drawFlag){	
		   drawPoint(context,point5,"blue");
		 }
		 
		  var arcA_6 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,430,480,arcRadius,false,"purple");
	     arcA_6.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_6,arcA_4);
		  var point6 = pointsArcArc.pointA;
		  
		   if(drawFlag){	
		   drawPoint(context,point6,"red");
		 }
		 
		  var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,370,410,arcRadius,false,"purple");
	     arcA_7.startArcDraw();
		 var arcA_8 =new ArcDrawWithAngleRadius(context,point6.x,point6.y,0,0,310,350,arcRadius,false,"purple");
	     arcA_8.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_7,arcA_8);
		  
		  var point8 = pointsArcArc.pointA;
		  drawLineBetweenTwoPoints(context,centerO,point8,"red");
		  
		   if(drawFlag){	
		   drawPoint(context,point8,"red");
		 }

		
		  var pointN = PointAtCertainDistance(centerO, point8, 80);
		 if(drawFlag){	
				    drawPoint(context,pointN,"red");
		 }
		 
		 drawLineBetweenTwoPoints(context,centerO,pointN,"red");
		 
		
		 setPointName(pointN,"N");
	    displayPointName(context,pointN,pointN.x+4,pointN.y+5);
				
		//// end of drawing lombo at point O
		
		 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointN,centerO);
	    var pointC = pointCirLineIntersects.pointA;
		if(drawFlag){	
				    drawPoint(context,pointC,"red");
		 }
		 
		  setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x+4,pointC.y+15);
		
		// lombo at C
		arcRadius= 20;
		 var arcA_9 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,212,360,arcRadius,false,"blue");
	     arcA_9.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_9,pointN,pointC);
	    var point9 = pointCirLineIntersects.pointA;
		if(drawFlag){	
		   drawPoint(context,point9,"blue");
		 }
		 
		 
		  var arcA_10 =new ArcDrawWithAngleRadius(context,point9.x,point9.y,0,0,215,270,arcRadius,false,"blue");
	     arcA_10.startArcDraw();
		 
		  var pointsArcArc =   findArcIntersectionPoint(arcA_10,arcA_9);
		  var point10 = pointsArcArc.pointB;
		 
		 if(drawFlag){	
		   drawPoint(context,point10,"blue");
		 }
		 
		 var arcA_11 =new ArcDrawWithAngleRadius(context,point10.x,point10.y,0,0,155,200,arcRadius,false,"purple");
	     arcA_11.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_11,arcA_9);
		  var point11 = pointsArcArc.pointB;
		  
		   if(drawFlag){	
		   drawPoint(context,point11,"red");
		 }
		 
		 var arcA_12 =new ArcDrawWithAngleRadius(context,point10.x,point10.y,0,0,222,265,arcRadius,false,"purple");
	     arcA_12.startArcDraw();
		 
		 var arcA_13 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,280,320,arcRadius,false,"purple");
	     arcA_13.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_12,arcA_13);
		   var pointA = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,pointA,"red");
		 }
		 
		 setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-4,pointA.y-10);
		 
		 var pointB = perpendicularPointOnLineFromAPoint(pointP,pointQ,pointC);
		  if(drawFlag){	
		   drawPoint(context,pointB,"red");
		 }
		  drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	     setPointName(pointB,"B");
	    displayPointName(context,pointB,pointB.x-4,pointB.y+20);
		

}



function chapter_8_5_Q_7_pic1(context, x1,y1){
	var drawFlag = true;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");	
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,40);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointC= getPointAtForDegree(circle,-285);
	var pointA= getPointAtForDegree(circle,-65);
	var pointB= getPointAtForDegree(circle,-215);
	var pointM= getPointAtForDegree(circle,-0);
		
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointM,"M");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	
	displayName(context,50,150,"চিত্র :১");	

}


function chapter_8_5_Q_7_pic2(context, x1,y1){
	var drawFlag = true;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO , "blue");	
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,40);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointC= getPointAtForDegree(circle,-285);
	var pointA= getPointAtForDegree(circle,-65);
	var pointB= getPointAtForDegree(circle,-215);
	var pointM= getPointAtForDegree(circle,-0);
		
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointM,"M");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayPointName(context,pointM,pointM.x-20,pointM.y+15);
	
	drawPoint(context,pointM , "blue");	
	
	var radius = distanceBetweenTwoPoints(pointM, centerO);
	var pointP = PointAtCertainDistance(pointM, centerO, -radius);
	
	drawPoint(context,pointP , "blue");	
	setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x+5,pointP.y+5);
	
	
	var circle2 =  new Circle(pointM,radius);
	drawCircle( context,circle2,"purple");
	 var pointsArcArc =  findArcIntersectionPoint(circle2,circle);
	  var pointA = pointsArcArc.pointB;
	  var pointC = pointsArcArc.pointA;
	  if(drawFlag){	
	     drawPoint(context,pointA,"blue");
		 drawPoint(context,pointC,"blue");
	  }
	  
	  drawLineBetweenTwoPoints(context,pointA,pointP,"red");
	  drawLineBetweenTwoPoints(context,pointC,pointP,"red");
       drawLineBetweenTwoPoints(context,centerO,pointP,"red");	  
	
	displayName(context,50,150,"চিত্র :২");	

}


function chapter_8_5_Q_8_pic1(context, x1,y1){
	var a= 3 ;
	var b = 4;
	var c = 4.5;
	var eachUnit = 15;
	
	var pointB = new Point(x1,y1);
	var pointC = new Point(x1+c*eachUnit,y1);
	
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	
	var point1 = new Point(x1+100,10);
	var pointA = PointAtCertainDistance(pointB, point1, b*eachUnit);
	var point2 = PointAtCertainDistance(pointA, pointC, a*eachUnit);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	//drawPoint(context,point2,"red");
	//drawPoint(context,pointC,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y+10);
	displayText2(context,pointB.x+20,pointB.y+20,"4.5 সে.মি.");
	writeRotatedText3(context,"4 সে.মি.",pointB,10,-7, -Math.PI/4);
	writeRotatedText3(context,"3 সে.মি.",pointA,10,-7, Math.PI/3);
	
	
}



function chapter_8_5_Q_8_pic2(context, x1,y1){
	var drawFlag = true;
	var radius= 40;
	var a= 3 ;
	var b = 4;
	var c = 4.5;
	var eachUnit = 15;
	
	var pointB = new Point(x1,y1);
	var pointC = new Point(x1+c*eachUnit,y1);
	
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	
	var point1 = new Point(x1+100,10);
	var pointA = PointAtCertainDistance(pointB, point1, b*eachUnit);
	var point2 = PointAtCertainDistance(pointA, pointC, a*eachUnit);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	var pointC =new Point(point2.x,point2.y);
	drawPoint(context,point2,"red");
	//drawPoint(context,pointC,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y+10);
	
	     var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,20,42,radius,false,"green");
	     arcA_1.startArcDraw();
		 
		 var arcA_2 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,138,160,radius,false,"blue");
	     arcA_2.startArcDraw();
		 
		  var pointsArcArc =   findArcIntersectionPoint(arcA_1,arcA_2);
		  var point1 = pointsArcArc.pointA;
		  var point2 = pointsArcArc.pointB;
		  
		  if(drawFlag){	
		   drawPoint(context,point1,"blue");
		   drawPoint(context,point2,"blue");
		 }
		 
		   var arcA_3 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,320,340,radius,false,"blue");
	     arcA_3.startArcDraw();
		 
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,200,225,radius,false,"blue");
	     arcA_4.startArcDraw();
		 
		 
		 var arcA_5 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,380,radius,false,"blue");
	     arcA_5.startArcDraw();
		 
		 var arcA_6 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,285,305,radius,false,"blue");
	     arcA_6.startArcDraw();
		 
		 pointsArcArc =   findArcIntersectionPoint(arcA_5,arcA_6);
		  var point5 = pointsArcArc.pointA;
		  var point6 = pointsArcArc.pointB;
		  
		  if(drawFlag){	
		   drawPoint(context,point5,"blue");
		   drawPoint(context,point6,"blue");
		 }
		 
		 var arcA_7 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,103,125,radius,false,"purple");
	     arcA_7.startArcDraw();
		 
		 var arcA_8 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,173,198,radius,false,"purple");
	     arcA_8.startArcDraw();
		
		var pointG= getInsectionPoint(point1, point2,point5,point6);
			
		if(drawFlag){	
		   drawPoint(context,pointG,"blue");
		   
		 }
		 
		 drawLineBetweenTwoPoints(context,point1,point2,"red");
		  drawLineBetweenTwoPoints(context,point5,point6,"red");
		  var radius = distanceBetweenTwoPoints(pointG, pointB);
		  
		  var centerO =  new Point(pointG.x,pointG.y);
	      setPointName(centerO,"O");
	      drawPoint(context,centerO , "blue");
		  var circle =  new Circle(centerO,radius);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	displayPointName(context,centerO,centerO.x+7,centerO.y+7);
	
		  //alert(radius/eachUnit);
		   var ca = distanceBetweenTwoPoints(pointA, pointC);
		   var bc = distanceBetweenTwoPoints(pointA, point2);
		  //  alert(bc/eachUnit);
		  // radis= abc/4at;
		 
	
}


function chapter_8_5_Q_9_pic1(context, x1,y1){
	var a= 5 ;
	var b = 5;
	var c = 5;
	var eachUnit = 15;
	
	var pointB = new Point(x1,y1);
	var pointC = new Point(x1+c*eachUnit,y1);
	
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	var xdiff = pointC.x- pointB.x
	var point1 = new Point(x1+xdiff/2+10,32);
	
	var pointA = PointAtCertainDistance(pointB, point1, b*eachUnit);
	var point2 = PointAtCertainDistance(pointA, pointC, a*eachUnit);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	//drawPoint(context,point1,"red");
	//drawPoint(context,point2,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-5,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y+10);
	displayText2(context,pointB.x+20,pointB.y+20,"5 সে.মি.");
	writeRotatedText3(context,"5 সে.মি.",pointB,10,-7, -Math.PI/3);
	writeRotatedText3(context,"5 সে.মি.",pointA,18,-7, Math.PI/3);
}



function chapter_8_5_Q_9_pic2(context, x1,y1){
	var drawFlag = false;
	var radius= 20;
	
	var a= 5 ;
	var b = 5;
	var c = 5;
	var eachUnit = 15;
	
	var pointB = new Point(x1,y1);
	var pointC = new Point(x1+c*eachUnit,y1);
	
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	var xdiff = pointC.x- pointB.x
	var point1 = new Point(x1+xdiff/2+10,32);
	
	var pointA = PointAtCertainDistance(pointB, point1, b*eachUnit);
	var point2 = PointAtCertainDistance(pointA, pointC, a*eachUnit);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	//drawPoint(context,point1,"red");
	//drawPoint(context,point2,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-15,pointA.y-5);
	displayPointName(context,pointB,pointB.x-20,pointB.y+10);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
//	displayText2(context,pointB.x+20,pointB.y+20,"5 সে.মি.");
//	writeRotatedText3(context,"5 সে.মি.",pointB,10,-7, -Math.PI/3);
//	writeRotatedText3(context,"5 সে.মি.",pointA,18,-7, Math.PI/3);


var pointE = PointAtCertainDistance(pointB, pointA, 170);
 if(drawFlag){	
   drawPoint(context,pointE,"blue");
 }
 
   setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x-25,pointE.y+10);
	drawLineBetweenTwoPoints(context,pointA,pointE,"blue");
	
	var pointF = PointAtCertainDistance(pointB, pointC, 170);
 if(drawFlag){	
   drawPoint(context,pointF,"blue");
 }
 
   setPointName(pointF,"F");
	displayPointName(context,pointF,pointF.x-5,pointF.y+20);
	drawLineBetweenTwoPoints(context,pointC,pointF,"blue");
	
	  var arcA_5 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,288,420,radius,false,"purple");
	  arcA_5.startArcDraw();
	  
	 var pointCirLineIntersects= circleLineIntersectionPoints(arcA_5,pointB,pointA);
	 var point5= pointCirLineIntersects.pointB;
	 if(drawFlag){	
       drawPoint(context,point5,"blue");
      }
	  
	  pointCirLineIntersects= circleLineIntersectionPoints(arcA_5,pointC,pointA);
	 var point6= pointCirLineIntersects.pointA;
	 if(drawFlag){	
       drawPoint(context,point6,"blue");
      }
	  
	  radius= 35;
	   var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,370,400,radius,false,"purple");
	  arcA_7.startArcDraw();
	  
	   var arcA_8 =new ArcDrawWithAngleRadius(context,point6.x,point6.y,0,0,310,340,radius,false,"purple");
	  arcA_8.startArcDraw();
	  
	   var pointsArcArc =   findArcIntersectionPoint(arcA_7,arcA_8);
	   var point8= pointsArcArc.pointA;
	   
	   if(drawFlag){	
       drawPoint(context,point8,"blue");
      }
	  
	  var pointP = PointAtCertainDistance(pointA, point8, 120);
	  
	   if(drawFlag){	
       drawPoint(context,pointP,"blue");
      }
	  
	  setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x+5,pointP.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointP,"blue");
	
	//// divide angle C
	
	 radius= 20;
	 var arcA_10 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,235,360,radius,false,"purple");
	  arcA_10.startArcDraw();
	  
	 pointCirLineIntersects= circleLineIntersectionPoints(arcA_10,pointC,pointA);
	 var point10= pointCirLineIntersects.pointB;
	 if(drawFlag){	
       drawPoint(context,point10,"blue");
      }
	  
	  pointCirLineIntersects= circleLineIntersectionPoints(arcA_10,pointC,pointF);
	 var point11= pointCirLineIntersects.pointB;
	 if(drawFlag){	
       drawPoint(context,point11,"blue");
      }
	  
	  radius= 30;
	   var arcA_12 =new ArcDrawWithAngleRadius(context,point10.x,point10.y,0,0,320,350,radius,false,"purple");
	  arcA_12.startArcDraw();
	  
	   var arcA_13 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,240,290,radius,false,"purple");
	  arcA_13.startArcDraw();
	  
	   var pointsArcArc =   findArcIntersectionPoint(arcA_12,arcA_13);
	   var point13= pointsArcArc.pointA;
	   
	   if(drawFlag){	
       drawPoint(context,point13,"blue");
      }
	  
	  var pointQ = PointAtCertainDistance(pointC, point13, 120);
	  
	   if(drawFlag){	
       drawPoint(context,pointQ,"blue");
      }
	  
	  setPointName(pointQ,"Q");
	displayPointName(context,pointQ,pointQ.x-25,pointQ.y);
	drawLineBetweenTwoPoints(context,pointC,pointQ,"blue");
	
	var pointO = pointOfIntersectionOfPoints(pointA, pointP,pointC,pointQ);
	  if(drawFlag){	
       drawPoint(context,pointO,"blue");
      }
	  
	   setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x+10,pointO.y-7);

	pointL = perpendicularPointOnLineFromAPoint(pointA,pointC,pointO);
	if(drawFlag){	
       drawPoint(context,pointL,"blue");
      }
	
	radius = distanceBetweenTwoPoints(pointO, pointL);
	var centerO =  new Point(pointO.x,pointO.y);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,radius);

	drawCircle( context,circle,"green");
	radius= radius+5;
	
	 var arcA_16 =new ArcDrawWithAngleRadius(context,pointO.x,pointO.y,0,0,110,170,radius,false,"purple");
	  arcA_16.startArcDraw();
	  
	   // pointsArcArc =   findArcIntersectionPoint(arcA_12,arcA_13);
	   
	   pointCirLineIntersects= circleLineIntersectionPoints(arcA_16,pointA,pointC);
	   var point16= pointCirLineIntersects.pointA;
	   var point17= pointCirLineIntersects.pointB;
	   if(drawFlag){	
         drawPoint(context,point16,"blue");
		 drawPoint(context,point17,"blue");
      }
	  
	  radius = 35;
	   var arcA_18 =new ArcDrawWithAngleRadius(context,point16.x,point16.y,0,0,70,110,radius,false,"purple");
	   arcA_18.startArcDraw();
	   
	   var arcA_19 =new ArcDrawWithAngleRadius(context,point17.x,point17.y,0,0,190,215,radius,false,"purple");
	   arcA_19.startArcDraw();
	   drawLineBetweenTwoPoints(context,pointO,pointL,"blue");
	   setPointName(pointL,"L");
	displayPointName(context,pointL,pointL.x+10,pointL.y+5);
	  
	
}


function chapter_8_5_Q_10_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
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
	displayPointName(context,pointA,pointA.x-10,pointA.y-5);
	displayPointName(context,pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x+2,pointC.y+15);
	displayPointName(context,pointD,pointD.x,pointD.y-5);
	
	displayName(context,60,150,"চিত্র :১");	
}


function chapter_8_5_Q_10_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
     var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	var drawFlag = true;
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-10,pointA.y-5);
	displayPointName(context,pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x+2,pointC.y+15);
	displayPointName(context,pointD,pointD.x,pointD.y-5);
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointB,"blue");
	var pointO = midPointBetweenTwoPoint(pointA,pointC );
	drawPoint(context,pointO,"blue");
	setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x-5,pointO.y-5);
	var perPendPoint = perpendicularPointOnLineFromAPoint(pointB,pointC,pointO);
	var radius1 = distanceBetweenTwoPoints(pointO,perPendPoint);
    var circle1 =  new Circle(pointO,radius1);
	setCircleFillStyle(circle1,"blue");
	drawCircle( context,circle1,"green");
	
	var radius2 = distanceBetweenTwoPoints(pointO,pointB);
    var circle2 =  new Circle(pointO,radius2);
	setCircleFillStyle(circle2,"blue");
	drawCircle( context,circle2,"purple");
	
	//
	var radius= radius1+5;
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointO.x,pointO.y,0,0,50,80,radius,false,"blue");
     arcA_1.startArcDraw();
	 
	 var arcA_2 =new ArcDrawWithAngleRadius(context,pointO.x,pointO.y,0,0,105,130,radius,false,"blue");
     arcA_2.startArcDraw();
	 var pointCirLineIntersects= circleLineIntersectionPoints(arcA_2,pointB,pointC);
	 var point1= pointCirLineIntersects.pointA;
	 var point2= pointCirLineIntersects.pointB;
	 if(drawFlag){	
	   drawPoint(context,point1,"blue");
	   drawPoint(context,point2,"blue");
	}
	
	var arcA_3 =new ArcDrawWithAngleRadius(context,point1.x,point1.y,0,0,50,70,radius,false,"blue");
     arcA_3.startArcDraw();
	 
	 var arcA_4 =new ArcDrawWithAngleRadius(context,point2.x,point1.y,0,0,105,130,radius,false,"blue");
     arcA_4.startArcDraw();
	 
	 var pointsArcArc =  findArcIntersectionPoint(arcA_3,arcA_4);
	  var point5 = pointsArcArc.pointB;
	  if(drawFlag){	
	     drawPoint(context,point5,"blue");
	  }
	  
	  drawLineBetweenTwoPoints(context,pointO,perPendPoint,"blue");
	
	 setPointName(perPendPoint,"M");
	displayPointName(context,perPendPoint,perPendPoint.x-5,perPendPoint.y+15);
	   
	//displayName(context,60,150,"চিত্র :২");	
}





function chapter_8_5_Q_11_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var midPointAB =midPointBetweenTwoPoint(pointA,pointB );
	var centerO = midPointAB;
	drawPoint(context,centerO, "blue");
	var radius = distanceBetweenTwoPoints(pointA, centerO);
	setPointName(centerO,"M");
	displayPointName(context, centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");
	
	var midPointAC =midPointBetweenTwoPoint(pointA,pointC );
	var centerO2 = midPointAC;
	drawPoint(context,centerO2, "blue");
	radius = distanceBetweenTwoPoints(pointA, centerO2);
	setPointName(centerO2,"N");
	displayPointName(context, centerO2,centerO2.x+10,centerO2.y+5);
	var circle2 =  new Circle(centerO2,radius);
	drawCircle( context,circle2,"green");
	
	var midPointBC =midPointBetweenTwoPoint(pointB,pointC );
	var pointD = new Point(midPointBC.x,midPointBC.y);
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	drawPoint(context,pointD, "blue");
}

function chapter_8_5_Q_12_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	
	var midPointBC =midPointBetweenTwoPoint(pointB,pointC );
	var pointD = midPointBC;
	setPointName(pointD,"O");
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	//drawPoint(context,pointD, "blue");
	var centerO = midPointBC;
	drawPoint(context,centerO, "blue");
	var radius = distanceBetweenTwoPoints(pointB, centerO);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");


}


function chapter_8_5_Q_13_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var midPointAB =midPointBetweenTwoPoint(pointA,pointB );
	var centerO = midPointAB;
	drawPoint(context,centerO, "blue");
	var radius = distanceBetweenTwoPoints(pointA, centerO);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");
	
	var midPointAC =midPointBetweenTwoPoint(pointA,pointC );
	var centerO2 = midPointAC;
	drawPoint(context,centerO2, "blue");
	radius = distanceBetweenTwoPoints(pointA, centerO2);
	setPointName(centerO2,"P");
	var circle2 =  new Circle(centerO2,radius);
	drawCircle( context,circle2,"green");
	
	var midPointBC =midPointBetweenTwoPoint(pointB,pointC );
	var pointD = new Point(midPointBC.x+5,midPointBC.y);
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	//drawPoint(context,pointD, "blue");
}

function chapter_8_5_Q_14_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-320);
	var pointA= getPointAtForDegree(circle,-155);
	var pointC= getPointAtForDegree(circle,-220);
	var pointB= getPointAtForDegree(circle,-25);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+10);
	displayPointName(context,pointC,pointC.x-20,pointC.y+5);
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
    drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawPoint(context,centerO , "red");	
	
	displayName(context,80,150,"চিত্র :১");	
}


function chapter_8_5_Q_15_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointC= getPointAtForDegree(circle,-25);
	var pointA= getPointAtForDegree(circle,-95);
	var pointD= getPointAtForDegree(circle,-250);
	var pointB= getPointAtForDegree(circle,-320);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-15,pointA.y);
	displayPointName(context,pointB,pointB.x+10,pointB.y+10);
	displayPointName(context,pointC,pointC.x+10,pointC.y+5);
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
    drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+6,pointE.y+7);
	
	drawPoint(context,centerO , "red");	
	displayName(context,80,150,"চিত্র :১");	
}

function chapter_8_5_Q_16_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointP =  new Point(x2,y2);
	var pointQ =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointP,pointP.x-10,pointP.y+15);
	displayPointName(context,pointQ,pointQ.x,pointQ.y+15);

	var triangle = new Triangle(pointA,pointP,pointQ);
	drawTriangle(context, triangle);
	var midPointAP =midPointBetweenTwoPoint(pointA,pointP );
	var centerO = midPointAP;
	drawPoint(context,centerO, "blue");
	var radius = distanceBetweenTwoPoints(pointA, centerO);
	setPointName(centerO,"M");
	displayPointName(context, centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");
	
	var midPointAQ =midPointBetweenTwoPoint(pointA,pointQ );
	var centerO2 = midPointAQ;
	drawPoint(context,centerO2, "blue");
	radius = distanceBetweenTwoPoints(pointA, centerO2);
	setPointName(centerO2,"N");
	displayPointName(context, centerO2,centerO2.x+10,centerO2.y+5);
	var circle2 =  new Circle(centerO2,radius);
	drawCircle( context,circle2,"green");
	
	var midPointPQ =midPointBetweenTwoPoint(pointP,pointQ );
	var pointB = new Point(midPointPQ.x,midPointPQ.y);
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x,pointB.y+20);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	//drawPoint(context,pointD, "blue");
}

function chapter_8_5_Q_17_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-220);
	var pointC= getPointAtForDegree(circle,-90);
	var pointB= getPointAtForDegree(circle,-320);
	var pointD =midPointBetweenTwoPoint(pointA,pointB );
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+10);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
    drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawPoint(context,centerO , "red");	
	writeRotatedText3(context,"10 meter",centerO,centerO.x-105,centerO.y-75,  Math.PI/4);
	
	displayName(context,80,150,"চিত্র :১");	
}

function chapter_8_5_Q_17_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,centerO.y+5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-220);
	var pointC= getPointAtForDegree(circle,-90);
	var pointB= getPointAtForDegree(circle,-320);
	var pointD =midPointBetweenTwoPoint(pointA,pointB );
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+10);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	displayPointName(context,pointD,pointD.x,pointD.y+15);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
    drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawPoint(context,centerO , "red");	
	writeRotatedText3(context,"10 meter",centerO,centerO.x-105,centerO.y-75,  Math.PI/4);
	
	displayName(context,80,150,"চিত্র :২");	
}



