function chapter_7_1_Q_3_pic1(context, x1,y1,x2,y2){
	// angle x
	var angle_x_begin = new Point(20,50);
	var angle_x_end_1 = new Point(60,50);
	var angle_x_end_2 = new Point(37,20);
	
	// draw angle x
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_2,"red");

	setPointName(angle_x_begin,"x");
	displayPointName(context,angle_x_begin,angle_x_begin.x+15,angle_x_begin.y-3);
	
	
	// angle y
	var angle_y_begin = new Point(20,100);
	var angle_y_end_1 = new Point(60,100);
	var angle_y_end_2 = new Point(37,70);
	
	// draw angle x
	drawLineBetweenTwoPoints(context,angle_y_begin,angle_y_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_y_begin,angle_y_end_2,"red");

	setPointName(angle_y_begin,"y");
	displayPointName(context,angle_y_begin,angle_y_begin.x+15,angle_y_begin.y-3);
	
	
     var pointLomboBegin = new Point(x1,y1);
	 var pointLomboEnd = new Point(x2,y2);
	 drawLineBetweenTwoPoints(context,pointLomboBegin,pointLomboEnd,"red");
	 setPointName(pointLomboBegin,"d");
	displayPointName(context,pointLomboBegin,pointLomboBegin.x+5,pointLomboBegin.y+40);
	 
	}
	
	function chapter_7_1_Q_3_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;

	// angle x
	var angle_x_begin = new Point(20,50);
	var angle_x_end_1 = new Point(60,50);
	var angle_x_end_2 = new Point(37,20);
	
	
	
	// angle y
	var angle_y_begin = new Point(20,100);
	var angle_y_end_1 = new Point(60,100);
	var angle_y_end_2 = new Point(37,70);
	
	
     var pointLomboBegin = new Point(x1,y1);
	 var pointLomboEnd = new Point(x2,y2+20);
	 drawLineBetweenTwoPoints(context,pointLomboBegin,pointLomboEnd,"red");
	 setPointName(pointLomboBegin,"A");
	displayPointName(context,pointLomboBegin,pointLomboBegin.x-3,pointLomboBegin.y-5);
	
	setPointName(pointLomboEnd,"G");
	displayPointName(context,pointLomboEnd,pointLomboEnd.x-3,pointLomboEnd.y+20);
	var radius=35;
	var pointD = new Point(x2,y2);
	setPointName(pointD,"D");
	displayPointName(context, pointD,pointD.x+5,pointD.y+15);
	
	var distance =distanceBetweenTwoPoints(pointLomboBegin, pointD);
	
	 
	 /// arc to take AD
	 var arcA_lombo =new ArcDrawWithAngleRadius(context,pointLomboBegin.x,pointLomboBegin.y,0,0,75,100,distance,false,"purple");
	 arcA_lombo.startArcDraw();
	 if(drawFlag){		 
		 drawPoint(context,pointD,"blue");
	 }
	 
	
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointLomboBegin.x,pointLomboBegin.y,0,0,90,220,radius,false,"purple");
	 arcA_1.startArcDraw();
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointLomboBegin,pointLomboEnd);
	 var pointCirLineIntersect_1 = pointCirLineIntersects.pointB;
	 if(drawFlag){
	   drawPoint(context,pointCirLineIntersect_1,"blue");
	 }
	 
	 
	 var arcA_2 =new ArcDrawWithAngleRadius(context,pointCirLineIntersect_1.x,pointCirLineIntersect_1.y,0,0,190,230,radius,false,"purple");
	 arcA_2.startArcDraw();
	 pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointLomboBegin,pointLomboEnd);
	 var pointIntersect_2 = pointCirLineIntersects.pointA;
	 
	var pointsArcArc =  findArcIntersectionPoint(arcA_1,arcA_2);
	var point3 = pointsArcArc.pointB;
	if(drawFlag){	
	   drawPoint(context,point3,"blue");
	}
	 
	 var arcA_3 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,245,290,radius,false,"purple");
	 arcA_3.startArcDraw();
	 
	 pointsArcArc =  findArcIntersectionPoint(arcA_1,arcA_3);
	 var point4 = pointsArcArc.pointB;
	 if(drawFlag){	
	    drawPoint(context,point4,"blue");
	 }
	 var radius=30;
	  var arcA_5 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,185,240,radius,false,"purple");
	  arcA_5.startArcDraw();
	  
	    var arcA_6 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,125,170,radius,false,"purple");
	  arcA_6.startArcDraw();
	 
	   pointsArcArc =  findArcIntersectionPoint(arcA_5,arcA_6);
	 var point7 = pointsArcArc.pointA;
	 if(drawFlag){	
	    drawPoint(context,point7,"blue");
	 }
	 
	 var radius=35;
	 drawLineBetweenTwoPoints(context,point7,pointLomboBegin,"red");
	 
	 // get point P
	 var pointP= PointAtCertainDistance(pointLomboBegin, point7, 80);
	 
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y-5);
	 
	 // get point Q
	 var point8= PointAtCertainDistance(pointLomboBegin, point7, -50);
	// drawLineBetweenTwoPoints(context,point7,point8,"red");
	drawLineBetweenTwoPoints(context,pointP,point8,"red");
	 
	 setPointName(point8,"Q");
	displayPointName(context,point8,point8.x-3,point8.y-5);
	 
	 /// drawing at point  D
	 radius= 30;
	 var arcA_11 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,115,279,radius,false,"purple");
	 arcA_11.startArcDraw();
	 var pointCirLineIntersects2 = circleLineIntersectionPoints(arcA_11,pointLomboBegin,pointD);
	 var pointCirLineIntersect_2 = pointCirLineIntersects2.pointA;
	if(drawFlag){	
	   drawPoint(context,pointCirLineIntersect_2,"blue");
	}
	 
	 var arcA_12 =new ArcDrawWithAngleRadius(context,pointCirLineIntersect_2.x,pointCirLineIntersect_2.y,0,0,130,170,radius,false,"purple");
	 arcA_12.startArcDraw();
	 
	  pointsArcArc =  findArcIntersectionPoint(arcA_11,arcA_12);
	  var point12 = pointsArcArc.pointA;
	  if(drawFlag){	
	     drawPoint(context,point12,"blue");
	  }
	  
	  var arcA_13 =new ArcDrawWithAngleRadius(context,point12.x,point12.y,0,0,60,120,radius,false,"purple");
	 arcA_13.startArcDraw();
	 
	  pointsArcArc =  findArcIntersectionPoint(arcA_11,arcA_13);
	  var point13 = pointsArcArc.pointA;
	  if(drawFlag){	
	     drawPoint(context,point13,"blue");
	  }
	  
	  radius=40;
	   var arcA_14 =new ArcDrawWithAngleRadius(context,point12.x,point12.y,0,0,140,180,radius,false,"purple");
	  arcA_14.startArcDraw();
	  
	   var arcA_15 =new ArcDrawWithAngleRadius(context,point13.x,point13.y,0,0,180,220,radius,false,"purple");
	  arcA_15.startArcDraw();
	 
	  pointsArcArc =  findArcIntersectionPoint(arcA_14,arcA_15);
	  var point15 = pointsArcArc.pointB;
	  if(drawFlag){	
	    drawPoint(context,point15,"red");	  
	  }
	  
	    radius=30;
	//   drawLineBetweenTwoPoints(context,pointD,point15,"red");
	   
	    var point16= PointAtCertainDistance(pointD, point15, -70);
		 setPointName(point16,"N");
	    displayPointName(context,point16,point16.x-3,point16.y+15);
	
	    drawLineBetweenTwoPoints(context,point16,pointD,"red");
		 var point17= PointAtCertainDistance(pointD, point15, 70);
		  setPointName(point17,"M");
	    displayPointName(context,point17,point17.x-15,point17.y+15);
	    drawLineBetweenTwoPoints(context,point17,pointD,"red");
		
		
		// draw x angle at A
		
		var angle_x = 360+180-getAngle(angle_x_end_1, angle_x_begin, angle_x_end_2);
		var x_anglePoint = getPointAtAnAngle(pointLomboBegin,angle_x,20);
		var distance2 = distanceBetweenTwoPoints(pointLomboBegin, x_anglePoint);
		 var arcA_18 =new ArcDrawWithAngleRadius(context,pointLomboBegin.x,pointLomboBegin.y,0,0,100,186,distance2,false,"purple");
	      arcA_18.startArcDraw();
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_18,pointLomboBegin,pointP);
	     var point18 = pointCirLineIntersects.pointB;
		 if(drawFlag){	
		   drawPoint(context,point18,"blue");
		 }
		 
		 var arcA_19 =new ArcDrawWithAngleRadius(context,point18.x,point18.y,0,0,25,90,distance2,false,"purple");
	      arcA_19.startArcDraw();		
		
		 if(drawFlag){	
		    drawPoint(context,x_anglePoint,"blue");
		 }
		var pointB = pointOfIntersectionOfAxies(pointLomboBegin.x,pointLomboBegin.y,
		                x_anglePoint.x,x_anglePoint.y,
						pointD.x,pointD.y,point17.x,point17.y);
						
		if(drawFlag){
		         drawPoint(context,pointB,"blue");
		}
		
		  setPointName(pointB,"B");
	     displayPointName(context,pointB,pointB.x-5,pointB.y+15);
		
		drawLineBetweenTwoPoints(context,pointLomboBegin,pointB,"red");
		
		var angle_y = getAngle(angle_y_end_1, angle_y_begin, angle_y_end_2);
		var y_anglePoint = getPointAtAnAngle(pointLomboBegin,angle_y,20);
		distance2 = distanceBetweenTwoPoints(pointLomboBegin, y_anglePoint);
		if(drawFlag){
		  drawPoint(context,y_anglePoint,"blue");
		}
		var arcA_20 =new ArcDrawWithAngleRadius(context,pointLomboBegin.x,pointLomboBegin.y,0,0,0,82,distance2,false,"purple");
	      arcA_20.startArcDraw();
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_20,pointLomboBegin,pointP);
		 var point20 = pointCirLineIntersects.pointA;
		 if(drawFlag){	
		   drawPoint(context,point20,"blue");
		 }
		 
		  var arcA_21 =new ArcDrawWithAngleRadius(context,point20.x,point20.y,0,0,75,150,distance2,false,"purple");
	      arcA_21.startArcDraw();	
		
		
		var pointC = pointOfIntersectionOfAxies(pointLomboBegin.x,pointLomboBegin.y,
		                y_anglePoint.x,y_anglePoint.y,
						pointD.x,pointD.y,point17.x,point17.y);
						
		 setPointName(pointC,"C");
	     displayPointName(context,pointC,pointC.x-5,pointC.y+15);
		if(drawFlag){
		  drawPoint(context,pointC,"red");
		
		}
		drawLineBetweenTwoPoints(context,pointLomboBegin,pointC,"red");
		
		 
	}
	
	function chapter_7_1_Q_4_pic1(context, x1,y1,x2,y2){
	
	var armAtivujBegin = new Point(20,10);
	var armAtivujEnd = new Point(106,10);	
	drawLineBetweenTwoPoints(context,armAtivujBegin,armAtivujEnd,"red");
	setPointName(armAtivujBegin,"a");
	displayPointName(context, armAtivujBegin,armAtivujBegin.x-15,armAtivujBegin.y+5);
	
	var armSumBegin = new Point(20,30);
	var armSumEnd = new Point(135,30);	
	drawLineBetweenTwoPoints(context,armSumBegin,armSumEnd,"red");
	setPointName(armSumBegin,"s");
	displayPointName(context, armSumBegin,armSumBegin.x-15,armSumBegin.y+5);	
	
		 
	}
	
	function chapter_7_1_Q_4_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;
		
		var armAtivujBegin = new Point(20,10);
	var armAtivujEnd = new Point(106,10);	
	//drawLineBetweenTwoPoints(context,armBaseBegin,armBaseEnd,"red");
	//setPointName(armBaseBegin,"a");
	//displayPointName(context, armBaseBegin,armBaseBegin.x-15,armBaseBegin.y+5);
	
	var armSumBegin = new Point(20,30);
	var armSumEnd = new Point(135,30);	
