function chapter_7_2_Q_3_4_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 var pointA = new Point(x1,y1);
 var pointB = new Point(x2,y2);
 var pointC = new Point(x3,y3);
 var pointD = new Point(x4,y4); 
 var rect= new Rectangle(pointA,pointB,pointC,pointD);
 drawRectangle(context,rect);
 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	}
	
	
	
	
	function chapter_7_2_Q_7_pic1(context, x1,y1,x2,y2){
		var drawFlag = true;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(160,10);	
	drawLineBetweenTwoPoints(context,armBCBegin,armBCEnd,"red");
	setPointName(armBCBegin,"BC");
	displayPointName(context, armBCBegin,armBCBegin.x-25,armBCBegin.y+5);
	
	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(140,30);	
	drawLineBetweenTwoPoints(context,armABBegin,armABEnd,"red");
	setPointName(armABBegin,"AB");
	displayPointName(context, armABBegin,armABBegin.x-25,armABBegin.y+5);	
	
	// angle B
	var angle_B_begin = new Point(40,70);
	var angle_B_end_1 = new Point(80,70);
	var angle_B_end_2 = new Point(50,40);
	
	drawLineBetweenTwoPoints(context,angle_B_begin,angle_B_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_B_begin,angle_B_end_2,"red");
	
	setPointName(angle_B_begin,"B");
	displayPointName(context, angle_B_begin,angle_B_begin.x-15,angle_B_begin.y+5);

	
	// angle C
	var angle_C_begin = new Point(110,70);
	var angle_C_end_1 = new Point(150,70);
	var angle_C_end_2 = new Point(100,40);
	
	drawLineBetweenTwoPoints(context,angle_C_begin,angle_C_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_C_begin,angle_C_end_2,"red");
	
	setPointName(angle_C_begin,"C");
	displayPointName(context, angle_C_begin,angle_C_begin.x-15,angle_C_begin.y+5);

	
	// angle D
	var angle_D_begin = new Point(40,120);
	var angle_D_end_1 = new Point(80,120);
	var angle_D_end_2 = new Point(52,80);
	
	drawLineBetweenTwoPoints(context,angle_D_begin,angle_D_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_D_begin,angle_D_end_2,"red");
	
	setPointName(angle_D_begin,"D");
	displayPointName(context, angle_D_begin,angle_D_begin.x-15,angle_D_begin.y+5);


	}
	
	
	function chapter_7_2_Q_7_pic2(context, x1,y1,x2,y2){
		var drawFlag = true;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(160,10);	

	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(120,30);	
	
	// angle B
	var angle_B_begin = new Point(40,70);
	var angle_B_end_1 = new Point(80,70);
	var angle_B_end_2 = new Point(55,40);
	

	
	// angle C
	var angle_C_begin = new Point(110,70);
	var angle_C_end_1 = new Point(150,70);
	var angle_C_end_2 = new Point(100,40);
	
	
	
	// angle D
	var angle_D_begin = new Point(40,120);
	var angle_D_end_1 = new Point(80,120);
	var angle_D_end_2 = new Point(52,80);
	
		

// draw point B;
	var pointB =  new Point(x1,y1);
	 
	 setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	
	// draw point P
	var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
	
	// take part BC
	var distance = distanceBetweenTwoPoints(armBCBegin, armBCEnd);
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,355,365,distance,false,"purple");
	arcA_1.startArcDraw();
	
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var pointC = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		}
		
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x+3,pointC.y+15);
		
		// draw angle B at point B
		
	   var radius= 25;
	   var distance= 25;
		 var angle_B = 360-getAngle(angle_B_end_1, angle_B_begin, angle_B_end_2);
		var B_anglePoint = getPointAtAnAngle(pointB,angle_B,distance);
		
		if(drawFlag){	
		   drawPoint(context,B_anglePoint,"blue");
		}
		
		distance = distanceBetweenTwoPoints(pointB, B_anglePoint);
		var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,220,360,distance,false,"purple");
	    arcA_2.startArcDraw();
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointP);
	    var point2 = pointCirLineIntersects.pointB;
				 
		 if(drawFlag){	
		   drawPoint(context,point2,"red");
		 }
		 
		  distance = distanceBetweenTwoPoints(point2, B_anglePoint);
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,215,260,distance,false,"purple");
	    arcA_3.startArcDraw();
		
		var pointsArcArc =  findArcIntersectionPoint(arcA_3,arcA_2);
		var point3 = pointsArcArc.pointB;
		  if(drawFlag){	
		  drawPoint(context,point3,"red");
		 }
		 
		  // draw point F
		 var pointF= PointAtCertainDistance(pointB, point3, 110);
		  if(drawFlag){	
		   drawPoint(context,pointF,"red");
		 }
		
		 setPointName(pointF,"F");
	    displayPointName(context,pointF,pointF.x-15,pointF.y+5);
		drawLineBetweenTwoPoints(context,pointB,pointF,"red");
		 
		// draw angle C-----------------
		
		var angle_C = 180+getAngle(angle_C_end_1, angle_C_begin, angle_C_end_2);
		var C_anglePoint = getPointAtAnAngle(pointC,angle_C,distance);
		
		if(drawFlag){	
		   drawPoint(context,C_anglePoint,"blue");
		}
		
		distance = distanceBetweenTwoPoints(pointC, C_anglePoint);
		var arcA_4 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,180,320,distance,false,"purple");
	    arcA_4.startArcDraw();
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_4,pointC,pointB);
	    var point4 = pointCirLineIntersects.pointB;
				 
		 if(drawFlag){	
		   drawPoint(context,point4,"red");
		 }
		 
		  distance = distanceBetweenTwoPoints(point4, C_anglePoint);
		 var arcA_5 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,310,340,distance,false,"purple");
	    arcA_5.startArcDraw();
		
		var pointsArcArc =  findArcIntersectionPoint(arcA_4,arcA_5);
		var point5 = pointsArcArc.pointB;
		  if(drawFlag){	
		  drawPoint(context,point5,"red");
		 }
		 
		  // draw point Q
		 var pointQ= PointAtCertainDistance(pointC, point5, 110);
		  if(drawFlag){	
		   drawPoint(context,pointQ,"red");
		 }
		
		 setPointName(pointQ,"Q");
	    displayPointName(context,pointQ,pointQ.x+5,pointQ.y+5);
		drawLineBetweenTwoPoints(context,pointC,pointQ,"red");
		
		
		// take part AB
	distance = distanceBetweenTwoPoints(armABBegin, armABEnd);
	var arcA_6 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,282,295,distance,false,"purple");
	arcA_6.startArcDraw();
	
	//// pointD D
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_6,pointC,pointQ);
	    var pointD = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointD,"blue");
		}
		
		 setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+7,pointD.y-2);
		
		
		
		// draw angle D-----------------
		var angle_D = getAngle(angle_D_end_1, angle_D_begin, angle_D_end_2);
		var D_anglePoint = getPointAtAnAngle2(pointD, pointC,angle_D,20);
	
		if(drawFlag){	
		   drawPoint(context,D_anglePoint,"red");
		}
		
		distance = distanceBetweenTwoPoints(pointD, D_anglePoint);
		var arcA_8 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,104,220,distance,false,"green");
	    arcA_8.startArcDraw();
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_8,pointD,pointC);
	    var point9 = pointCirLineIntersects.pointB;
				 
		 if(drawFlag){	
		   drawPoint(context,point9,"red");
		 }
		 
		 distance = distanceBetweenTwoPoints(point9, D_anglePoint)
		  var arcA_10 =new ArcDrawWithAngleRadius(context,point9.x,point9.y,0,0,207,255,distance,false,"purple");
	    arcA_10.startArcDraw();
		 
		 pointsArcArc =  findArcIntersectionPoint(arcA_10,arcA_8);
		var point10 = pointsArcArc.pointA;
		  if(drawFlag){	
		  drawPoint(context,point10,"blue");
		}
		
		 var pointA = pointOfIntersectionOfAxies(pointB.x,pointB.y,pointF.x,pointF.y, 
		                                   pointD.x,pointD.y,point10.x,point10.y)
		 drawLineBetweenTwoPoints(context,pointD,pointA,"red");
		  setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-15,pointA.y);	
         displayText2(context,pointB.x+45,pointB.y+15,"BC");
           displayText2(context,pointC.x+20,pointC.y-35,"AB");		 
		
	}
	
	
	function chapter_7_2_Q_10_pic1(context, x1,y1,x2,y2){
		var drawFlag = true;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(100,10);	
	drawLineBetweenTwoPoints(context,armBCBegin,armBCEnd,"red");
	setPointName(armBCBegin,"a");
	displayPointName(context, armBCBegin,armBCBegin.x-25,armBCBegin.y+5);
	
	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(160,30);	
	drawLineBetweenTwoPoints(context,armABBegin,armABEnd,"red");
	 setPointName(armABBegin,"s");
	 displayPointName(context, armABBegin,armABBegin.x-25,armABBegin.y+5);	
	   
		
	}
	
	
	
	function chapter_7_2_Q_10_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(115,10);	
	displayPointName(context, armBCBegin,armBCBegin.x-25,armBCBegin.y+5);
	
	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(160,30);	

