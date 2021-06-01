function chapter_8_2_Q_1_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,y1+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-100);
	var pointA= getPointAtForDegree(circle,-165);
	var pointB= getPointAtForDegree(circle,-230);
	var pointC= getPointAtForDegree(circle,-20);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y+20);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	var lineAC = new LineBetweenPoint(pointA,pointC);
	var lineBD = new LineBetweenPoint(pointB,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAC, lineBD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-10,pointE.y-5);
	
	//drawLineBetweenTwoPoints(context,pointA,centerO,"blue");
	//drawLineBetweenTwoPoints(context,pointB,centerO,"blue");
	//drawLineBetweenTwoPoints(context,pointC,centerO,"blue");
	//drawLineBetweenTwoPoints(context,pointD,centerO,"blue");
	displayName(context,80,160,"চিত্র :১");	
}

function chapter_8_2_Q_1_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-20,y1+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-100);
	var pointA= getPointAtForDegree(circle,-165);
	var pointB= getPointAtForDegree(circle,-230);
	var pointC= getPointAtForDegree(circle,-20);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y+20);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	var lineAC = new LineBetweenPoint(pointA,pointC);
	var lineBD = new LineBetweenPoint(pointB,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAC, lineBD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-10,pointE.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,centerO,"blue");
	drawLineBetweenTwoPoints(context,pointB,centerO,"blue");
	drawLineBetweenTwoPoints(context,pointC,centerO,"blue");
	drawLineBetweenTwoPoints(context,pointD,centerO,"blue");
	
	displayName(context,80,160,"চিত্র :২");	
}

function chapter_8_2_Q_2_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-7,y1+30);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-110);
	var pointA= getPointAtForDegree(circle,-205);
	var pointB= getPointAtForDegree(circle,-55);
	var pointC= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y-5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	//drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	//drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-5,pointE.y-8);
	
	displayName(context,80,160,"চিত্র :১");	
}

function chapter_8_2_Q_2_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-7,y1+30);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-110);
	var pointA= getPointAtForDegree(circle,-205);
	var pointB= getPointAtForDegree(circle,-55);
	var pointC= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y-5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-5,pointE.y-8);
	
	displayName(context,80,160,"চিত্র :২");	
}

function chapter_8_2_Q_3_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x,centerO.y-5);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-70);
	var pointA= getPointAtForDegree(circle,-180);
	var pointB= getPointAtForDegree(circle,-300);
	var pointC= getPointAtForDegree(circle,0);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	//drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointB,"red");
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-5,pointE.y-8);
	
	displayName(context,80,160,"চিত্র :১");	
}


function chapter_8_2_Q_3_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x,centerO.y-5);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-70);
	var pointA= getPointAtForDegree(circle,-180);
	var pointB= getPointAtForDegree(circle,-300);
	var pointC= getPointAtForDegree(circle,0);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointB,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-5,pointE.y-8);
	
	displayName(context,80,160,"চিত্র :২");	
}


function chapter_8_2_Q_4_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-25,centerO.y);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-240);
	var pointA= getPointAtForDegree(circle,-85);
	var pointB= getPointAtForDegree(circle,-320);
	var pointC= getPointAtForDegree(circle,-15);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	//drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	//drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	//drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	//drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	//drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x+10,pointE.y+10);
	
	displayName(context,80,160,"চিত্র :১");	
}

function chapter_8_2_Q_4_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-25,centerO.y);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-240);
	var pointA= getPointAtForDegree(circle,-85);
	var pointB= getPointAtForDegree(circle,-320);
	var pointC= getPointAtForDegree(circle,-15);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+8);
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");	
	
	
	
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineCD = LineBetweenPoint(pointC,pointD);
	var pointE = pointOfIntersectionOfTwolIne(lineAB, lineCD);
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x+10,pointE.y+10);
	
	displayName(context,80,160,"চিত্র :২");	
}

function chapter_8_2_Q_6_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-5,centerO.y+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-340);
	var pointB= getPointAtForDegree(circle,-195);
	var pointP= getPointAtForDegree(circle,-150);
	var pointQ= getPointAtForDegree(circle,-30);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context,pointB,pointB.x-15,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);
	displayPointName(context,pointP,pointP.x-15,pointP.y+5);
	displayPointName(context,pointQ,pointQ.x+5,pointQ.y+5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointA,"red");
	drawLineBetweenTwoPoints(context,pointP,pointQ,"blue");
	//drawLineBetweenTwoPoints(context,pointP,pointA,"blue");
	//drawLineBetweenTwoPoints(context,pointQ,pointA,"blue");

	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");		
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineAC = LineBetweenPoint(pointA,pointC);
	var linePQ = LineBetweenPoint(pointP,pointQ);
	var pointD = pointOfIntersectionOfTwolIne(lineAB, linePQ);
	var pointE = pointOfIntersectionOfTwolIne(lineAC, linePQ);
	
	setPointName(pointD,"D");
	drawPoint(context,pointD , "red");	
	displayPointName(context,pointD,pointD.x+3,pointD.y+15);
	
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-10,pointE.y+15);
	
	displayName(context,80,160,"চিত্র :১");	
}

