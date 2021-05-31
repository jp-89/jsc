
function chapter9_2_Q_3_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1-5);
	displayPointName(context, pointB,x2-10,y2+15);
	displayPointName(context,pointC,x3+5,y3+14);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);		
    writeAngle(context,pointC.x-30,pointC.y-5,"θ");
	displayName(context,pointB.x-20,pointB.y-30,"3 ");
	
	displayName(context,pointB.x+25,pointB.y+20,"4 ");

}



function chapter_9_2_Q_26(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	

	displayPointName(context,pointA,x1-10,y1-5);
	displayPointName(context, pointB,x2-15,y2+5);
	displayPointName(context,pointC,x3+5,y3+5);
	
	// display arm length
	writeRotatedText2(context,"5 cm ",pointB,pointB.x-15,pointB.y-140, -Math.PI/2);
	displayText(context,pointB.x+55,pointB.y+20,"12 cm");
	
	// display angles
	
	displayText(context,pointB.x+10,pointA.y-20,"90");
	displayText(context,pointC.x-30,pointC.y-5,"θ");
	

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
			

}
