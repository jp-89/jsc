
function Class_Eight_Ch_8_2_Sompaddyo_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 65;
	var line_c_length = 62;
	var line_d_length = 62;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	
	var pointE = new Point(x1,y1+2*line_space);
	var pointF = new Point(x1+line_c_length,y1+2*line_space);	
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	setPointName(pointE,"c");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	
	
	var pointG = new Point(x1,y1+3*line_space);
	var pointH = new Point(x1+line_d_length,y1+3*line_space);	
	drawLineBetweenTwoPoints(context,pointG,pointH,"teal");
	setPointName(pointG,"d");
	displayPointName(context,pointG,pointG.x-15,pointG.y+5);
	
	
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+50,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");	
	drawLineBetweenTwoPoints(context,pointI,pointK,"blue");
	
	var radius= 30;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-45,00,radius,false,"blue");
	   arcA_1.startArcDraw();
	setPointName(pointI,"x");
	displayPointName(context,pointI,pointI.x+20,pointI.y-2);
	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 65;
	var line_c_length = 62;
	var line_d_length = 62;
	var offset_Y =  80
	var extraLen = 40;
	
	var pointB = new Point(x1,y1+80);
	var pointE = new Point(x1+line_a_length+extraLen,y1+80);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	displayText4(context,pointB.x+15,pointB.y-5,"x");
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	var radius= line_a_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-10,10,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointC = new Point(pointB.x+line_a_length,pointB.y);	 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayText4(context,pointC.x-25,pointC.y+15,"a");
	
	var radius= 30;
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-65,00,radius,false,"red");
	arcA_1.startArcDraw();
	
	var drawFlag = true;
	var pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointC);
	    var point1 = pointCirLineIntersects.pointA;
		var point2 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   //drawPoint(context,point1,"blue");
		   drawPoint(context,point2,"blue");
		 }
		 
		 var pointK = new Point(x1+50,y1+25 )
		// drawLineBetweenTwoPoints(context,pointB,pointK,"blue");
		 var pointF = PointAtCertainDistance(pointB, pointK, 120);
		  drawLineBetweenTwoPoints(context,pointB,pointF,"blue");
		  setPointName(pointF,"F");
	      displayPointName(context,pointF,pointF.x-25,pointF.y+5);
		  
		 pointCirLineIntersects = circleLineIntersectionPoints(arcA_1,pointB,pointF);
	    var point3 = pointCirLineIntersects.pointA;
		var point4 = pointCirLineIntersects.pointB;
		
		if(drawFlag){	
		   //drawPoint(context,point3,"blue");
		   drawPoint(context,point4,"blue");
		 }
		 
		 radius =  distanceBetweenTwoPoints(point4, point2);
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point2.x,point2.y,0,0,-145,-75,radius,false,"red");
	    arcA_3.startArcDraw();
		
		radius =  line_b_length;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-58,-38,radius,false,"red");
	    arcA_4.startArcDraw();
			
		var pointA = PointAtCertainDistance(pointB, pointF, line_b_length);
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-25,pointA.y+5);
		displayText4(context,pointB.x-5,pointB.y-10,"b");
		displayText4(context,pointA.x+25,pointA.y-2,"c");
		
		
		radius =  line_c_length;
		 var arcA_5 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,-8,18,radius,false,"red");
	    arcA_5.startArcDraw();
		
		radius =  line_d_length;
		 var arcA_6 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,-55,-30,radius,false,"red");
	    arcA_6.startArcDraw();
		
		var pointsArcArc =  findArcIntersectionPoint(arcA_5,arcA_6);
	  var pointD = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,pointD,"blue");
	  }
	  
	  setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+15,pointD.y+5);
		
		 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
		  drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
		  displayText4(context,pointD.x-15,pointD.y+30,"d");
}