// draw point B;
	var pointB =  new Point(x1,y1);
	 
	 setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-10,pointB.y+15);
	
	// draw point P
	 var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
	
	// take part korno
	var distance = distanceBetweenTwoPoints(armABBegin, armABEnd);
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,355,365,distance,false,"purple");
	arcA_1.startArcDraw();
	
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var pointD = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointD,"blue");
		}
		
		 setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+3,pointD.y+15);
		
		// draw arm
		
		distance = distanceBetweenTwoPoints(armBCBegin, armBCEnd);;
		var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,318,329,distance,false,"purple");
	    arcA_2.startArcDraw();
		
		var arcA_3 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,393,403,distance,false,"purple");
	    arcA_3.startArcDraw();
		
		
		
		var arcA_4 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,210,225,distance,false,"purple");
	    arcA_4.startArcDraw();
		
		var arcA_5 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,135,150,distance,false,"purple");
	    arcA_5.startArcDraw();
		
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointP);
	    var point2 = pointCirLineIntersects.pointB;
				 
		 if(drawFlag){	
		   drawPoint(context,point2,"red");
		 }
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_4);
		 var pointA = pointsArcArc.pointA;
		 var pointC = pointsArcArc.pointB;
		  if(drawFlag){	
		  drawPoint(context,pointA,"red");
		  drawPoint(context,pointB,"red");
		 }
		 
		 drawLineBetweenTwoPoints(context,pointA,pointB,"red");
		  drawLineBetweenTwoPoints(context,pointB,pointC,"red");
		   drawLineBetweenTwoPoints(context,pointC,pointD,"red");		
		 drawLineBetweenTwoPoints(context,pointA,pointD,"red");
		 
		
	     setPointName(pointA,"A");
	     displayPointName(context,pointA,pointA.x-3,pointA.y-10);
		
	    setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x-3,pointC.y+25);
				   
		
	}
	
	////////////////
	
	function chapter_7_2_Q_11_pic1(context, x1,y1,x2,y2){
		var drawFlag = true;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(160,10);	
	drawLineBetweenTwoPoints(context,armBCBegin,armBCEnd,"red");
	setPointName(armBCBegin,"a");
	displayPointName(context, armBCBegin,armBCBegin.x-25,armBCBegin.y+5);
	
	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(180,30);	
	drawLineBetweenTwoPoints(context,armABBegin,armABEnd,"red");
	 setPointName(armABBegin,"s");
	 displayPointName(context, armABBegin,armABBegin.x-25,armABBegin.y+5);	
	   
		
	}
	
	
	
	function chapter_7_2_Q_11_pic2(context, x1,y1,x2,y2){
		var drawFlag = true;
		
	 var armBCBegin = new Point(40,10);
	 var armBCEnd = new Point(160,10);	
	displayPointName(context, armBCBegin,armBCBegin.x-25,armBCBegin.y+5);
	
	 var armABBegin = new Point(40,30);
	 var armABEnd = new Point(180,30);	

// draw point B;
	var pointB =  new Point(x1,y1);
	 
	 setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-10,pointB.y+15);
	
	// draw point P
	 var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
	
	// take part korno
	var distance = distanceBetweenTwoPoints(armABBegin, armABEnd);
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,355,365,distance,false,"purple");
	arcA_1.startArcDraw();
	
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var pointD = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointD,"blue");
		}
		
		 setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+3,pointD.y+15);
		
		// draw arm
		
		distance = (distance*2 +35)/3;//distanceBetweenTwoPoints(armBCBegin, armBCEnd);
		var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,305,320,distance,false,"purple");
	    arcA_2.startArcDraw();
		
		var arcA_3 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,400,413,distance,false,"purple");
	    arcA_3.startArcDraw();
		
		
		
		var arcA_4 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,220,235,distance,false,"purple");
	    arcA_4.startArcDraw();
		
		var arcA_5 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,125,140,distance,false,"purple");
	    arcA_5.startArcDraw();
		
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointP);
	    var point2 = pointCirLineIntersects.pointB;
				 
		 if(drawFlag){	
		  // drawPoint(context,point2,"red");
		 }
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_4);
		 var pointS = pointsArcArc.pointA;
		 var pointQ = pointsArcArc.pointB;
		  if(drawFlag){	
		  drawPoint(context,pointS,"red");
		  drawPoint(context,pointQ,"red");
		 }
		 
		  setPointName(pointS,"S");
	     displayPointName(context,pointS,pointS.x-5,pointS.y-10);
		 setPointName(pointQ,"Q");
	     displayPointName(context,pointQ,pointQ.x-5,pointQ.y+25);
		 
		  drawLineBetweenTwoPoints(context,pointS,pointQ,"blue");
		  var pointM = midPointBetweenTwoPoint(pointB,pointD );
		  if(drawFlag){	
		  drawPoint(context,pointM,"red");
		  }
		   setPointName(pointM,"M");
	     displayPointName(context,pointM,pointM.x+5,pointM.y+15);
		  distance = distanceBetweenTwoPoints(armBCBegin, armBCEnd)
		  distance = distance/2;
		  
		  
		  
		var arcA_8 =new ArcDrawWithAngleRadius(context,pointM.x,pointM.y,0,0,260,280,distance,false,"purple");
	    arcA_8.startArcDraw();
		var arcA_9 =new ArcDrawWithAngleRadius(context,pointM.x,pointM.y,0,0,440,460,distance,false,"purple");
	    arcA_9.startArcDraw();
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_8,pointS,pointQ);
	    var pointA = pointCirLineIntersects.pointA;
		var pointC = pointCirLineIntersects.pointB;
		 if(drawFlag){	
		  drawPoint(context,pointA,"red");
		  drawPoint(context,pointC,"red");
		  }
		  
		   setPointName(pointA,"A");
	displayPointName(context,pointA,pointA.x-25,pointA.y+5);
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-25,pointC.y+10);
		
		 drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
		 drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
		 drawLineBetweenTwoPoints(context,pointC,pointD,"blue");		
		 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");		 
		
	}
	
	
	function chapter_7_2_Q_12_pic1(context, x1,y1,x2,y2){
		var drawFlag = true;		
		
	 var armPerimeterBegin = new Point(12,30);
	 var armPerimeterEnd = new Point(236,30);	
	drawLineBetweenTwoPoints(context,armPerimeterBegin,armPerimeterEnd,"red");
	 setPointName(armPerimeterBegin,"s");
	 displayPointName(context, armPerimeterBegin,armPerimeterBegin.x-12,armPerimeterBegin.y+5);	
	 var length =  distanceBetweenTwoPoints(armPerimeterBegin, armPerimeterEnd);
	 var armLength = length/4;
	  var arLenghtPoint =  new Point(armPerimeterBegin.x+armLength,armPerimeterBegin.y);
	 drawPoint(context,arLenghtPoint,"blue");   
		
	}
	
	function chapter_7_2_Q_12_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;		
		
	 var armPerimeterBegin = new Point(12,30);
	 var armPerimeterEnd = new Point(236,30);	
