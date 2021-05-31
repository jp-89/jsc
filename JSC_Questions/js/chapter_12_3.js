function chapter_12_3_Q_1_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-6,8);
	 var pointB = new GraphPoint(graphGrid,-2,5);
	 var pointC = new GraphPoint(graphGrid,6,-1);
	 
	 var pointD = new GraphPoint(graphGrid,-4,-6);
	 var pointE = new GraphPoint(graphGrid,-1,-2);
	 var pointF = new GraphPoint(graphGrid,5,6);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-30,pointA.y+15,graphPointText(pointA));
	 displayText2(context,pointB.x-4,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-5,pointC.y+15,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-4,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-45,pointE.y+5,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"purple");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"purple");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"blue");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	   drawPoint(context,intersectPoint, "red");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	
	 
}

function chapter_12_3_Q_2_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,2,3);
	 var pointB = new GraphPoint(graphGrid,-2,-5);
	 var pointC = new GraphPoint(graphGrid,3,5);
	//(2,3),(-2,-5),(3,5)
	 //(1,8),(0,13),(4,-7)
	 var pointD = new GraphPoint(graphGrid,1,8);
	 var pointE = new GraphPoint(graphGrid,0,13);
	 var pointF = new GraphPoint(graphGrid,4,-7);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-30,pointA.y+15,graphPointText(pointA));
	 displayText2(context,pointB.x-4,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-5,pointC.y+15,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-4,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-45,pointE.y+5,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"purple");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"purple");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"blue");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	   drawPoint(context,intersectPoint, "red");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	 
}

function chapter_12_3_Q_3_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,3,-1);
	 var pointB = new GraphPoint(graphGrid,-2,1);
	 var pointC = new GraphPoint(graphGrid,-12,5);
	//(3,-1),(-2,1),(-7,3)
	 //(-1,1),(-7,3),(5,1)
	 var pointD = new GraphPoint(graphGrid,5,-1);
	 var pointE = new GraphPoint(graphGrid,-13,5);
	 var pointF = new GraphPoint(graphGrid,11,-3);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-20,pointA.y+20,graphPointText(pointA));
	 displayText2(context,pointB.x-15,pointB.y+15,graphPointText(pointB));
	 displayText2(context,pointC.x-10,pointC.y+25,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-4,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-3,pointE.y-10,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "red");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =7;
	  intersectGraphPoint.gy =3;
	  displayText2(context,intersectGraphPoint.x-10,intersectGraphPoint.y-10,graphPointText(intersectGraphPoint));
	 
}

function chapter_12_3_Q_4_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-2,-4);
	 var pointB = new GraphPoint(graphGrid,8,11);
	 var pointC = new GraphPoint(graphGrid,-4,-7);
	//(-2,-4),(4,5),(-4,-7)
	 //(-2,-5),(-5,-10),(7,10)
	 var pointD = new GraphPoint(graphGrid,-2,-5);
	 var pointE = new GraphPoint(graphGrid,-5,-10);
	 var pointF = new GraphPoint(graphGrid,7,10);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-40,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y,graphPointText(pointB));
	 displayText2(context,pointC.x-40,pointC.y,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-4,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-3,pointE.y+15,graphPointText(pointE));
	 displayText2(context,pointF.x-40,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =4;
	  intersectGraphPoint.gy =5;
	  displayText2(context,intersectGraphPoint.x-25,intersectGraphPoint.y-5,graphPointText(intersectGraphPoint));
		
}


function chapter_12_3_Q_5_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-2,9);
	 var pointB = new GraphPoint(graphGrid,0,6);
	 var pointC = new GraphPoint(graphGrid,6,-3);
	//(-2,-4),(4,5),(-4,-7)
	 //(-2,-5),(-5,-10),(7,10)
	 var pointD = new GraphPoint(graphGrid,-4,7);
	 var pointE = new GraphPoint(graphGrid,-1,5);
	 var pointF = new GraphPoint(graphGrid,9,-2);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-35,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-35,pointD.y+10,graphPointText(pointD));
	 displayText2(context,pointE.x-35,pointE.y+10,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =2;
	  intersectGraphPoint.gy =3;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}

