function Srejonshil_chapter_12_Q_1_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	// (-4,-3),(0,0),(8,6)
	 var pointA = new GraphPoint(graphGrid,-4,-3);
	 var pointB = new GraphPoint(graphGrid,0,0);
	 var pointC = new GraphPoint(graphGrid,8,6);
	 
	 //(-8,-5),(-5,-3),(7,5)
	 var pointD = new GraphPoint(graphGrid,-8,-5);
	 var pointE = new GraphPoint(graphGrid,-5,-3);
	 var pointF = new GraphPoint(graphGrid,7,5);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x+15,pointA.y+3,graphPointText(pointA));
	 displayText2(context,pointB.x-30,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y-5,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x+5,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-40,pointE.y+2,graphPointText(pointE));
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
	 intersectGraphPoint.gx =4;
	  intersectGraphPoint.gy =3;
	 displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	
	 
}


function Srejonshil_chapter_12_Q_2_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,8);
	 writeOriginAxisPoints(context,graphGrid);
	//(0,10),(4,-4),(6,-11)
	 var pointA = new GraphPoint(graphGrid,0,10);
	 var pointB = new GraphPoint(graphGrid,4,-4);
	 var pointC = new GraphPoint(graphGrid,6,-11);
	 
	 //(-6,-3),(-2,-0),(6,6)
	 var pointD = new GraphPoint(graphGrid,-6,-3);
	 var pointE = new GraphPoint(graphGrid,-2,0);
	 var pointF = new GraphPoint(graphGrid,6,6);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x+15,pointA.y+3,graphPointText(pointA));
	 displayText2(context,pointB.x-30,pointB.y-5,graphPointText(pointB));
	 displayText2(context,pointC.x-35,pointC.y-5,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x+5,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-40,pointE.y+2,graphPointText(pointE));
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
	 intersectGraphPoint.gx =2;
	  intersectGraphPoint.gy =3;
	 displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	
	 
}