function Class_Eight_Ch_8_2_Sompaddyo_2_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 75;
	var line_c_length = 55;
	var line_d_length = 70;
	var line_e_length = 95;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	var pointE = new Point(x1,y1+2*line_space);
	var pointF = new Point(x1+line_c_length,y1+2*line_space);	
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	setPointName(pointE,"c");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	
	
	var pointG = new Point(x1,y1+3*line_space);
	var pointH = new Point(x1+line_d_length,y1+3*line_space);	
	drawLineBetweenTwoPoints(context,pointG,pointH,"teal");
	setPointName(pointG,"d");
	displayPointName(context,pointG,pointG.x-15,pointG.y+5);
	
	
	var pointI = new Point(x1,y1+4*line_space);
	var pointJ = new Point(x1+line_e_length,y1+4*line_space);	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"red");
	setPointName(pointI,"e");
	displayPointName(context,pointI,pointI.x-15,pointI.y+5);	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_2_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 75;
	var line_c_length = 55;
	var line_d_length = 70;
	var line_e_length = 95;
	var offset_Y =  80
	var extraLen = 80;
	
	var pointB = new Point(x1,y1+offset_Y);
	var pointE = new Point(x1+line_a_length+extraLen,y1+offset_Y);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	
	var radius= line_e_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-10,10,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointD = new Point(pointB.x+line_e_length,pointB.y);	 
	 setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x+5,pointD.y+15);
	displayText4(context,pointB.x+60,pointB.y+12,"e");
	
	
	var radius= line_a_length;
	  var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-60,-40,radius,false,"red");
	 arcA_2.startArcDraw();
	 
	 var radius= line_b_length;
	  var arcA_3 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,-150,-130,radius,false,"red");
	 arcA_3.startArcDraw();
	 
	 var drawFlag = true;
	 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
	  var pointA = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,pointA,"blue");
	  }
	  setPointName(pointA,"A");
	displayPointName(context,pointA,pointA.x-5,pointA.y-15);
	displayText4(context,pointB.x+7,pointB.y-25,"a");
	
	
	
	var radius= line_c_length;
	  var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,30,60,radius,false,"red");
	 arcA_4.startArcDraw();
	 
	 var radius= line_d_length;
	  var arcA_5 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,135,155,radius,false,"red");
	  arcA_5.startArcDraw();
	 
	 var drawFlag = true;
	  pointsArcArc =  findArcIntersectionPoint(arcA_4,arcA_5);
	  var pointC = pointsArcArc.pointB;
	   if(drawFlag){	
	     drawPoint(context,pointC,"blue");
	  }
	  setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-5,pointC.y+25);
	displayText4(context,pointC.x-25,pointC.y-7,"d");
	displayText4(context,pointC.x+25,pointC.y-7,"c");
	
	drawLineBetweenTwoPoints(context,pointB,pointA,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointA,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointC,"blue");	
	
}




function Class_Eight_Ch_8_2_Sompaddyo_3_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 75;
	var line_c_length = 55;
	var line_d_length = 70;
	var line_e_length = 95;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	var pointE = new Point(x1,y1+2*line_space);
	var pointF = new Point(x1+line_c_length,y1+2*line_space);	
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	setPointName(pointE,"c");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	
	
	var pointG = new Point(x1,y1+3*line_space);
	var pointH = new Point(x1+line_d_length,y1+3*line_space);	
	drawLineBetweenTwoPoints(context,pointG,pointH,"teal");
	setPointName(pointG,"d");
	displayPointName(context,pointG,pointG.x-15,pointG.y+5);
	
	
	var pointI = new Point(x1,y1+4*line_space);
	var pointJ = new Point(x1+line_e_length,y1+4*line_space);	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"red");
	setPointName(pointI,"e");
	displayPointName(context,pointI,pointI.x-15,pointI.y+5);	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_3_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 60;
	var line_b_length = 75;
	var line_c_length = 55;
	var line_d_length = 70;
	var line_e_length = 95;
	var offset_Y =  80
	var extraLen = 80;
	
	var pointB = new Point(x1,y1+offset_Y);
	var pointE = new Point(x1+line_a_length+extraLen,y1+offset_Y);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	
	var radius= line_e_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-10,10,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointD = new Point(pointB.x+line_e_length,pointB.y);	 
	 setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x+5,pointD.y+15);
	displayText4(context,pointB.x+60,pointB.y+15,"e");
	
	var radius= line_a_length;
	  var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-60,-40,radius,false,"red");
	 arcA_2.startArcDraw();
	 
	 var radius= line_b_length;
	  var arcA_3 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,-150,-130,radius,false,"red");
	 arcA_3.startArcDraw();
	 
	 var drawFlag = true;
	 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
	  var pointA = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,pointA,"blue");
	  }
	  setPointName(pointA,"A");
	displayPointName(context,pointA,pointA.x-5,pointA.y-15);
	displayText4(context,pointB.x+7,pointB.y-25,"a");
	
	
	
	var radius= line_c_length;
	  var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,30,60,radius,false,"red");
	 arcA_4.startArcDraw();
	 
	 var radius= line_d_length;
	  var arcA_5 =new ArcDrawWithAngleRadius(context,pointD.x,pointD.y,0,0,135,155,radius,false,"red");
	  arcA_5.startArcDraw();
	 
	 var drawFlag = true;
	  pointsArcArc =  findArcIntersectionPoint(arcA_4,arcA_5);
	  var pointC = pointsArcArc.pointB;
	   if(drawFlag){	
	     drawPoint(context,pointC,"blue");
	  }
	  setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-5,pointC.y+25);
	displayText4(context,pointC.x+25,pointC.y-5,"c");
	displayText4(context,pointA.x+5,pointA.y+30,"d");
	
	drawLineBetweenTwoPoints(context,pointB,pointA,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointA,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointC,"blue");	
	drawLineBetweenTwoPoints(context,pointC,pointA,"green");
	
}