function chapter_8_2_Q_6_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1+10);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-5,centerO.y+20);
	var circle =  new Circle(centerO,55);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-340);
	var pointB= getPointAtForDegree(circle,-195);
	var pointP= getPointAtForDegree(circle,-150);
	var pointQ= getPointAtForDegree(circle,-30);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointP,"P");
	setPointName(pointQ,"Q");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context,pointB,pointB.x-15,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);
	displayPointName(context,pointP,pointP.x-15,pointP.y+5);
	displayPointName(context,pointQ,pointQ.x+5,pointQ.y+5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointA,"red");
	drawLineBetweenTwoPoints(context,pointP,pointQ,"blue");
	drawLineBetweenTwoPoints(context,pointP,pointA,"blue");
	drawLineBetweenTwoPoints(context,pointQ,pointA,"blue");

	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");		
	
	var lineAB = LineBetweenPoint(pointA,pointB);
	var lineAC = LineBetweenPoint(pointA,pointC);
	var linePQ = LineBetweenPoint(pointP,pointQ);
	var pointD = pointOfIntersectionOfTwolIne(lineAB, linePQ);
	var pointE = pointOfIntersectionOfTwolIne(lineAC, linePQ);
	
	setPointName(pointD,"D");
	drawPoint(context,pointD , "red");	
	displayPointName(context,pointD,pointD.x+3,pointD.y+15);
	
	setPointName(pointE,"E");
	drawPoint(context,pointE , "red");	
	displayPointName(context,pointE,pointE.x-10,pointE.y+15);
	
	displayName(context,80,160,"চিত্র :২");	
}


function chapter_8_2_Q_5_pic1(context, x1,y1){
  var drawFlag = false;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO,"red");
	
	displayPointName(context,centerO,x1-10,y1+15);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);	
	
	var point1= PointAtCertainDistance(centerO, pointA, -80);
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,point1,centerO);
	 var pointB= pointCirLineIntersects.pointA;
	//drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	var angle=30;
	var anglePoint = getPointAtAnAngle(pointA,-.5,45);
	
	if(drawFlag){		 
		drawPoint(context,anglePoint,"red");
	 }
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointA,anglePoint);
	 var pointD= pointCirLineIntersects.pointB;
	 var radius=30;
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,398,radius,false,"purple");
//	 arcA_1.startArcDraw();
	
	anglePoint = getPointAtAnAngle(pointB,-.5,-45);
	if(drawFlag){		 
		 drawPoint(context,anglePoint,"red");
	 }
	
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointB,anglePoint);
	 var pointC= pointCirLineIntersects.pointB;
	//drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	//drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
	
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,180,218,radius,false,"purple");
	// arcA_2.startArcDraw();
	
	
	
	
	var point4= PointAtCertainDistance(centerO, pointB, 30);
	if(drawFlag){	
	drawPoint(context,point4,"red");
	}
	
	var point5= PointAtCertainDistance(centerO, pointC, 30);
	if(drawFlag){	
	  drawPoint(context,point5,"red");
	}
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,point4,point5);
	 var pointB= pointCirLineIntersects.pointB;
	  var pointC= pointCirLineIntersects.pointA;
	  if(drawFlag){	
	    drawPoint(context,pointB,"red");
	    drawPoint(context,pointC,"red");
	  }
	  
	  drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	     drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
		 
		//  drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
		 //  drawLineBetweenTwoPoints(context,pointD,pointB,"blue");
		   
    setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-13,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_2_Q_5_pic2(context, x1,y1){
  var drawFlag = false;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO,"red");
	
	displayPointName(context,centerO,x1-10,y1+15);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);	
	
	var point1= PointAtCertainDistance(centerO, pointA, -80);
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,point1,centerO);
	 var pointB= pointCirLineIntersects.pointA;
	//drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	var angle=30;
	var anglePoint = getPointAtAnAngle(pointA,-.5,45);
	
	if(drawFlag){		 
		drawPoint(context,anglePoint,"red");
	 }
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointA,anglePoint);
	 var pointD= pointCirLineIntersects.pointB;
	 var radius=30;
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,398,radius,false,"purple");
//	 arcA_1.startArcDraw();
	
	anglePoint = getPointAtAnAngle(pointB,-.5,-45);
	if(drawFlag){		 
		 drawPoint(context,anglePoint,"red");
	 }
	
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointB,anglePoint);
	 var pointC= pointCirLineIntersects.pointB;
	//drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	//drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
	
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,180,218,radius,false,"purple");
	// arcA_2.startArcDraw();
	
	
	
	
	var point4= PointAtCertainDistance(centerO, pointB, 30);
	if(drawFlag){	
	drawPoint(context,point4,"red");
	}
	
	var point5= PointAtCertainDistance(centerO, pointC, 30);
	if(drawFlag){	
	  drawPoint(context,point5,"red");
	}
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,point4,point5);
	 var pointB= pointCirLineIntersects.pointB;
	  var pointC= pointCirLineIntersects.pointA;
	  if(drawFlag){	
	    drawPoint(context,pointB,"red");
	    drawPoint(context,pointC,"red");
	  }
	  
	  drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	     drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
		 
		  drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
		//   drawLineBetweenTwoPoints(context,pointD,pointB,"blue");
		   
    setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-13,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	 displayName(context,80,198,"চিত্র :২");
}







