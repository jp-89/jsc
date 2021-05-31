function chapter_12_4_Q_6_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = getCanvasPoint(graphGrid,1,0);
	 var pointB = getCanvasPoint(graphGrid,-7,2);
	 var pointC = getCanvasPoint(graphGrid,5,-1);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-4,pointA.y-5,"(1,0)");
	 displayText2(context,pointB.x-4,pointB.y-5,"(-7,2)");
	 displayText2(context,pointC.x-5,pointC.y+15,"(5,-1)");
	 displayText2(context,pointC.x-5,pointC.y+15,"(5,-1)");

	 drawLineInGraphBetweenTwoPointsAxis(graphGrid,1,0,5,-1,"purple",1,1);
	 drawLineInGraphBetweenTwoPointsAxis(graphGrid,1,0,-7,2,"purple",1,1);
	 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
	
	 
}


function chapter_12_4_Q_16_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,0,10);
	 var pointB = new GraphPoint(graphGrid,1,9);
	 var pointC = new GraphPoint(graphGrid,10,0);
	 
	 var pointD = new GraphPoint(graphGrid,-2,-3);
	 var pointE = new GraphPoint(graphGrid,6,9);
	 var pointF = new GraphPoint(graphGrid,2,3);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-40,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x-25,pointB.y+15,graphPointText(pointB));
	 displayText2(context,pointC.x-5,pointC.y+15,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-4,pointD.y+15,graphPointText(pointD));
	 displayText2(context,pointE.x-10,pointE.y-10,graphPointText(pointE));
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
	  intersectGraphPoint.gx=4;
	  intersectGraphPoint.gy=6;
	  displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	 
	  var pointVertextA = new GraphPoint(graphGrid,4,6);
	  displayText3(context,pointVertextA.x-10,pointVertextA.y-10,"A");
	 var pointVertextB = new GraphPoint(graphGrid,0,0);
	  displayText3(context,pointVertextB.x-15,pointVertextB.y,"B");
	   var pointVertextC = new GraphPoint(graphGrid,10,0);
	  displayText3(context,pointVertextC.x-10,pointVertextC.y-10,"C");
	 
}



function chapter_12_4_Q_17_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-1,3);
	 var pointB = new GraphPoint(graphGrid,9,8);
	 var pointC = new GraphPoint(graphGrid,-7,0);
	 
	 var pointD = new GraphPoint(graphGrid,5,7);
	 var pointE = new GraphPoint(graphGrid,8,10);
	 var pointF = new GraphPoint(graphGrid,-6,-4);
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-40,pointA.y,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y-1,graphPointText(pointB));
	 displayText2(context,pointC.x-5,pointC.y+15,graphPointText(pointC));
	 
	 drawPoint(context,pointD, "red");
	 drawPoint(context,pointE, "red");
	 drawPoint(context,pointF, "red");
	 displayText2(context,pointD.x-35,pointD.y+5,graphPointText(pointD));
	 displayText2(context,pointE.x-10,pointE.y-10,graphPointText(pointE));
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
	  intersectGraphPoint.gx=3;
	  intersectGraphPoint.gy=5;
	  displayText2(context,intersectGraphPoint.x+5,intersectGraphPoint.y+10,graphPointText(intersectGraphPoint));
	 
}