function Class_Eight_Ch_8_2_Sompaddyo_4_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 100;
	var line_b_length = 85;
	var line_c_length = 62;
	var line_d_length = 62;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	
	var pointE = new Point(x1,y1+2*line_space);
	var pointF = new Point(x1+line_c_length,y1+2*line_space);	
	drawLineBetweenTwoPoints(context,pointE,pointF,"green");
	setPointName(pointE,"c");
	displayPointName(context,pointE,pointE.x-15,pointE.y+5);
	
	
	
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");	
	drawLineBetweenTwoPoints(context,pointI,pointK,"blue");
	
	var radius= 30;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-65,00,radius,false,"blue");
	   arcA_1.startArcDraw();
	setPointName(pointI,"x");
	displayPointName(context,pointI,pointI.x+15,pointI.y-4);
	
	var x_offset= 80;
	var pointL = new Point(x1+x_offset,y1+6*line_space+5);
	var pointM = new Point(x1+x_offset+line_d_length,y1+6*line_space+5);
	var pointN = new Point(x1+x_offset+15,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointL,pointM,"blue");	
	drawLineBetweenTwoPoints(context,pointL,pointN,"blue");
	
	 var radius= 30;
	  var arcA_2 =new ArcDrawWithAngleRadius(context,pointL.x,pointL.y,0,0,-65,00,radius,false,"blue");
	   arcA_2.startArcDraw();
	setPointName(pointL,"y");
	displayPointName(context,pointL,pointL.x+15,pointL.y-4);
	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_4_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 100;
	var line_b_length = 85;
	var line_c_length = 62;
	var line_d_length = 62;
	var offset_Y =  80
	var extraLen = 40;
	
	var pointB = new Point(x1,y1+80);
	var pointE = new Point(x1+line_a_length+extraLen,y1+80);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	displayText4(context,pointB.x+15,pointB.y-5,"x");
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	var radius= line_a_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-7,7,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointC = new Point(pointB.x+line_a_length,pointB.y);	 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayText4(context,pointC.x-55,pointC.y+15,"a");
	
	//// for angle x same as picture 1
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-80,0,radius,false,"red");
	
	  var drawFlag = true;
	   var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointJ);
	    var point2_1 = pointCirLineIntersects.pointA;
		var point2_2 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointK);
	    var point3_1 = pointCirLineIntersects.pointA;
		var point3_2 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point2_1, point3_1);
		
		 
	
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-75,00,radius,false,"red");
	arcA_2.startArcDraw();
	
	var drawFlag = true;
	var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointC);
	    var point4 = pointCirLineIntersects.pointA;
		var point5 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   //drawPoint(context,point1,"blue");
		   drawPoint(context,point4,"blue");
		 }
		 
		 
	radius= angle_radius;
	var arcA_3 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,-140,-95,radius,false,"red");
	arcA_3.startArcDraw();
	
	var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
	
	 var point6 = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,point6,"blue");
	  }
	  
	  var pointF = PointAtCertainDistance(pointB, point6, 110);
		  drawLineBetweenTwoPoints(context,pointB,pointF,"blue");
		  setPointName(pointF,"F");
	      displayPointName(context,pointF,pointF.x-25,pointF.y+5);
		  
		  
		  
		  radius =  line_b_length;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-70,-45,radius,false,"red");
	    arcA_4.startArcDraw();
			
		var pointA = PointAtCertainDistance(pointB, pointF, line_b_length);
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-25,pointA.y+5);
		displayText4(context,pointB.x-5,pointB.y-10,"b");
		
		 
	
	
	// for y angle	same as from picture 1	
		var x_offset= 80;
	  var pointL = new Point(x1+x_offset,y1+6*line_space+5);
	  var pointM = new Point(x1+x_offset+line_d_length,y1+6*line_space+5);
	  var pointN = new Point(x1+x_offset+15,y1+6*line_space -50);
	  
	  var radius= 30;
  	 var arcA_7 =new ArcDrawWithAngleRadius(context,pointL.x,pointL.y,0,0,-80,0,radius,false,"red");
	 
	   pointCirLineIntersects = circleLineIntersectionPoints(arcA_7,pointL,pointM);
	    var point7 = pointCirLineIntersects.pointA;
		var point8 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_7,pointL,pointN);
	    var point9 = pointCirLineIntersects.pointA;
		var point10 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point7, point9);
		
		
		radius= 30;
	   var arcA_8 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,-180,-75,radius,false,"red");
	   arcA_8.startArcDraw();
	   
	   pointCirLineIntersects = circleLineIntersectionPoints(arcA_8,pointB,pointC);
	   var point11 = pointCirLineIntersects.pointA;
		var point12 = pointCirLineIntersects.pointB;
		if(drawFlag){	
	      drawPoint(context,point11,"blue");
	  }
	  
	   radius= angle_radius;
	   var arcA_9 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,-75,-30,radius,false,"red");
	   arcA_9.startArcDraw();
	   
	   pointsArcArc =  findArcIntersectionPoint(arcA_8,arcA_9);
	
	 var point13 = pointsArcArc.pointB;
	   if(drawFlag){	
	     drawPoint(context,point13,"blue");
	  }
	  
	  
	  var pointG = PointAtCertainDistance(pointC, point13, 100);
		setPointName(pointG,"G");
	    displayPointName(context,pointG,pointG.x+15,pointG.y+5);
		drawLineBetweenTwoPoints(context,pointC,pointG,"blue");
	  
	    var pointD = PointAtCertainDistance(pointC, point13, line_c_length);
		setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+15,pointD.y+5);
		radius = line_c_length;
		
		 var arcA_10 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,-95,-55,radius,false,"red");
	   arcA_10.startArcDraw();
	   
	   displayText4(context,pointC.x-5,pointC.y-35,"c");
	   drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	   
	   displayText4(context,pointC.x-17,pointC.y-8,"y");	   
	
}



