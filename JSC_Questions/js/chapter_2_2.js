function chapter_2_2_Q_13_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-3,2);
	 var pointB = new GraphPoint(graphGrid,0,-5);
var pointC = new GraphPoint(graphGrid,.5,-.83);

	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-15,pointA.y-10,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y+5,graphPointText(pointB));
	 displayText2(context,pointC.x+5,pointC.y+10,graphPointText(pointC));
	  displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
	  //displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	
	 
}

function chapter_2_2_Q_14_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,1,2);
	 var pointB = new GraphPoint(graphGrid,-1,1);
var pointC = new GraphPoint(graphGrid,11,7);

	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-25,pointA.y-10,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y+5,graphPointText(pointB));
	 displayText2(context,pointC.x-15,pointC.y-10,graphPointText(pointC));
	  displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
	  drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	   drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	 
}