//	drawLineBetweenTwoPoints(context,armPerimeterBegin,armPerimeterEnd,"red");
	// setPointName(armPerimeterBegin,"s");
	 displayPointName(context, armPerimeterBegin,armPerimeterBegin.x-12,armPerimeterBegin.y+5);	
	 var length =  distanceBetweenTwoPoints(armPerimeterBegin, armPerimeterEnd);
	 var distance = length/4;
	  var armLength = length/4;
	//  var arLenghtPoint =  new Point(armPerimeterBegin.x+armLength,armPerimeterBegin.y);
	// drawPoint(context,arLenghtPoint,"blue");
	 
	 // draw point B;
	var pointB =  new Point(x1,y1);
	 
	 setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	
	// draw point P
	var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
	// take part BC
	
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,350,370,distance,false,"blue");
	arcA_1.startArcDraw();
	
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var pointC = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		}
		
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x+3,pointC.y+15);
		
		// draw lombo at point BC
		 var arcRadius= distance/3;
		 var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,220,360,arcRadius,false,"blue");
	     arcA_2.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointC);
	    var point2 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point2,"blue");
		 }
		 
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,218,268,arcRadius,false,"blue");
	     arcA_3.startArcDraw();
		 
		  var pointsArcArc =   findArcIntersectionPoint(arcA_3,arcA_2);
		  var point3 = pointsArcArc.pointB;
		 
		 if(drawFlag){	
		   drawPoint(context,point3,"red");
		 }
		 
		  var arcA_4 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,160,205,arcRadius,false,"purple");
	     arcA_4.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_4,arcA_2);
		  var point4 = pointsArcArc.pointB;
		  
		   if(drawFlag){	
		   drawPoint(context,point4,"red");
		 }
		 
		  var arcA_5 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,220,280,arcRadius,false,"purple");
	     arcA_5.startArcDraw();
		 var arcA_6 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,270,320,arcRadius,false,"purple");
	     arcA_6.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_5,arcA_6);
		  var point6 = pointsArcArc.pointB;
		  
		   if(drawFlag){	
		   drawPoint(context,point6,"red");
		 }
		 var pointQ = PointAtCertainDistance(pointB, point6, 80);
		 if(drawFlag){	
		   drawPoint(context,pointQ,"red");
		 }
		 drawLineBetweenTwoPoints(context,pointB,pointQ,"red");
		 setPointName(pointQ,"Q");
	    displayPointName(context,pointQ,pointQ.x-20,pointQ.y+5);
		
		//// end of drawing lombo at point B
	   
	   //// get AB portion
	     var arcA_7 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,250,290,armLength,false,"blue");
	     arcA_7.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_7,pointB,pointQ);
	    var pointA = pointCirLineIntersects.pointB;
		 if(drawFlag){	
		   drawPoint(context,pointA,"red");
		 }
		 
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-20,pointA.y+5);
		
		 var arcA_8 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,352,380,armLength,false,"blue");
	     arcA_8.startArcDraw();
		  var arcA_9 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,260,290,armLength,false,"blue");
	     arcA_9.startArcDraw();
		 
		  pointsArcArc =   findArcIntersectionPoint(arcA_8,arcA_9);
		  var pointD = pointsArcArc.pointA;
		   if(drawFlag){	
		   drawPoint(context,pointD,"red");
		 }
		 setPointName(pointD,"D");
	    displayPointName(context,pointA,pointD.x+10,pointD.y+5);
		
		 drawLineBetweenTwoPoints(context,pointA,pointD,"red");
		  drawLineBetweenTwoPoints(context,pointC,pointD,"red");
		
	}
	
	
	
	
	