function chapter_12_3_Q_6_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,4,-6);
	 var pointB = new GraphPoint(graphGrid,0,6);
	 var pointC = new GraphPoint(graphGrid,-2,12);
	//((4,-6),(0,6),(-3,15)
	 //(-3,9),(0,4),(6,-6)
	 var pointD = new GraphPoint(graphGrid,-3,9);
	 var pointE = new GraphPoint(graphGrid,0,4);
	 var pointF = new GraphPoint(graphGrid,6,-6);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-35,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-35,pointD.y+10,graphPointText(pointD));
	 displayText2(context,pointE.x-35,pointE.y+10,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =1.5;
	  intersectGraphPoint.gy =1.5;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}

function chapter_12_3_Q_7_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,4,-4);
	 var pointB = new GraphPoint(graphGrid,-4,8);
	 var pointC = new GraphPoint(graphGrid,-2,5);
	//(4,-4),(-4,8),(-2,5)
	 //(3,2),(7,5),(-5,-4)
	 var pointD = new GraphPoint(graphGrid,3,2);
	 var pointE = new GraphPoint(graphGrid,7,5);
	 var pointF = new GraphPoint(graphGrid,-5,-4);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x+10,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+5,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-25,pointD.y-5,graphPointText(pointD));
	 displayText2(context,pointE.x-10,pointE.y-10,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =1;
	  intersectGraphPoint.gy =.5;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}

function chapter_12_3_Q_8_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,8,-3);
	 var pointB = new GraphPoint(graphGrid,6,0);
	 var pointC = new GraphPoint(graphGrid,0,9);
	//(8,-3),(6,0),(0,9)
	 //(3,0),(4,-6),(1,12)
	 var pointD = new GraphPoint(graphGrid,3,0);
	 var pointE = new GraphPoint(graphGrid,4,-6);
	 var pointF = new GraphPoint(graphGrid,1,12);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x+10,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+5,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-25,pointD.y-5,graphPointText(pointD));
	 displayText2(context,pointE.x-10,pointE.y+15,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =2;
	  intersectGraphPoint.gy =6;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}



function chapter_12_3_Q_9_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-4,-10);
	 var pointB = new GraphPoint(graphGrid,-3,-7);
	 var pointC = new GraphPoint(graphGrid,2,8);
	//(-4,-10),(-3,-7),(2,8)
	 //(-7,-9),(6,4),(8,6)
	 var pointD = new GraphPoint(graphGrid,-7,-9);
	 var pointE = new GraphPoint(graphGrid,6,4);
	 var pointF = new GraphPoint(graphGrid,8,6);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x+10,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+5,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-25,pointD.y-5,graphPointText(pointD));
	 displayText2(context,pointE.x-10,pointE.y+15,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =-2;
	  intersectGraphPoint.gy =-4;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}


function chapter_12_3_Q_10_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,1,-4);
	 var pointB = new GraphPoint(graphGrid,3,2);
	 var pointC = new GraphPoint(graphGrid,5,8);
	//(1,-4),(3,2),(5,8)
	 //(-3,9),(3,-3),(6,-9)
	 var pointD = new GraphPoint(graphGrid,-3,9);
	 var pointE = new GraphPoint(graphGrid,3,-3);
	 var pointF = new GraphPoint(graphGrid,6,-9);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-40,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+5,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y+10,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-25,pointD.y-5,graphPointText(pointD));
	 displayText2(context,pointE.x+10,pointE.y+5,graphPointText(pointE));
	 displayText2(context,pointF.x+10,pointF.y+5,graphPointText(pointF));
	 
	  drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	  drawLineBetweenTwoPoints(context,pointC,pointB,"blue");
	
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");

	  drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	  drawLineBetweenTwoPoints(context,pointF,pointE,"red");
	  var lineA = new Line(pointA.x,pointA.y,pointC.x,pointC.y);
	  var lineB = new Line(pointD.x,pointD.y,pointF.x,pointF.y);
	  var intersectPoint = pointOfIntersectionOfTwolIne(lineA, lineB);
	 // intersectPoint.x=7;
	 // intersectPoint.y= 3;
	   drawPoint(context,intersectPoint, "green");
	  var intersectGraphPoint = new GraphPoint2(graphGrid,intersectPoint.x,intersectPoint.y)
	  intersectGraphPoint.gx =2;
	  intersectGraphPoint.gy =-1;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+2,graphPointText(intersectGraphPoint));
		
}