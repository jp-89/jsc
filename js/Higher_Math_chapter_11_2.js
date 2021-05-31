function Higher_Math_chapter_11_2_Q_1_pic_1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,20);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-2,0);
	 var pointB = new GraphPoint(graphGrid,5,0);
	  var pointC = new GraphPoint(graphGrid,1,4);
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	  setPointName(pointC,"C");
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-40,pointA.y+15,graphPointTextWithName(pointA));
	 displayText2(context,pointB.x-20,pointB.y+15,graphPointTextWithName(pointB));
	 displayText2(context,pointC.x-40,pointC.y-2,graphPointTextWithName(pointC));
	 
	   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	    displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
		var extensionLengeth = 100;

   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
   drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
   drawLineBetweenTwoPoints(context,pointC,pointA,"blue");
	
}

function Higher_Math_chapter_11_2_Q_2_pic_1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,15);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,2,3);
	 var pointB = new GraphPoint(graphGrid,5,6);
	  var pointC = new GraphPoint(graphGrid,-1,4);
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	  setPointName(pointC,"C");
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-10,pointA.y+15,graphPointTextWithName(pointA));
	 displayText2(context,pointB.x+5,pointB.y+15,graphPointTextWithName(pointB));
	 displayText2(context,pointC.x-40,pointC.y-2,graphPointTextWithName(pointC));
	 
	   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	    displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
		var extensionLengeth = 100;

   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
   drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
   drawLineBetweenTwoPoints(context,pointC,pointA,"blue");
	
}

function Higher_Math_chapter_11_2_Q_2_pic_2(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,15);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,5,2);
	 var pointB = new GraphPoint(graphGrid,1,6);
	  var pointC = new GraphPoint(graphGrid,-2,-3);
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	  setPointName(pointC,"C");
	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-5,pointA.y+15,graphPointTextWithName(pointA));
	 displayText2(context,pointB.x-50,pointB.y+10,graphPointTextWithName(pointB));
	 displayText2(context,pointC.x-50,pointC.y-2,graphPointTextWithName(pointC));
	 
	   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	    displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
		var extensionLengeth = 100;

   drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
   drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
   drawLineBetweenTwoPoints(context,pointC,pointA,"blue");
	
}