//	drawLineBetweenTwoPoints(context,armSumBegin,armSumEnd,"red");
//	setPointName(armSumBegin,"s");
	//displayPointName(context, armSumBegin,armSumBegin.x-15,armSumBegin.y+5);
	
	// draw point P;
	var pointP =  new Point(x1,y1);
	 
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x,pointP.y+15);
	
	// draw point P;
	var pointQ =  new Point(x2,y2);
	 
	 setPointName(pointQ,"Q");
	displayPointName(context,pointQ,pointQ.x,pointQ.y+15);
	drawLineBetweenTwoPoints(context,pointP,pointQ,"red");
	
	// take part PC
	var distance = distanceBetweenTwoPoints(armSumBegin, armSumEnd);
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointP.x,pointP.y,0,0,355,365,distance,false,"purple");
	arcA_1.startArcDraw();
	
	var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointP,pointQ);
	    var pointC = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		}
		
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x+3,pointC.y+15);
	
	 // draw lombo at point P
	 var radius= 20;
	  var arcA_2 =new ArcDrawWithAngleRadius(context,pointP.x,pointP.y,0,0,190,360,radius,false,"purple");
	 arcA_2.startArcDraw();
	 
	 pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointP,pointQ);
	    var point2 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point2,"blue");
		}
		
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,215,260,radius,false,"purple");
	     arcA_3.startArcDraw();
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_3,arcA_2);
		var point3 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point3,"red");
		 }
		 
		 var arcA_4 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,160,210,radius,false,"purple");
	     arcA_4.startArcDraw();
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_4,arcA_2);
		var point4 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point4,"red");
		 }
		 
		 
		 var arcA_5 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,220,260,radius,false,"purple");
	     arcA_5.startArcDraw();
		 
		  var arcA_6 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,280,320,radius,false,"purple");
	     arcA_6.startArcDraw();
		 
		  var pointsArcArc =  findArcIntersectionPoint(arcA_5,arcA_6);
		var point6 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point6,"red");
		 }
		 
		 // draw point R
		 var pointR= PointAtCertainDistance(pointP, point6, 80);
		  if(drawFlag){	
		   drawPoint(context,pointR,"red");
		 }
		
		 setPointName(pointR,"R");
	    displayPointName(context,pointR,pointR.x-15,pointR.y+5);
		drawLineBetweenTwoPoints(context,pointP,pointR,"red");
		
		//// divide angle equally
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointP,pointR);
	    var point7 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point7,"red");
		}
		radius = 22;
		 var arcA_8 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,260,300,radius,false,"purple");
	     arcA_8.startArcDraw();
	 
	 
	  var arcA_9 =new ArcDrawWithAngleRadius(context,point7.x,point7.y,0,0,330,375,radius,false,"purple");
	     arcA_9.startArcDraw();
		  pointsArcArc =  findArcIntersectionPoint(arcA_8,arcA_9);
		var point9 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point9,"red");
		 }
		 
		 var pointS= PointAtCertainDistance(pointP, point9, 160);
		  if(drawFlag){	
		   drawPoint(context,pointS,"red");
		 }
		 
		 setPointName(pointS,"S");
	    displayPointName(context,pointS,pointS.x+3,pointS.y-5);
		drawLineBetweenTwoPoints(context,pointP,pointS,"red");
		
		//// draw arc at C with length ativuj		
	
	    distance = distanceBetweenTwoPoints(armAtivujBegin, armAtivujEnd);
		 var arcA_10 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,195,255,distance,false,"purple");
	     arcA_10.startArcDraw();
		 
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_10,pointP,pointS);
	    var pointA = pointCirLineIntersects.pointA;
		if(drawFlag){	
		   drawPoint(context,pointA,"red");
		}
		
		 var pointA1 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointA1,"red");
		}
		
		 setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-15,pointA.y-5);
		 setPointName(pointA1,"A'");
	    displayPointName(context,pointA1,pointA1.x-15,pointA1.y-5);
		 
		 // draw lombo at A
		 radius = 45;
		  var arcA_11 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,50,133,radius,false,"purple");
	     arcA_11.startArcDraw();
		 
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_11,pointP,pointQ);
	    var point11 = pointCirLineIntersects.pointA;
		var point12 = pointCirLineIntersects.pointB;
		
		if(drawFlag){	
		   drawPoint(context,point11,"red");
		   drawPoint(context,point12,"red");
		}
		
		 var arcA_12 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,50,70,radius,false,"purple");
	     arcA_12.startArcDraw();
		 
		 var arcA_13 =new ArcDrawWithAngleRadius(context,point12.x,point12.y,0,0,110,133,radius,false,"purple");
	     arcA_13.startArcDraw();
		
		pointsArcArc =  findArcIntersectionPoint(arcA_12,arcA_13);
		var point13 = pointsArcArc.pointB;
		if(drawFlag){	
		   drawPoint(context,point13,"red");
		  }
		
		var pointB= perpendicularPointOnLineFromAPoint(pointP,pointC,pointA)
										   
		 if(drawFlag){	
		   drawPoint(context,pointB,"red");
		  }
		  
		   setPointName(pointB,"B");
	      displayPointName(context,pointB,pointB.x-5,pointB.y+15);
		  
		  drawLineBetweenTwoPoints(context,pointA,pointB,"red");
		  
		  // draw B'
		  radius = 80;
		  var arcA_15 =new ArcDrawWithAngleRadius(context,pointA1.x,pointA1.y,0,0,50,133,radius,false,"purple");
	     arcA_15.startArcDraw();
		 
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_15,pointP,pointQ);
	    var point15 = pointCirLineIntersects.pointA;
		var point16 = pointCirLineIntersects.pointB;
		
		if(drawFlag){	
		   drawPoint(context,point15,"red");
		   drawPoint(context,point16,"red");
		}
		 radius = 50;
		var arcA_17 =new ArcDrawWithAngleRadius(context,point15.x,point15.y,0,0,50,80,radius,false,"purple");
	     arcA_17.startArcDraw();
		 
		 var arcA_18 =new ArcDrawWithAngleRadius(context,point16.x,point16.y,0,0,100,130,radius,false,"purple");
	     arcA_18.startArcDraw();
		 
		 pointsArcArc =  findArcIntersectionPoint(arcA_17,arcA_18);
		var point18 = pointsArcArc.pointB;
		if(drawFlag){	
		   drawPoint(context,point18,"red");
		  }
		  
		
		  var pointB1= perpendicularPointOnLineFromAPoint(pointP,pointC,pointA1)
		  drawLineBetweenTwoPoints(context,pointA1,pointB1,"red");
										   
		 if(drawFlag){	
		   drawPoint(context,pointB1,"red");
		  }
		  
		   setPointName(pointB1,"B'");
	      displayPointName(context,pointB1,pointB1.x-5,pointB1.y+15);
		  
		  drawLineBetweenTwoPoints(context,pointA,pointC,"red");
		  drawLineBetweenTwoPoints(context,pointA1,pointC,"red");
		
	
	}
	
	
	function chapter_7_1_Q_5_pic1(context, x1,y1,x2,y2){
	// angle x
	var angle_x_begin = new Point(20,50);
	var angle_x_end_1 = new Point(80,50);
	var angle_x_end_2 = new Point(75,20);
	
	// draw angle x
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_2,"red");

	setPointName(angle_x_begin,"x");
	displayPointName(context,angle_x_begin,angle_x_begin.x+25,angle_x_begin.y-3);
	
	var armSumBegin = new Point(20,80);
	var armSumEnd = new Point(157,80);	
	drawLineBetweenTwoPoints(context,armSumBegin,armSumEnd,"red");
	setPointName(armSumBegin,"a");
	displayPointName(context, armSumBegin,armSumBegin.x-15,armSumBegin.y+5);
	
	var heightBegin = new Point(20,100);
	var heightEnd = new Point(70,100);
	drawLineBetweenTwoPoints(context,heightBegin,heightEnd,"red");
	
	setPointName(heightBegin,"h");
	displayPointName(context, heightBegin,heightBegin.x-15,heightBegin.y+5);

	 
	}
	
	function chapter_7_1_Q_5_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;
		
		// angle x
	var angle_x_begin = new Point(20,50);
	var angle_x_end_1 = new Point(60,50);
	var angle_x_end_2 = new Point(75,20);
	
	var armSumBegin = new Point(20,80);
	var armSumEnd = new Point(180,80);		
	
	var heightBegin = new Point(20,100);
	var heightEnd = new Point(70,100);
	
	// draw point B;
	var pointB =  new Point(x1,y1);
	 
	 setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	
	// draw point B
	var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
	// draw angle x
	
	    var angle_x =360- getAngle(angle_x_end_1, angle_x_begin, angle_x_end_2);
		var x_anglePoint = getPointAtAnAngle(pointB,angle_x,40);
		
		
		var distance2 = distanceBetweenTwoPoints(pointB, x_anglePoint);
		var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,315,360,distance2,false,"purple");
	    arcA_1.startArcDraw();
		var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var point1 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,x_anglePoint,"blue");
		 }
		 
		 if(drawFlag){	
		   drawPoint(context,point1,"blue");
		 }
		 var distance2 = distanceBetweenTwoPoints(point1, x_anglePoint);
		 var arcA_2 =new ArcDrawWithAngleRadius(context,point1.x,point1.y,0,0,200,280,distance2,false,"purple");
	    arcA_2.startArcDraw();		
		
		   
	    var pointM= PointAtCertainDistance(pointB, x_anglePoint, 170);
		 setPointName(pointM,"M");
	    displayPointName(context,pointM,pointM.x-3,pointM.y-2);
		
		drawLineBetweenTwoPoints(context,pointB,pointM,"red");
		
		// draw N
		distance2= distanceBetweenTwoPoints(armSumBegin, armSumEnd);
		var arcA_3 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,328,335,distance2,false,"purple");
	    arcA_3.startArcDraw();
		var pointCirLineIntersects = circleLineIntersectionPoints(arcA_3,pointB,pointM);
	    var pointN = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointN,"blue");
		 }
		 
		 setPointName(pointN,"N");
	    displayPointName(context,pointN,pointN.x-20,pointN.y);
		
		// draw lombo at point B
		  radius=20;
		  var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,220,360,radius,false,"purple");
	      arcA_4.startArcDraw();
		   pointCirLineIntersects = circleLineIntersectionPoints(arcA_4,pointB,pointP);
	      var point4 = pointCirLineIntersects.pointB;
		  if(drawFlag){	
		   drawPoint(context,point4,"blue");
		 }
		 		 
		  var arcA_5 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,220,275,radius,false,"purple");
	      arcA_5.startArcDraw();
		   var pointsArcArc =  findArcIntersectionPoint(arcA_5,arcA_4);
		   var point5 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point5,"blue");
		 }		 
		 
		 var arcA_6 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,155,205,radius,false,"purple");
	      arcA_6.startArcDraw();
		  var pointsArcArc =  findArcIntersectionPoint(arcA_6,arcA_4);
		   var point6 = pointsArcArc.pointB;
		   if(drawFlag){	
		   drawPoint(context,point6,"blue");
		 }		
		 
		  var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,220,260,radius,false,"purple");
	      arcA_7.startArcDraw();		  
		  
		  var arcA_8 =new ArcDrawWithAngleRadius(context,point6.x,point6.y,0,0,280,320,radius,false,"purple");
	      arcA_8.startArcDraw();
		  
		  pointsArcArc =  findArcIntersectionPoint(arcA_7,arcA_8);
		   var point9 = pointsArcArc.pointB;
		  if(drawFlag){	
		   drawPoint(context,point9,"blue");
		 }
		 
		  var pointQ= PointAtCertainDistance(pointB, point9, 110);
		   if(drawFlag){	
		   drawPoint(context,pointQ,"blue");
		 }
		 
		  setPointName(pointQ,"Q");
	    displayPointName(context,pointQ,pointQ.x-20,pointQ.y+10);
		
		drawLineBetweenTwoPoints(context,pointB,pointQ,"blue");
		
	    var height = distanceBetweenTwoPoints(heightBegin, heightEnd);
		 var arcA_10 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,260,280,height,false,"purple");
	     arcA_10.startArcDraw();
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_10,pointB,pointQ);
	      var pointD = pointCirLineIntersects.pointB;
		  if(drawFlag){	
		   drawPoint(context,pointD,"blue");
		 }
		 
		   setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x-20,pointD.y+10);		
			
		// draw lombo at point B
		  radius=20;
		  var arcA_11 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,240,420,radius,false,"purple");
	      arcA_11.startArcDraw();
		   pointCirLineIntersects = circleLineIntersectionPoints(arcA_11,pointB,pointQ);
	      var point11 = pointCirLineIntersects.pointB;
		  if(drawFlag){	
		   drawPoint(context,point11,"blue");
		 }
		 	 
		
		 var arcA_12 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,360,60,radius,false,"purple");
	      arcA_12.startArcDraw();
		  var pointsArcArc =  findArcIntersectionPoint(arcA_12,arcA_11);
		   var point12 = pointsArcArc.pointA;
		   if(drawFlag){	
		   drawPoint(context,point12,"blue");
		 }		 
		 
		   var arcA_13 =new ArcDrawWithAngleRadius(context,point12.x,point12.y,0,0,60,120,radius,false,"purple");
	      arcA_13.startArcDraw();
		  var pointsArcArc =  findArcIntersectionPoint(arcA_11,arcA_13);
		   var point13 = pointsArcArc.pointB;
		   if(drawFlag){	
		     drawPoint(context,point13,"blue");
		 }
		 
		  radius= 40;		  
		  var arcA_14 =new ArcDrawWithAngleRadius(context,point12.x,point12.y,0,0,0,30,radius,false,"purple");
	      arcA_14.startArcDraw();
		  
		  var arcA_15 =new ArcDrawWithAngleRadius(context,point13.x,point13.y,0,0,330,5,radius,false,"purple");
	      arcA_15.startArcDraw();
		  
		   var pointsArcArc =  findArcIntersectionPoint(arcA_14,arcA_15);
		   var point15 = pointsArcArc.pointA;
		   if(drawFlag){	
		     drawPoint(context,point15,"blue");
		 }
		 		 
		  var pointF= PointAtCertainDistance(pointD, point15, 130);
		   if(drawFlag){	
		   drawPoint(context,pointF,"blue");
		 }
		 drawLineBetweenTwoPoints(context,pointD,pointF,"blue");
		 
		setPointName(pointF,"F");
	    displayPointName(context,pointF,pointF.x+5,pointF.y+5);
		
		var pointA= pointOfIntersectionOfAxies(pointB.x,pointB.y,pointM.x,pointM.y,
                                		pointD.x,pointD.y,pointF.x,pointF.y);
										
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-10,pointA.y-5);								
		if(drawFlag){	
		   drawPoint(context,pointA,"blue");
		 }
		 
		 distance = distanceBetweenTwoPoints(pointA, pointN);
		 
		  var arcA_17 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,50,130,distance,false,"purple");
	      arcA_17.startArcDraw();
		  
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_17,pointB,pointP);
	      var pointC = pointCirLineIntersects.pointA;
		   var pointC2 = pointCirLineIntersects.pointB;
		  if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		 }
		  if(drawFlag){	
		   drawPoint(context,pointC2,"blue");
		 }
		 
		 drawLineBetweenTwoPoints(context,pointA,pointC,"red");
		  drawLineBetweenTwoPoints(context,pointA,pointC2,"red");
		  
		 setPointName(pointC,"C");
	     displayPointName(context,pointC,pointC.x-10,pointC.y+15);	
		 
         setPointName(pointC2,"C'");
	     displayPointName(context,pointC2,pointC2.x,pointC2.y+15);		 
		
		
	}
		
	
	function chapter_7_1_Q_6_pic1(context, x1,y1,x2,y2){
	
	var armSumBegin = new Point(20,10);
	var armSumEnd = new Point(210,10);	
	drawLineBetweenTwoPoints(context,armSumBegin,armSumEnd,"red");
	setPointName(armSumBegin,"a");
	displayPointName(context, armSumBegin,armSumBegin.x-15,armSumBegin.y+5);
	
		 
	}
	
	function chapter_7_1_Q_6_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;
		
		
	var armSumBegin = new Point(20,10);
	var armSumEnd = new Point(210,10);		
	var distance = distanceBetweenTwoPoints(armSumBegin, armSumEnd);
	var armLength =  distance/3;
	
	// draw point B;
	var pointA =  new Point(x1,y1);
	 
	 setPointName(pointA,"A");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	
	// draw point P
	 var pointP = new Point(x2,y2);
	 setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-3,pointP.y+15);
	drawLineBetweenTwoPoints(context,pointA,pointP,"red");
	
	 var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,350,370,armLength,false,"purple");
	 arcA_1.startArcDraw();	
	 
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointA,pointP);
	    var pointB = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointB,"blue");
		}
		
		
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,290,310,armLength,false,"purple");
	 arcA_2.startArcDraw();
	 
	 var arcA_3 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,230,250,armLength,false,"purple");
	 arcA_3.startArcDraw();
	 
	 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
		   var pointC = pointsArcArc.pointA;
		  if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		 }	

 drawLineBetweenTwoPoints(context,pointA,pointC,"red");
 drawLineBetweenTwoPoints(context,pointB,pointC,"red");	

    setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x+3,pointB.y+15); 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
		
			
	}
	
	
	
	
	function chapter_7_1_Q_7_pic1(context, x1,y1,x2,y2){
	
	var armBaseBegin = new Point(20,10);
	var armBaseEnd = new Point(120,10);	
	drawLineBetweenTwoPoints(context,armBaseBegin,armBaseEnd,"red");
	setPointName(armBaseBegin,"a");
	displayPointName(context, armBaseBegin,armBaseBegin.x-15,armBaseBegin.y+5);
	
	var armDiffBegin = new Point(20,30);
	var armDiffEnd = new Point(70,30);	
	drawLineBetweenTwoPoints(context,armDiffBegin,armDiffEnd,"red");
	setPointName(armDiffBegin,"d");
	displayPointName(context, armDiffBegin,armDiffBegin.x-15,armDiffBegin.y+5);
	
	// angle x
	var angle_x_begin = new Point(40,60);
	var angle_x_end_1 = new Point(80,60);
	var angle_x_end_2 = new Point(33,40);
	
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_1,"red");
	drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_2,"red");
	
	setPointName(angle_x_begin,"x");
	displayPointName(context, angle_x_begin,angle_x_begin.x+5,angle_x_begin.y-5);
	
		 
	}
	
	function chapter_7_1_Q_7_pic2(context, x1,y1,x2,y2){
		var drawFlag = false;
		
		var armBaseBegin = new Point(20,10);
	 var armBaseEnd = new Point(120,10);	
	//drawLineBetweenTwoPoints(context,armBaseBegin,armBaseEnd,"red");
	setPointName(armBaseBegin,"a");
	//displayPointName(context, armBaseBegin,armBaseBegin.x-15,armBaseBegin.y+5);
	
	var armDiffBegin = new Point(20,30);
	var armDiffEnd = new Point(70,30);	
	//drawLineBetweenTwoPoints(context,armDiffBegin,armDiffEnd,"red");
	setPointName(armDiffBegin,"d");
//	displayPointName(context, armDiffBegin,armDiffBegin.x-15,armDiffBegin.y+5);
	
	// angle x
	var angle_x_begin = new Point(40,60);
	var angle_x_end_1 = new Point(80,60);
	var angle_x_end_2 = new Point(33,40);
	
	//drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_1,"red");
	//drawLineBetweenTwoPoints(context,angle_x_begin,angle_x_end_2,"red");
	
	setPointName(angle_x_begin,"x");
//	displayPointName(context, angle_x_begin,angle_x_begin.x+5,angle_x_begin.y-5);


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
	var distance = distanceBetweenTwoPoints(armBaseBegin, armBaseEnd);
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,355,365,distance,false,"purple");
	arcA_1.startArcDraw();
	
	 var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointP);
	    var pointC = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointC,"blue");
		}
		
		 setPointName(pointC,"C");
	    displayPointName(context,pointC,pointC.x+3,pointC.y+15);
		
		// draw angle x at point C
		 var angle_x = 180+getAngle(angle_x_end_1, angle_x_begin, angle_x_end_2);
		var x_anglePoint = getPointAtAnAngle(pointC,angle_x,40);
		
		if(drawFlag){	
		   drawPoint(context,x_anglePoint,"blue");
		}
		
		distance = distanceBetweenTwoPoints(pointC, x_anglePoint);
		var arcA_2 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,180,340,distance,false,"purple");
	    arcA_2.startArcDraw();
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointP);
	    var point2 = pointCirLineIntersects.pointA;
				 
		 if(drawFlag){	
		   drawPoint(context,point2,"blue");
		 }
		 
		  distance = distanceBetweenTwoPoints(point2, x_anglePoint);
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,315,340,distance,false,"purple");
	    arcA_3.startArcDraw();
		
		var pointsArcArc =  findArcIntersectionPoint(arcA_3,arcA_2);
		var point3 = pointsArcArc.pointA;
		  if(drawFlag){	
		   drawPoint(context,point3,"red");
		 }
		 
		 // draw point F
		 var pointF= PointAtCertainDistance(pointC, point3, 100);
		  if(drawFlag){	
		   drawPoint(context,pointF,"red");
		 }
		
		 setPointName(pointF,"F");
	    displayPointName(context,pointF,pointF.x+3,pointF.y+15);
		drawLineBetweenTwoPoints(context,pointC,pointF,"red");
		
		// drawing point G
		 var pointG= PointAtCertainDistance(pointC, point3, -85);
		  if(drawFlag){	
		   drawPoint(context,pointG,"red");
		 }
		 drawLineBetweenTwoPoints(context,pointC,pointG,"blue");
		  setPointName(pointG,"G");
	    displayPointName(context,pointG,pointG.x+3,pointG.y+15);
		
		//  drawing point D
		 distance = distanceBetweenTwoPoints(armDiffBegin, armDiffEnd);
		  var arcA_4 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,100,120,distance,false,"purple");
	     arcA_4.startArcDraw();
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_4,pointC,pointG);
	    var pointD = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,pointD,"blue");
		 }
		 setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+3,pointD.y+15);
		drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
		
		 var angle_d = getAngle(pointB,pointD, pointC);
		var d_anglePoint = getPointAtAnAngle(pointD,angle_d,20);
		
		if(drawFlag){	
		   drawPoint(context,d_anglePoint,"red");
		 }
		 distance = 20;
		  var arcA_5 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,190,320,distance,false,"purple");
	     arcA_5.startArcDraw();
		 
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_5,pointD,pointB);
	    var point5 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point5,"red");
		 }
		 
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_5,pointD,pointC);
	    var point6 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point6,"red");
		 }
		 
		 distance = distanceBetweenTwoPoints(point6, point5);
		 
		 var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,320,370,distance,false,"purple");
	     arcA_7.startArcDraw();
		 
		  var arcA_8 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,300,395,distance,false,"purple");
	     arcA_8.startArcDraw();
		 
		  pointCirLineIntersects = circleLineIntersectionPoints(arcA_8,pointB,pointD);
	    var point8 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   drawPoint(context,point8,"red");
		 }
		 
		  var arcA_9 =new ArcDrawWithAngleRadius(context,point8.x,point8.y,0,0,250,300,distance,false,"purple");
	     arcA_9.startArcDraw();
		 
		 pointsArcArc =  findArcIntersectionPoint(arcA_8,arcA_9);
		
	    var point9 = pointsArcArc.pointA;
		if(drawFlag){	
		   drawPoint(context,point9,"red");
		 }
		 var point10= PointAtCertainDistance(pointB, point9, 170);
		 if(drawFlag){	
		   drawPoint(context,point10,"red");
		 }
		 
		 var pointA = pointOfIntersectionOfAxies(pointB.x,pointB.y,point10.x,point10.y, 
		                                   pointC.x,pointC.y,pointF.x,pointF.y)
		 drawLineBetweenTwoPoints(context,pointB,pointA,"red");
		  setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-15,pointA.y);
			
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	