function Class_Eight_Ch_8_2_Sompaddyo_5_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 100;
	var line_b_length = 85;
	var line_c_length = 62;
	var line_d_length = 62;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	
	
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");	
	drawLineBetweenTwoPoints(context,pointI,pointK,"blue");
	
	var radius= 30;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-65,00,radius,false,"blue");
	   arcA_1.startArcDraw();
	setPointName(pointI,"x");
	displayPointName(context,pointI,pointI.x+15,pointI.y-4);
	
	var x_offset= 80;
	var pointL = new Point(x1+x_offset,y1+6*line_space+5);
	var pointM = new Point(x1+x_offset+line_d_length,y1+6*line_space+5);
	var pointN = new Point(x1+x_offset+15,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointL,pointM,"blue");	
	drawLineBetweenTwoPoints(context,pointL,pointN,"blue");
	
	 var radius= 30;
	  var arcA_2 =new ArcDrawWithAngleRadius(context,pointL.x,pointL.y,0,0,-85,00,radius,false,"blue");
	   arcA_2.startArcDraw();
	setPointName(pointL,"y");
	displayPointName(context,pointL,pointL.x+15,pointL.y-4);
	
	
	
	var pointP = new Point(x1,y1+9*line_space+5);
	var pointQ = new Point(x1+line_d_length,y1+9*line_space+5);
	var pointR = new Point(x1-10,y1+9*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointP,pointQ,"blue");	
	drawLineBetweenTwoPoints(context,pointP,pointR,"blue");
	
	var radius= 30;
	  var arcA_3 =new ArcDrawWithAngleRadius(context,pointP.x,pointP.y,0,0,-105,00,radius,false,"blue");
	   arcA_3.startArcDraw();
	setPointName(pointP,"z");
	displayPointName(context,pointP,pointP.x+15,pointP.y-4);
	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_5_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 100;
	var line_b_length = 85;
	var line_c_length = 62;
	var line_d_length = 62;
	var offset_Y =  80
	var extraLen = 40;
	
	var pointB = new Point(x1,y1+80);
	var pointE = new Point(x1+line_a_length+extraLen,y1+80);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	displayText4(context,pointB.x+15,pointB.y-5,"x");
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	var radius= line_a_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-7,7,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointC = new Point(pointB.x+line_a_length,pointB.y);	 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayText4(context,pointC.x-55,pointC.y+15,"a");
	
	//// for angle x same as picture 1
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-80,0,radius,false,"red");
	
	  var drawFlag = true;
	   var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointJ);
	    var point2_1 = pointCirLineIntersects.pointA;
		var point2_2 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointK);
	    var point3_1 = pointCirLineIntersects.pointA;
		var point3_2 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point2_1, point3_1);
		
		 
	
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-75,00,radius,false,"red");
	arcA_2.startArcDraw();
	
	var drawFlag = true;
	var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointC);
	    var point4 = pointCirLineIntersects.pointA;
		var point5 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   //drawPoint(context,point1,"blue");
		   drawPoint(context,point4,"blue");
		 }
		 
		 
	radius= angle_radius;
	var arcA_3 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,-140,-95,radius,false,"red");
	arcA_3.startArcDraw();
	
	var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
	
	 var point6 = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,point6,"blue");
	  }
	  
	  var pointF = PointAtCertainDistance(pointB, point6, 110);
		  drawLineBetweenTwoPoints(context,pointB,pointF,"blue");
		  setPointName(pointF,"F");
	      displayPointName(context,pointF,pointF.x-25,pointF.y+5);
		  
		  
		  
		  radius =  line_b_length;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-70,-55,radius,false,"red");
	    arcA_4.startArcDraw();
			
		var pointA = PointAtCertainDistance(pointB, pointF, line_b_length);
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-25,pointA.y+5);
		displayText4(context,pointB.x-5,pointB.y-10,"b");
		
		 
	
	
	// for y angle	same as from picture 1	
		var x_offset= 80;
	  var pointL = new Point(x1+x_offset,y1+6*line_space+5);
	  var pointM = new Point(x1+x_offset+line_d_length,y1+6*line_space+5);
	  var pointN = new Point(x1+x_offset+15,y1+6*line_space -50);
	  
	  var radius= 30;
  	 var arcA_7 =new ArcDrawWithAngleRadius(context,pointL.x,pointL.y,0,0,-80,0,radius,false,"red");
	 
	   pointCirLineIntersects = circleLineIntersectionPoints(arcA_7,pointL,pointM);
	    var point7 = pointCirLineIntersects.pointA;
		var point8 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_7,pointL,pointN);
	    var point9 = pointCirLineIntersects.pointA;
		var point10 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point7, point9);
		
		
		radius= 30;
	   var arcA_8 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,-180,-75,radius,false,"red");
	   arcA_8.startArcDraw();
	   
	   pointCirLineIntersects = circleLineIntersectionPoints(arcA_8,pointB,pointC);
	   var point11 = pointCirLineIntersects.pointA;
		var point12 = pointCirLineIntersects.pointB;
		if(drawFlag){	
	      drawPoint(context,point11,"blue");
	  }
	  
	   radius= angle_radius;
	   var arcA_9 =new ArcDrawWithAngleRadius(context,point11.x,point11.y,0,0,-75,-30,radius,false,"red");
	   arcA_9.startArcDraw();
	   
	   pointsArcArc =  findArcIntersectionPoint(arcA_8,arcA_9);
	
	 var point13 = pointsArcArc.pointB;
	   if(drawFlag){	
	     drawPoint(context,point13,"blue");
	  }
	  
	  
	   var pointG = PointAtCertainDistance(pointC, point13, 100);
		setPointName(pointG,"G");
	    displayPointName(context,pointG,pointG.x+15,pointG.y+5);
		drawLineBetweenTwoPoints(context,pointC,pointG,"blue");
		
		
		//// for angle z
		
		var pointP = new Point(x1,y1+9*line_space+5);
	    var pointQ = new Point(x1+line_d_length,y1+9*line_space+5);
	    var pointR = new Point(x1-10,y1+9*line_space -50);
		
		
		 var radius= 30;
  	     var arcA_10 =new ArcDrawWithAngleRadius(context,pointP.x,pointP.y,0,0,-80,0,radius,false,"red");
	 
	   pointCirLineIntersects = circleLineIntersectionPoints(arcA_10,pointP,pointQ);
	    var point14 = pointCirLineIntersects.pointA;
		var point15 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_10,pointP,pointR);
	    var point16 = pointCirLineIntersects.pointA;
		var point17 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point14, point16);
		
		radius= 30;
	   var arcA_11 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,-35,122,radius,false,"red");
	   arcA_11.startArcDraw();
	   
	    pointCirLineIntersects = circleLineIntersectionPoints(arcA_11,pointB,pointA);
	    var point18 = pointCirLineIntersects.pointA;
		var point19 = pointCirLineIntersects.pointB;
		 if(drawFlag){	
	     drawPoint(context,point18,"blue");
	    }
		
		radius= angle_radius;
	   var arcA_12 =new ArcDrawWithAngleRadius(context,point18.x,point18.y,0,0,-35,-10,radius,false,"red");
	   arcA_12.startArcDraw();
	   
	    pointsArcArc =  findArcIntersectionPoint(arcA_11,arcA_12);
	
	  var point20 = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,point20,"blue");
	  }
	  
	  var pointH = PointAtCertainDistance(pointA, point20, 80);
	  drawLineBetweenTwoPoints(context,pointA,pointH,"blue");
	   setPointName(pointH,"H");
	    displayPointName(context,pointH,pointH.x+10,pointH.y+5);
		
		var pointD = pointOfIntersectionOfPoints(pointA, pointH,pointC,pointG);
		 setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+7,pointD.y-5);		
	
	   
	   displayText4(context,pointC.x-5,pointC.y-35,"c");	  
	   displayText4(context,pointC.x-17,pointC.y-8,"y");	
      displayText4(context,pointA.x,pointA.y+19,"z");		   
	
}



