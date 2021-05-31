

function Higher_Math_chapter_8_3_Q_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-10);
	displayPointName(context, pointB,x2-15,y2+20);
	displayPointName(context,pointC,x3+2,y3+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	setContextColor(context, "black");
	displayText2(context,pointC.x-20,pointC.y-5,"θ");
	displayText2(context,pointC.x-35,pointC.y+15,"3");
	displayText2(context,pointB.x-10,pointB.y-25,"4");
		

}

function Higher_Math_chapter_8_3_Q_5_6(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointC =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-10,pointC.y-5);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	setContextColor(context, "black");
	displayText2(context,pointB.x-20,pointB.y-5,"θ");
	displayText2(context,pointB.x-15,pointB.y-30,"a");
	displayText2(context,pointA.x-10,pointA.y-30,"b");
		

}