function Class_Eight_Ch_8_2_Sompaddyo_6_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 105;
	var line_b_length = 75;
	var line_c_length = 62;
	var line_d_length = 62;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	
	var pointC = new Point(x1,y1+1*line_space);
	var pointD = new Point(x1+line_b_length,y1+1*line_space);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	setPointName(pointC,"b");
	displayPointName(context,pointC,pointC.x-15,pointC.y+5);
	
	
	
	
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");	
	drawLineBetweenTwoPoints(context,pointI,pointK,"blue");
	
	var radius= 30;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-65,00,radius,false,"blue");
	   arcA_1.startArcDraw();
	setPointName(pointI,"x");
	displayPointName(context,pointI,pointI.x+15,pointI.y-4);	
	
}

function Class_Eight_Ch_8_2_Sompaddyo_6_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 105;
	var line_b_length = 75;
	var line_c_length = 62;
	var line_d_length = 62;
	var offset_Y =  80
	var extraLen = 40;
	
	var pointB = new Point(x1,y1+80);
	var pointE = new Point(x1+line_a_length+extraLen,y1+80);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
	displayText4(context,pointB.x+15,pointB.y-5,"x");
	
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	var radius= line_a_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-7,7,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointC = new Point(pointB.x+line_a_length,pointB.y);	 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayText4(context,pointC.x-55,pointC.y+15,"a");
	
	//// for angle x same as picture 1
	var pointI = new Point(x1,y1+6*line_space+5);
	var pointJ = new Point(x1+line_d_length,y1+6*line_space+5);
	var pointK = new Point(x1+30,y1+6*line_space -50);
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointI.x,pointI.y,0,0,-80,0,radius,false,"red");
	
	  var drawFlag = true;
	   var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointJ);
	    var point2_1 = pointCirLineIntersects.pointA;
		var point2_2 = pointCirLineIntersects.pointB;
		
		pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointI,pointK);
	    var point3_1 = pointCirLineIntersects.pointA;
		var point3_2 = pointCirLineIntersects.pointB;
		var angle_radius =  distanceBetweenTwoPoints(point2_1, point3_1);
		
		 
	
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-75,00,radius,false,"red");
	arcA_2.startArcDraw();
	
	var drawFlag = true;
	var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointC);
	    var point4 = pointCirLineIntersects.pointA;
		var point5 = pointCirLineIntersects.pointB;
		if(drawFlag){	
		   //drawPoint(context,point1,"blue");
		   drawPoint(context,point4,"blue");
		 }
		 
		 
	radius= angle_radius;
	var arcA_3 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,-140,-95,radius,false,"red");
	arcA_3.startArcDraw();
	
	var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
	
	 var point6 = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,point6,"blue");
	  }
	  
	  var pointF = PointAtCertainDistance(pointB, point6, 110);
		  drawLineBetweenTwoPoints(context,pointB,pointF,"blue");
		  setPointName(pointF,"F");
	      displayPointName(context,pointF,pointF.x-25,pointF.y+5);
		  
		  
		  
		  radius =  line_b_length;
		 var arcA_4 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-70,-55,radius,false,"red");
	    arcA_4.startArcDraw();
			
		var pointA = PointAtCertainDistance(pointB, pointF, line_b_length);
		setPointName(pointA,"A");
	    displayPointName(context,pointA,pointA.x-25,pointA.y+5);
		displayText4(context,pointB.x+8,pointB.y-40,"b");
		
		 radius= line_a_length;
  	   var arcA_5 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,-10,10,radius,false,"red");
	  arcA_5.startArcDraw();
	  
	   radius= line_b_length;
  	   var arcA_6 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,-70,-50,radius,false,"red");
	  arcA_6.startArcDraw();
	  
	  var pointsArcArc =  findArcIntersectionPoint(arcA_5,arcA_6);
	
	 var point7 = pointsArcArc.pointA;
	   if(drawFlag){	
	     drawPoint(context,point7,"blue");
	  }
	  var pointD = point7;
	  
	  drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	  
	  setPointName(pointD,"D");
	    displayPointName(context,pointD,pointD.x+10,pointD.y+5);
		
		displayText4(context,pointC.x+22,pointC.y-18,"b");
		displayText4(context,pointA.x+42,pointA.y-5,"a");
		
		drawLineBetweenTwoPoints(context,pointC,pointA,"green");
		
		   
	
}

////



function Class_Eight_Ch_8_2_Sompaddyo_7_pic1(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 105;
	var line_b_length = 75;
	var line_c_length = 62;
	var line_d_length = 62;
	
	var pointA = new Point(x1,y1);
	var pointB = new Point(x1+line_a_length,y1);
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	setPointName(pointA,"a");
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
		
}

function Class_Eight_Ch_8_2_Sompaddyo_7_pic2(context, x1,y1){
		
	var line_space = 20;
	var line_a_length = 105;
	var line_b_length = 75;
	var line_c_length = 62;
	var line_d_length = 62;
	var offset_Y =  80
	var extraLen = 40;
	
	var pointB = new Point(x1,y1+80);
	var pointE = new Point(x1+line_a_length+extraLen,y1+80);
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-20,pointB.y+15);
		
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x+2,pointE.y+15);
	
	var radius= line_a_length;
	  var arcA_1 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-7,7,radius,false,"red");
	 arcA_1.startArcDraw();
	 
	 var pointC = new Point(pointB.x+line_a_length,pointB.y);	 
	 setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x+5,pointC.y+15);
	displayText4(context,pointC.x-55,pointC.y+15,"a");
	
	
	
	
	var radius= 30;
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-160,0,radius,false,"red");
	 arcA_2.startArcDraw();
	  var drawFlag = true;
	   var pointCirLineIntersects = circleLineIntersectionPoints(arcA_2,pointB,pointC);
	    var point2 = pointCirLineIntersects.pointA;
		var point3 = pointCirLineIntersects.pointB;
		
		if(drawFlag){	
		   //drawPoint(context,point1,"blue");
		   drawPoint(context,point3,"blue");
		 }
		 
		 var arcA_3 =new ArcDrawWithAngleRadius(context,point3.x,point3.y,0,0,-140,-100,radius,false,"red");
	     arcA_3.startArcDraw();
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_3);
		 var point4 = pointsArcArc.pointA;
	     if(drawFlag){	
	       drawPoint(context,point4,"blue");
	     }
		 
		 
		 var arcA_4 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,-200,-155,radius,false,"red");
	     arcA_4.startArcDraw();
		 
		 var pointsArcArc =  findArcIntersectionPoint(arcA_2,arcA_4);
		 var point5 = pointsArcArc.pointA;
	     if(drawFlag){	
	       drawPoint(context,point5,"blue");
	     }
		 
		 
		 var radius= 50;
		 var arcA_6 =new ArcDrawWithAngleRadius(context,point4.x,point4.y,0,0,-130,-90,radius,false,"red");
	     arcA_6.startArcDraw();
		 
	
		 var arcA_7 =new ArcDrawWithAngleRadius(context,point5.x,point5.y,0,0,-100,-55,radius,false,"red");
	     arcA_7.startArcDraw();
		 
		 
		  pointsArcArc =  findArcIntersectionPoint(arcA_6,arcA_7);
		 var point6 = pointsArcArc.pointB;
	     if(drawFlag){	
	       drawPoint(context,point6,"blue");
	     }
		 
		  var pointF = PointAtCertainDistance(pointB, point6, 133);
		  drawLineBetweenTwoPoints(context,pointB,pointF,"blue");
		  setPointName(pointF,"F");
	      displayPointName(context,pointF,pointF.x-25,pointF.y+5);
		  
		  
		  var radius= line_a_length;
		  var arcA_8 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,-97,-83,radius,false,"red");
	      arcA_8.startArcDraw();
		  
		  var pointA = PointAtCertainDistance(pointB, point6, line_a_length);
		   setPointName(pointA,"A");
	      displayPointName(context,pointA,pointA.x-25,pointA.y+5);
		  
		  
		  var radius= line_a_length;
		  var arcA_9 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,-7,20,radius,false,"red");
	      arcA_9.startArcDraw();
		 
		 
		  var arcA_10 =new ArcDrawWithAngleRadius(context,pointC.x,pointC.y,0,0,-110,-80,radius,false,"red");
	      arcA_10.startArcDraw();
		  
		   pointsArcArc =  findArcIntersectionPoint(arcA_9,arcA_10);
		 var point10 = pointsArcArc.pointA;
	     if(drawFlag){	
	       drawPoint(context,point10,"blue");
	     }
		 
		  var pointD = point10;
		  
		  drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
		  drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
		  setPointName(pointD,"D");
	      displayPointName(context,pointD,pointD.x+15,pointD.y-5);
		  
		  displayText4(context,pointC.x+10,pointC.y-35,"a");
		  displayText4(context,pointB.x-18,pointB.y-45,"a");
		  displayText4(context,pointA.x+35,pointA.y-10,"a");
		 
	
}







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



